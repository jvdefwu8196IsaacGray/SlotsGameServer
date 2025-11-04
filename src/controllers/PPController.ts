import { Socket } from "socket.io";
import { BaseController } from "../base/BaseController";
import { protocol, mysql, queue, router, action } from "../event";
import { EquipPart, EquipTypes, ItemQuality, ItemQualityAdd, ItemTypes, JobTypes } from "../def";
import { Player } from "../entity/Player";
import { RewardCost, RewardCostController, createRewardCost } from "./RewardCostController";
import { Item } from "../entity/Item";
import { EntityManager, In, QueryRunner } from "typeorm";
import { game } from "../../proto/protocol";
import { TableCfgItem } from "../tables/TableCfgItem";
import { CustomData, checkerr } from "./UserController";
import { SkillController } from "./SkillController";
import { Part } from "../entity/Part";
import { Lucky, UtilNum } from "../publics/util/UtilNum";
import { logger } from "../logger";
import { Redis } from "ioredis";
import { GameController } from "./GameController";

const ErrorCode = game.ErrorCode;

var strengthLucky: Map<number, Lucky> = null;

const strengthMoney = 6.8;

const strengthItemId = 9999;

export class PackageController extends BaseController {

    static async init() {
        this.runTimes(() => {
            const list = UtilNum.split(100, 15, 7);
            strengthLucky = UtilNum.lucky(list, strengthMoney, UtilNum.randomInt(7, 21));
            logger().info("--=========================== 刷新强化概率 ===========================--");
            logger().warn(strengthLucky);
        }, 1000 * 60 * 15);
    }

    /**
     * 检测奖励或消耗是否满足
     * @param player 
     * @param RewardCost 
     * @returns 
     */
    static checkRewardCost(player: Player, reward: RewardCost = null, cost: RewardCost = null) {
        let size = player.bagMax - player.bagCount;

        if (cost) {
            if (cost.yuanbao && player.yuanbao < cost.yuanbao) {
                return "元宝不足";
            }

            if (cost.gold && player.gold < cost.gold) {
                return '金币不足';
            }

            for (const item of cost.changes) {
                if (player.itemCounts.has(item.cfgId)) {
                    item.has = true;
                    if (player.itemCounts.get(item.count) >= item.count) {
                        continue;
                    }
                }
                return '道具数量不足';
            }
        }

        if (reward) {
            for (const item of reward.changes) {
                if (player.itemCounts.has(item.cfgId)) {
                    continue;
                }
                if (--size < 0) {
                    return '背包空位不足';
                }
            }
        }
    }

    /**
     * 内存同步
     * @param player 
     * @param reward 
     */
    static syncRewardCostMem(player: Player, reward: RewardCost = null, cost: RewardCost = null) {
        if (reward) {
            for (let i = reward.changes.length - 1; i >= 0; i--) {
                const item = reward.changes[i];
                const cfg = TableCfgItem.getConfig(item.cfgId);
                if (cfg.type != ItemTypes.Equipment) {
                    const count = (player.itemCounts.get(item.cfgId) || 0) + item.count;
                    player.itemCounts.set(item.cfgId, count);
                }
                if (item.has) {
                    continue;
                }
                ++player.bagCount;
                reward.changes.splice(i, 1);
            }
            player.gold += reward.gold;
            player.yuanbao += reward.yuanbao;
        }
        if (cost) {
            cost.changes.forEach(item => {
                const count = player.itemCounts.get(item.cfgId) - item.count;
                if (count != 0) {
                    player.itemCounts.set(item.cfgId, count);
                    return;
                }
                player.itemCounts.delete(item.cfgId);
                --player.bagCount;
            });
            player.gold -= cost.gold;
            player.yuanbao -= cost.yuanbao;
        }
    }

    /**
     * 更新到数据库
     * @param player 
     * @param reward 
     * @param manager 
     */
    static async updateRewardCost(player: Player, reward: RewardCost = null, cost: RewardCost = null, manager: EntityManager) {

        if (reward) {
            if (reward.gold || reward.yuanbao) {
                await manager.query(`UPDATE player SET gold = gold + ${reward.gold}, yuanbao = yuanbao + ${reward.yuanbao} WHERE id = ${player.id}`);
            }

            if (reward.changes && reward.changes.length) {
                for (let i = 0; i < reward.changes.length; i++) {
                    const data = reward.changes[i];
                    if (data.has) {
                        await manager.query(`UPDATE item SET count = count + ${data.count} WHERE playerId = ${player.id} AND cfgId = ${data.cfgId}`);
                    } else {
                        const item = new Item;
                        item.cfgId = data.cfgId;
                        item.count = data.count;
                        if (!!data.attr) item.attr = data.attr;
                        if (!!data.quality) item.quality = data.quality;
                        item.playerId = player.id;
                        await manager.insert(Item, item);
                        reward.inserts.push(item);
                    }
                }
            }
        }

        if (cost) {
            if (cost.gold || cost.yuanbao) {
                await manager.query(`UPDATE player SET gold = gold - ${cost.gold}, yuanbao = yuanbao - ${cost.yuanbao} WHERE id = ${player.id}`);
            }
            if (cost) {
                for (let i = 0; i < cost.changes.length; i++) {
                    const item = cost.changes[i];
                    if ((player.itemCounts.get(item.cfgId) - item.count) == 0) {
                        await manager.query(`DELETE FROM item WHERE playerId = ${player.id} AND cfgId = ${item.cfgId}`);
                    } else {
                        await manager.query(`UPDATE item SET count = count - ${item.count} WHERE playerId = ${player.id} AND cfgId = ${item.cfgId}`);
                    }
                };
            }
        }
    }

    /**
     * 强化
     * @param position 部位 
     */
    @action()
    @queue()
    @mysql()
    @protocol(game.StrengthReq, game.StrengthRes)
    @router('/package/strength')
    static async strength(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {
        if (checkerr(socket, true)) return;
        if (args instanceof game.StrengthReq) {
            const { partIndex } = args;
            const { player } = <CustomData>socket.data;

            const manager = query.manager;

            const part = await manager.findOneBy(Part, { playerId: player.id, partIndex })

            const level = part ? part.strength : 0;

            if (!strengthLucky.has(level)) return ({ code: ErrorCode.FAILED, msg: '已满级' });

            const cost = createRewardCost(strengthItemId, 1);

            const err = PackageController.checkRewardCost(player, null, cost);

            if (err) return { code: ErrorCode.FAILED, msg: err };

            const cfg = strengthLucky.get(level);

            const lucky = Math.max(cfg.limit, part ? part.lucky : 0) + strengthMoney;

            await query.startTransaction();
            await PackageController.updateRewardCost(player, null, cost, manager);

            const success = lucky >= 100;
            const p = new Part;
            p.playerId = player.id;
            p.lucky = success ? 0 : lucky;
            p.strength = success ? level + 1 : level;
            await manager.save(p);

            await query.commitTransaction();
            await PackageController.syncRewardCostMem(player, null, cost);

            return success ? { code: ErrorCode.SUCCESS, msg: '强化成功' } : { code: ErrorCode.FAILED, msg: '强化失败' };
        }
    }

    /** 使用物品 */
    @action()
    @queue()
    @mysql()
    @protocol(game.StrengthReq, game.StrengthRes)
    @router('/package/use')
    static async useItem(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {

        if (checkerr(socket, true)) return;

        const { player } = <CustomData>socket.data;

        if (args instanceof game.StrengthReq) {

            // const { itemId, count } = args;

            // const item = await query.manager.findOneBy(Item, { id: itemId, playerId: player.id });

            // if (!item) {
            //     return { code: ErrorCode.FAILED, msg: '物品不存在' };
            // }

            // if (item.count < count) {
            //     return { code: ErrorCode.FAILED, msg: '物品数量不足' };
            // }

            // const cfg = TableCfgItem.getConfig(item.cfgId);

            // const manager = query.manager;

            // switch (cfg.type) {
            //     case ItemTypes.Event:
            //         {
            //             const cost = createRewardCost(item.cfgId, item.count);
            //             const reward = RewardCostController.parseRewardCost(cfg.subType, true, count);

            //             const err = PackageController.checkRewardCost(player, reward, cost);

            //             if (err) return { code: ErrorCode.FAILED, msg: err };

            //             await query.startTransaction();
            //             await PackageController.updateRewardCost(player, reward, cost, manager);
            //             await query.commitTransaction();
            //             await PackageController.syncRewardCostMem(player, null, cost);
            //             return { code: ErrorCode.SUCCESS };
            //         }
            //     case ItemTypes.SkillBook:
            //         {
            //             const cost = createRewardCost(item.cfgId, 1);

            //             const err = PackageController.checkRewardCost(player, null, cost);

            //             if (err) return { code: ErrorCode.FAILED, msg: err };

            //             await query.startTransaction();
            //             await SkillController.studySkill(player, cfg.subType, manager);
            //             await PackageController.updateRewardCost(player, null, cost, manager);
            //             await query.commitTransaction();
            //             await PackageController.syncRewardCostMem(player, null, cost);
            //             return { code: ErrorCode.SUCCESS, msg: '学习成功' };
            //         }
            //     default:
            //         break;
            // }
        }

    }

    /** 锁定物品 */
    @action()
    @queue()
    @mysql()
    @protocol(game.LockItemReq, game.LockItemRes)
    @router('/package/lock')
    static async lockItem(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {
        if (checkerr(socket, true)) return;
        const { player } = <CustomData>socket.data;
        if (args instanceof game.LockItemReq) {
            const { itemId, lock } = args;
            const sql = `UPDATE item SET isLock = ${lock} WHERE playerId = ${player.id} AND id = ${itemId}`;
            if (await query.manager.query(sql)) {
                return { code: ErrorCode.SUCCESS };
            }
        }
    }

    /** 穿戴 */
    @action()
    @queue()
    @mysql()
    @protocol(game.WearItemReq, game.WearItemRes)
    @router('/package/wear')
    static async wearItem(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {

        if (checkerr(socket, true)) return;

        const { player } = <CustomData>socket.data;

        if (args instanceof game.WearItemReq) {

            const { itemId, partIndex } = args;

            const manager = query.manager;

            const item = await query.manager.findOneBy(Item, { id: itemId, playerId: player.id });

            const part = await manager.findOneBy(Part, { playerId: player.id, partIndex })

            if (!item) {
                return { code: ErrorCode.FAILED, msg: '物品不存在' };
            }

            const cfg = TableCfgItem.getConfig(item.cfgId);

            if (cfg.type != ItemTypes.Equipment) {
                return { code: ErrorCode.FAILED, msg: '非装备物品' };
            }

            if (cfg.job != JobTypes.COMMON && cfg.job != player.job) {
                return { code: ErrorCode.FAILED, msg: '职业不符' };
            }

            const err = PackageController.checkPart(cfg.subType, partIndex);

            if (err) return { code: ErrorCode.FAILED, msg: err };

            if (part) {
                if (part.itemId == item.id) return;
                part.itemId = item.id;
                await manager.save(part);
            } else {
                const p = new Part;
                p.itemId = item.id;
                p.partIndex = partIndex;
                p.playerId = player.id;
                await manager.save(Part, p);
            }

            return { code: ErrorCode.SUCCESS };
        }
    }

    /** 卸下 */
    @action()
    @queue()
    @mysql()
    @protocol(game.TakeOffItemReq, game.TakeOffItemRes)
    @router('/package/takeOffItem')
    static async takeOff(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {

        if (checkerr(socket, true)) return;

        const { player } = <CustomData>socket.data;

        if (args instanceof game.TakeOffItemReq) {
            const { itemId, partIndex } = args;

            const manager = query.manager;

            const part = await manager.findOneBy(Part, { playerId: player.id, partIndex });

            if (part && part.itemId == itemId) {
                part.itemId = -1;
                await manager.save(part);
                return { code: ErrorCode.SUCCESS };
            }
        }
    }

    /**
     * 洗炼
     */
    @action()
    @queue()
    @mysql()
    @protocol(game.WashItemReq, game.WashItemRes)
    @router('/package/wash')
    static async wash(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {
        if (checkerr(socket, true)) return;
        const { player } = socket.data;

        if (args instanceof game.WashItemReq) {

            const { itemId, save } = args;

            const manager = query.manager;

            const item = await query.manager.findOneBy(Item, { id: itemId, playerId: player.id });

            if (!item) return { code: ErrorCode.FAILED, msg: '物品不存在' };

            const cfg = TableCfgItem.getConfig(item.cfgId);

            if (cfg.type != ItemTypes.Equipment) {
                return { code: ErrorCode.FAILED, msg: '非装备物品' };
            }

            if (save) {
                item.attr = item.tempAttr;
                item.tempAttr = "";
                await manager.save(item);
                return { code: ErrorCode.SUCCESS, save: true };

            } else {
                const data = await GameController.randomQualityAndAttr(cfg, player, UtilNum.randomInt(1, 3));
                item.tempAttr = data.attr;
                item.tempQuality = data.quality;
                await manager.save(item);
                return { code: ErrorCode.SUCCESS, ...data, save: false };
            }
        }

    }

    /** 
     * 回收 
    */
    @action()
    @queue()
    @mysql()
    @protocol(game.RecycleItemReq, game.RecycleItemRes)
    @router('/package/recycle')
    static async recycle(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {

        if (checkerr(socket, true)) return;

        const { player } = <CustomData>socket.data;

        if (args instanceof game.RecycleItemReq) {

            const { itemIds } = args;

            const manager = query.manager;

            const items = await manager.findBy(Item, { id: In(itemIds), playerId: player.id });

            if (!items.length) return { code: ErrorCode.FAILED, msg: '物品不存在' };

            let gold = 0;

            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const cfg = TableCfgItem.getConfig(item.cfgId);
                const quality = Math.max(cfg.quality, item.quality);
                gold += Math.ceil(cfg.level * 15 * ItemQualityAdd[quality]);
                if (quality >= ItemQuality.Historic) {
                    const l = logger("user");
                    l.log("回收物品", `@${player.id} ${item.cfgId} ${item.id}`);
                    l.warn("--=================--");
                    l.warn(item);
                    l.warn("--=================--");
                }
            }

            gold = Math.ceil(gold);

            await query.startTransaction();

            const count = (await manager.delete(Item, { id: In(itemIds), playerId: player.id })).affected;

            if (count != items.length) return;

            await manager.query(`UPDATE player SET gold = gold + ${gold} WHERE id = ${player.id}`);

            await query.commitTransaction();

            player.bagCount -= items.length;

            return { code: ErrorCode.SUCCESS, gold };
        }
    }

    /** 分解物品 */
    static async decomposeItem(): Promise<void> {

    }

    /** 合成物品 */
    static async composeItem(): Promise<void> {

    }

    /** 鉴定 todo */
    static async identify(): Promise<void> {

    }

    /** 升星 todo */
    static async upgradeStar(): Promise<void> {

    }

    private static checkPart(subType: number, part: number) {
        const v = EquipPart[subType];
        if (typeof v == "number") {
            if (v != part) return '穿戴错误';
        } else {
            if (v.indexOf(part) == -1) return '穿戴错误';
        }
    }
}
