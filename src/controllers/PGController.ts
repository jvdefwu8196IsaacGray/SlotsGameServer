import { BaseController } from "../base/BaseController";
import { CostType, JobTypes } from "../def";
import { User } from "../entity/User";
import { protocol, mysql, router, redis, action } from "../event";
import { Socket } from "socket.io";
import { Player } from "../entity/Player";
import { QueryRunner } from "typeorm";
import { Item } from "../entity/Item";
import { Part } from "../entity/Part";
import { Skill } from "../entity/Skill";
import { game } from "../../proto/protocol";
import { Redis } from "ioredis";
import { GameController } from "./GameController";
import { createRewardCost } from "./RewardCostController";
import { PackageController } from "./PackageController";

const ErrorCode = game.ErrorCode;

export interface CustomData {
    user: User;
    /** 玩家信息 */
    player?: Player;
    /** 背包操作 */
    queue: Function[];
    /** 加锁 */
    lock: boolean;
    /** 刷怪列表 */
    monsters: Object;
    /** 警告 */
    warn: number;
};

export interface SkillExp {
    skillId: number;
    count: number;
};

export function checkerr(socket: Socket, checkPlayer: boolean = true) {
    // console.log(socket);
    if (!socket.data) {
        socket.emit('game/error', { code: 999, msg: '登陆异常, 请重新登陆' });
        return true;
    }
    const data = socket.data as CustomData;
    if (!data.user) {
        socket.emit('game/error', { code: 999, msg: '登陆异常, 请重新登陆' });
        return true;
    }
    if (checkPlayer && !data.player) {
        socket.emit('game/error', { code: 999, msg: '登陆异常, 请重新登陆' });
        return true;
    }
    return false;
}

export class UserController extends BaseController {

    static async init() {

    }

    /**
     * 请求登陆
     * @param socket 
     * @param account 
     * @param password 
     * @returns 
     */
    @mysql()
    @protocol(game.LoginReq, game.LoginRes)
    @router('/user/login')
    static async login(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {
        if (args instanceof game.LoginReq) {
            const { account, password } = args;
            const manager = query.manager;
            const user = await manager.findOneBy(User, { account });
            /** 检测用户是否存在 */
            if (!user) {
                return { code: ErrorCode.FAILED, msg: '用户不存在' };
            }
            /** 检测密码错误 */
            if (user.password != password) {
                return { code: ErrorCode.FAILED, msg: '密码错误' };
            }
            socket.data.user = user;
            user.player = await manager.findBy(Player, { userId: user.uid });
            return { code: ErrorCode.SUCCESS, player: user.player, msg: '登陆成功' };
        }
    }

    /**
     * 请求注册
     * @param socket 
     * @param account 
     * @param password 
     * @returns 
     */
    @mysql()
    @protocol(game.RegisterReq, game.RegisterRes)
    @router('/user/register')
    static async register(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {
        if (args instanceof game.RegisterReq) {
            const { account, password } = args;
            const manager = query.manager;
            /** 判断用户是否存在 */
            if (await manager.existsBy(User, { account })) {
                return { code: ErrorCode.FAILED, msg: '用户已存在' };
            }
            /** 创建用户 */
            const newUser = new User();
            newUser.account = account;
            newUser.password = password;
            newUser.email = 'test@qq.com';
            await manager.save(newUser);
            return { code: ErrorCode.SUCCESS, msg: '注册成功' };
        }
    }

    /**
     * 创建角色
     * @param socket 
     * @param name 
     * @param job 
     * @returns 
     */
    @mysql()
    @protocol(game.CreateReq, game.CreateRes)
    @router('/user/player/create')
    static async create(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {
        if (checkerr(socket, false)) return;
        if (args instanceof game.CreateReq) {
            const { name, job } = args;
            const { user } = <CustomData>socket.data;
            const manager = query.manager;

            /** 判断是否存在相同的职业 */
            for (let i = 0; i < user.player?.length; i++) {
                if (user.player[i].job == job) {
                    return { code: ErrorCode.FAILED, msg: '职业已存在' };
                }
            }

            if (await manager.existsBy(Player, { name })) {
                return { code: ErrorCode.FAILED, msg: '角色名已存在' };
            }

            const player = new Player();
            player.name = name;
            player.job = job;
            player.userId = user.uid;
            await manager.save(player);
            user.player.push(player);

            const result = { id: player.id, name: name, job: job, rebirth: 0, exp: 0 };
            return { code: ErrorCode.SUCCESS, msg: '创建角色成功', player: result };
        }
    }

    /**
     * 选中角色
     * @param socket 
     * @param playerId 
     * @returns 
     */
    @redis()
    @mysql()
    @protocol(game.SelectReq, game.SelectRes)
    @router('/user/player/select')
    static async select(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {
        if (checkerr(socket, false)) return;
        if (args instanceof game.SelectReq) {
            const { playerId } = args;
            const { user } = <CustomData>socket.data;
            const manager = query.manager;
            for (let i = 0; i < user.player.length; i++) {
                const player = user.player[i];
                if (player.id == playerId) {
                    const date = new Date();
                    await GameController.clearDay(player, redis, date);
                    const caches = await GameController.getCaches(player, redis);
                    const items = await manager.findBy(Item, { playerId });
                    const parts = await manager.findBy(Part, { playerId });
                    const skills = await manager.findBy(Skill, { playerId });
                    console.log(parts,555555555);
                    
                    player.initPackage(items, parts);
                    player.initCaches(caches.settings, caches.games);
                    socket.data.player = player;
                    return {
                        code: ErrorCode.SUCCESS,
                        caches,
                        player,
                        skills,
                        parts,
                        items: items,
                        time: date.getTime()
                    };
                }
            }
            return { code: ErrorCode.FAILED, msg: '找不到角色信息' };
        }
    }

    /** 获取物品 */
    @action()
    @mysql()
    @protocol(game.GetItemReq, game.GetItemRes)
    @router('/gm/getItem')
    static async getItem(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {
        if (checkerr(socket, true)) return;
        if (args instanceof game.GetItemReq) {
            const { itemId, count } = args;
            const { player } = <CustomData>socket.data;
            const manager = query.manager;
            const reward = createRewardCost(itemId, count);
            const err = PackageController.checkRewardCost(player, reward);
            if (err) return { code: ErrorCode.FAILED, msg: err };
            await query.startTransaction();
            await PackageController.updateRewardCost(player, reward, null, manager);
            await query.commitTransaction();
            await PackageController.syncRewardCostMem(player, reward);
            return { code: ErrorCode.SUCCESS, reward };
        }
    }

    /** 排行数据 */
    @action()
    @redis()
    @mysql()
    @protocol(game.GetRankReq, game.GetRankRes)
    @router('/game/rank')
    static async rank(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {
        if (checkerr(socket, true)) return;
        if (args instanceof game.GetRankReq) {
            const { type } = args;
            let data: any[];
            let key = '';
            if (type < 3) {
                key = 'power';
                data = await query.query(`SELECT * FROM player WHERE job = ${type + 1} ORDER BY power DESC LIMIT 30`);
            } else if (type == 3) {
                key = 'totalRecharge';
                data = await query.query(`SELECT * FROM player WHERE totalRecharge > 0 ORDER BY totalRecharge DESC LIMIT 30`);
            } else if (type == 4) {
                key = 'level';
                data = await query.query(`SELECT * FROM player ORDER BY rebirth,level DESC LIMIT 30`);
            }
            const ranks = [];
            data.forEach((v) => {
                ranks.push({
                    playerId: v.id,
                    name: v.name,
                    job: v.job,
                    level: v.level,
                    rebirth: v.rebirth,
                    rankValue: v[key],
                });
            });
            return { code: ErrorCode.SUCCESS, ranks };
        }
    }

    /** 角色充值 */
    // @router('/user/recharge')
    static async recharge(): Promise<void> {

    }

    /** 游戏内支付 */
    // @router('/user/pay')
    static async pay(type: number, id: number): Promise<void> {

    }

    /** 武艺 todo */
    // @router('/user/martial')
    static async martial(id: number): Promise<void> {

    }

    /** 消耗检测 */
    static checkCost(player: Player, type: number, value: number) {
        if (type == CostType.GOLD) return player.gold >= value;
        if (type == CostType.YUANBAO) return player.yuanbao >= value;
    }

    /**
     * 条件检测
     * @param player 
     * @param global 
     * @param condition 
     * @param limit 
     * @returns 
     */
    static async checkCondition(player: Player, global: boolean, condition: number, limit: number | number[]) {
        // switch (condition) {
        //     // 检查充值次数
        //     case GameCondition.RECHARGE_TIMES:
        //         if (typeof limit == 'number') {
        //             if (global) return player.globalCounts.rechargeTimes >= limit;
        //             else return player.dayCounts.rechargeTimes >= limit;
        //         }
        //         break;
        //     // 检查充值金额
        //     case GameCondition.RECHARGE_AMOUNT:
        //         if (typeof limit == 'number') {
        //             if (global) return player.globalCounts.rechargeAmount >= limit;
        //             else return player.dayCounts.rechargeAmount >= limit;
        //         }
        //         break;
        //     // 检查强化次数
        //     case GameCondition.STRENGTH_TIMES:
        //         if (typeof limit == 'number') {
        //             if (global) return player.globalCounts.strengthTimes >= limit;
        //             else return player.dayCounts.strengthTimes >= limit;
        //         }
        //         break;
        //     // 检查金币消费
        //     case GameCondition.GOLD_CONSUMPTION:
        //         if (typeof limit == 'number') {
        //             if (global) return player.globalCounts.goldConsumption >= limit;
        //             else return player.dayCounts.goldConsumption >= limit;
        //         }
        //         break;
        //     // 检查元宝消费
        //     case GameCondition.YUAN_BAO_CONSUMPTION:
        //         if (typeof limit == 'number') {
        //             if (global) return player.globalCounts.yuanbaoConsumption >= limit;
        //             else return player.dayCounts.yuanbaoConsumption >= limit;
        //         }
        //         break;
        //     // 检查回收次数
        //     case GameCondition.RECYCLE_TIMES:
        //         if (typeof limit == 'number') {
        //             if (global) return player.globalCounts.recycleTimes >= limit;
        //             else return player.dayCounts.recycleTimes >= limit;
        //         }
        //         break;
        //     // 检查转生次数
        //     case GameCondition.REBIRTH_TIMES:
        //         if (typeof limit == 'number') return player.rebirth >= limit;
        //         break;
        //     // 检查等级达到
        //     case GameCondition.LEVEL_ACHIEVED:
        //         if (typeof limit == 'number') return player.level >= limit || player.rebirth > 0;
        //         break;
        //     // 检查强化等级
        //     case GameCondition.STRENGTH_LEVEL:
        //         if (typeof limit == 'number') {
        //             for (let i = 0; i < player.strength.length; i++) {
        //                 if (player.strength[i] >= limit) {
        //                     return true;
        //                 }
        //             }
        //         }
        //         break;
        //     // 检查全身强化等级
        //     case GameCondition.FULL_STRENGTH_LEVEL:
        //         if (typeof limit == 'number') {
        //             if (player.strength.length < EQUIP_MAX) return false;
        //             for (let i = 0; i < player.strength.length; i++) {
        //                 if (player.strength[i] < limit) {
        //                     return false;
        //                 }
        //             }
        //         }
        //         return true;
        //     // 检查最低穿戴装备等级
        //     case GameCondition.LOWEST_EQUIPMENT_LEVEL:
        //         if (typeof limit != 'number') {
        //             let count = limit[0];
        //             let level = limit[1];
        //             for (let i = 0; i < player.items.length; i++) {
        //                 const cfg = TableCfgItem.getConfig(player.items[i].cfgId);
        //                 if (cfg.level >= level && --count <= 0) {
        //                     return true;
        //                 }
        //             }
        //         }
        //         break;
        //     // 检查最低穿戴装备品质
        //     case GameCondition.LOWEST_EQUIPMENT_QUALITY:
        //         let count = limit[0];
        //         let quality = limit[1];
        //         for (let i = 0; i < player.items.length; i++) {
        //             const item = player.items[i];
        //             const cfg = TableCfgItem.getConfig(item.cfgId);
        //             if (Math.max(cfg.quality, item.quality) >= quality && --count <= 0) {
        //                 return true;
        //             }
        //         }
        //         break;
        //     // 检查金币大于等于
        //     case GameCondition.GOLD_GREATER_THAN_OR_EQUAL:
        //         if (typeof limit == 'number') {
        //             return player.gold >= limit;
        //         }
        //         break;
        //     // 检查背包容量大于等于
        //     case GameCondition.WAREHOUSE_CAPACITY_GREATER_THAN_OR_EQUAL:
        //         if (typeof limit == 'number') {
        //             return player.bagMax >= limit;
        //         }
        //         break;
        //     // 检查完成指定类型任务
        //     case GameCondition.COMPLETE_TASK_TYPE:
        //         break;
        //     default:
        //         throw new Error(`Unknown condition type: ${condition}`);
        // }

        return false;
    }

}
