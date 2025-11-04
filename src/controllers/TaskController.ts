import { Socket } from "socket.io";
import { BaseController } from "../base/BaseController";
import { protocol, mysql, queue, router, action } from "../event";
import { CustomData, checkerr } from "./UserController";
import { RewardCostController } from "./RewardCostController";
import { Task } from "../entity/Task";
import { TableCfgTask } from "../tables/TableCfgTask";
import { PackageController } from "./PackageController";
import { game } from "../../proto/protocol";
import { QueryRunner } from "typeorm";
import { Redis } from "ioredis";
import { Player } from "../entity/Player";

const ErrorCode = game.ErrorCode;

export class TaskController extends BaseController {

    static async init() {

    }

    /**
      * 获取列表
      */
    static async list(player: Player, query: QueryRunner): Promise<any> {
        const taskList = await query.manager.findBy(Task, { playerId: player.id });
        return taskList;
    }

    /** 领取奖励 */
    @action()
    @queue()
    @mysql()
    @protocol(game.TaskReceiveReq, game.TaskReceiveRes)
    @router('/task/receive')
    static async receive(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {
        if (checkerr(socket, true)) return;
        const { player } = <CustomData>socket.data;
        const { cfgId, type } = args;

        const cfg = TableCfgTask.getConfig(cfgId);

        if (!cfg) {
            return { code: ErrorCode.FAILED, msg: '任务不存在' };
        }

        const manager = query.manager;

        if (await manager.existsBy(Task, { playerId: player.id, type, cfgId })) {
            return { code: ErrorCode.FAILED, msg: '已领取过奖励' };
        }

        const reward = await RewardCostController.parseRewardCost(cfg.rewards);

        const err = PackageController.checkRewardCost(player, reward);

        if (err) return { code: ErrorCode.FAILED, msg: err };

        await query.startTransaction();
        const task = new Task();
        task.playerId = player.id;
        task.type = type;
        task.cfgId = cfgId;
        await manager.insert(Task, task);
        await PackageController.updateRewardCost(player, reward, null, manager);
        await query.commitTransaction();
        await PackageController.syncRewardCostMem(player, reward);

        return { code: ErrorCode.SUCCESS, msg: '领取成功', reward };
    }

}


