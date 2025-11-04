import { Socket } from "socket.io";
import { BaseController } from "../base/BaseController";
import { protocol, mysql, queue, router, action } from "../event";
import { CustomData, checkerr } from "./UserController";
import { Mail } from "../entity/Mail";
import { RewardCostController } from "./RewardCostController";
import { PackageController } from "./PackageController";
import { game } from "../../proto/protocol";
import { QueryRunner } from "typeorm";
import { Redis } from "ioredis";

const ErrorCode = game.ErrorCode;

/** 邮件模块不做缓存处理 */
export class MailController extends BaseController {

    static async init() {

    }

    /**
     * 获取列表
     */
    @mysql()
    @protocol(game.MailInfoReq, game.MailInfoRes)
    @router('/mail/info')
    static async info(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {
        if (checkerr(socket, true)) return;
        const { player } = <CustomData>socket.data;
        const mailList = await query.manager.findBy(Mail, { playerId: player.id });
        return { code: ErrorCode.SUCCESS, mailList };
    }

    /** 领取奖励 */
    @action()
    @queue()
    @mysql()
    @protocol(game.MailReceiveReq, game.MailReceiveRes)
    @router('/mail/receive')
    static async receive(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {
        if (checkerr(socket, true)) return;

        if (args instanceof game.MailReceiveReq) {
            const { player } = <CustomData>socket.data;
            const { mailId, type } = args;

            const manager = query.manager;

            const mail = await manager.findOneBy(Mail, { id: mailId });
            if (!mail) return { code: ErrorCode.FAILED, msg: '邮件不存在' };
            if (mail.playerId != player.id || mail.type != type) return;
            if (mail.receiveTime != 0) return { code: ErrorCode.FAILED, msg: '邮件已领取' };

            const reward = RewardCostController.parseRewardCostByJson(mail.rewards);

            const err = PackageController.checkRewardCost(player, reward);

            if (err) return { code: ErrorCode.FAILED, msg: err };

            await query.startTransaction();
            mail.receiveTime = Date.now();
            const result = await manager.query(`UPDATE mail SET receive_time = ${Date.now()} WHERE id = ${mailId} AND receive_time = 0`);
            if (result.affectedRows == 0) throw '操作速度过快';
            await PackageController.updateRewardCost(player, reward, null, manager);
            await query.commitTransaction();
            await PackageController.syncRewardCostMem(player, reward);
            return { code: ErrorCode.SUCCESS, msg: '领取成功', reward };
        }
    };
}
