import { protocol, mysql, queue, router, action } from "../event";
import { Socket } from "socket.io";
import { CustomData, checkerr } from "./UserController";
import { BaseController } from "../base/BaseController";
import { Growth } from "../entity/Growth";
import { RewardCostController } from "./RewardCostController";
import { PackageController } from "./PackageController";
import { game } from "../../proto/protocol";
import { TableCfgGrowth } from "../tables/TableCfgGrowth";
import { QueryRunner } from "typeorm";
import { Redis } from "ioredis";
import { Player } from "../entity/Player";

const ErrorCode = game.ErrorCode;

export class GrowthController extends BaseController {

    static async init() {

    }

    /**
     * 获取列表
     */
    static async list(player: Player, query: QueryRunner): Promise<any> {
        const growthList = await query.manager.findBy(Growth, { playerId: player.id });
        return growthList;
    }

    /** 领取奖励 */
    @action()
    @queue()
    @mysql()
    @protocol(game.GrowthReceiveReq, game.GrowthReceiveRes)
    @router('/growth/receive')
    static async receive(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {
        if (checkerr(socket, true)) return;

        if (args instanceof game.GrowthReceiveReq) {
            const { cfgId, type } = args;

            const { player } = <CustomData>socket.data;

            if (type == 1 && player.growthState1 == 0) {
                return { code: ErrorCode.FAILED, msg: '请先开通后再领取' };
            } else if (type == 2 && player.growthState2 == 0) {
                return { code: ErrorCode.FAILED, msg: '请先开通后再领取' };
            }

            const cfg = TableCfgGrowth.getConfig(cfgId);

            if (!cfg) {
                return { code: ErrorCode.FAILED, msg: '奖励不存在' };
            }

            const reward = await RewardCostController.parseRewardCost([cfg.rewards[type]]);

            const err = PackageController.checkRewardCost(player, reward);

            if (err) return { code: ErrorCode.FAILED, msg: err };

            const manager = query.manager;

            if (await manager.existsBy(Growth, { playerId: player.id, type, cfgId })) {
                return { code: ErrorCode.FAILED, msg: '已领取过奖励' };
            }

            await query.startTransaction();
            const growth = new Growth();
            growth.playerId = player.id;
            growth.type = type;
            growth.cfgId = cfgId;
            await manager.insert(Growth, growth);
            await PackageController.updateRewardCost(player, reward, null, manager);
            await query.commitTransaction();
            await PackageController.syncRewardCostMem(player, reward);
            return { code: ErrorCode.SUCCESS, msg: '领取成功', reward };
        }
    }

}
