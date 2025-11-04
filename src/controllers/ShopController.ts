
import { Socket } from "socket.io";
import { BaseController } from "../base/BaseController";
import { action, mysql, protocol, router } from "../event";
import { checkerr, CustomData } from "./UserController";
import { game } from "../../proto/protocol";
import { Redis } from "ioredis";
import { Code, QueryRunner } from "typeorm";
import { TableCfgShop } from "../tables/TableCfgShop";
import { createRewardCost } from "./RewardCostController";
import { PackageController } from "./PackageController";

const ErrorCode = game.ErrorCode;


/**
 * 事件转发
 */
export class ShopController extends BaseController {

    static async init() {

    }

    @action()
    @mysql()
    @protocol(game.BuyItemReq, game.BuyItemRes)
    @router("/shop/buyItem")
    static async buyItem(args: any, socket: Socket, query: QueryRunner, redis: Redis) {
        if (checkerr(socket, true)) return;

        const { player } = <CustomData>socket.data;

        if (args instanceof game.BuyItemReq) {
            const { shopId, count } = args;
            const cfg = TableCfgShop.getConfig(shopId);
            if (cfg.type == "充值") {
                return;
            }
            const manager = query.manager;
            const cost = createRewardCost();
            const reward = createRewardCost(cfg.item, count);
            if (cfg.type == "金币") cost.gold = cfg.price * count;
            else cost.yuanbao = cfg.price * count;
            const err = PackageController.checkRewardCost(player, reward, cost);
            if (err) return { code: ErrorCode.FAILED, msg: err };
            await query.startTransaction();
            await PackageController.updateRewardCost(player, reward, cost, manager);
            await query.commitTransaction();
            await PackageController.syncRewardCostMem(player, reward);
            return { code: ErrorCode.SUCCESS, reward, yuanbao: player.yuanbao, gold: player.gold };
        }

    }

}
