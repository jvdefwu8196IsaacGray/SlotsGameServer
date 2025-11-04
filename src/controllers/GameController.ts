
import { BaseController } from "../base/BaseController";
import { Redis } from "ioredis"
import { Player } from "../entity/Player";
import { TableCfgMap } from "../tables/TableCfgMap";
import { UtilNum } from "../publics/util/UtilNum";
import { Socket } from "socket.io";
import { QueryRunner } from "typeorm";
import { CustomData, checkerr } from "./UserController";
import { queue, router, redis, action, protocol, mysql } from "../event";
import { TableCfgMonster } from "../tables/TableCfgMonster";
import { RewardCost, RewardCostItem, createRewardCost } from "./RewardCostController";
import { EquipTypes, ItemQuality, ItemQualityAdd, ItemTypes, JobTypes, RecycleType } from "../def";
import { TableCfgItem } from "../tables/TableCfgItem";
import { logger } from "../logger";
import { game } from "../../proto/protocol";
import { log, table } from "console";
import { PackageController } from "./PackageController";

const ErrorCode = game.ErrorCode;

var mapDrop = {};

/**
 * 事件转发
 */
export class GameController extends BaseController {

    static async init() {
        TableCfgItem.forEach((v) => {
            TableCfgMap.forEach((v2) => {
                if (!v2.dropLimit) return;
                if (v2.drop.indexOf(v.subType) == -1) return;
                if (v.level < v2.dropLimit[0] || v.level > v2.dropLimit[1]) return;
                if (mapDrop[v2.id] == undefined) mapDrop[v2.id] = [];
                mapDrop[v2.id].push(v.id);
            });
        });
    }

    /** 获取缓存 */
    static async getCaches(player: Player, redis: Redis) {
        const settings = await redis.hgetall(`settings:${player.id}`);
        const games = await redis.hgetall(`games:${player.id}`);
        const days = await redis.hgetall(`days:${player.id}`);
        delete days.time;
        delete games.lastLoginTime;
        console.log(settings, games, days);

        return { settings, games, days };
    }

    /**
     * 清除每日数据
     */
    static async clearDay(player: Player, redis: Redis, date: Date) {
        const lastTime = Number(await redis.hget(`days:${player.id}`, 'time'));
        const lastDay = new Date(lastTime).getDay();
        const multi = redis.multi();
        multi.hset(`games:${player.id}`, 'lastLoginTime', date.getTime());

        if (date.getDay() != lastDay) {
            await multi.del(`controllers:${player.id}`);
            await multi.del(`days:${player.id}`);
            await multi.hset(`days:${player.id}`, 'time', date.getTime());
            await multi.hincrby(`games:${player.id}`, 'loginDay', 1);
            await multi.exec();
            return true;
        }

        await multi.exec();

        return false;
    }

    /**
     * 购买药品
     */
    static async buyBattleItem(player: Player, redis: Redis, itemId: number, num: number) {
        const key = `items:count:${itemId}`;
        if (player.games[key]) {
            player.games[key] += num;
        } else {
            player.games[key] = num;
        }
        await redis.hincrby(`games:${player.id}`, key, num);
    }

    /** 
     * 使用药品 
    */
    @queue()
    @redis()
    @protocol(game.UseMedicineReq, game.UseMedicineRes)
    @router('/game/useMedicine')
    static async useMedicine(args: any, socket: Socket, query: QueryRunner, redis: Redis) {
        if (checkerr(socket, true)) return;
        const { player } = <CustomData>socket.data;
        if (args instanceof game.UseMedicineReq) {
            const { itemId } = args;
            const key = `items:count:${itemId}`;
            if (player.games[key]) {
                --player.games[key];
                await redis.hincrby(`games:${player.id}`, key, -1);
            }
            return { code: ErrorCode.SUCCESS };
        }
    }

    /**
     * 获取服务器时间
     */
    @queue()
    @redis()
    @protocol(game.ServerTimeReq, game.ServerTimeRes)
    @router('/game/serverTime')
    static async serverTime(args: any, socket: Socket, query: QueryRunner, redis: Redis) {
        if (checkerr(socket, true)) return;
        if (args instanceof game.ServerTimeReq) {
            const { player } = <CustomData>socket.data;
            let { isClear, time } = args;
            const date = new Date;
            if (isClear) isClear = await this.clearDay(player, redis, date);
            if (time != 0 && <number>time >= (date.getTime() + 5000)) {
                if (++socket.data.warn >= 10) {
                    logger().warn(`玩家${player.id}在${date.getTime()}时尝试修改时间`);
                    return { code: ErrorCode.RESTART }
                }
                if (socket.data.warn) --socket.data.warn;
            }
            return { code: ErrorCode.SUCCESS, time: date.getTime(), isClear };
        }
    }

    /** 键值储存 */
    @queue()
    @redis()
    @protocol(game.SaveSettingReq, game.SaveSettingRes)
    @router('/game/saveSetting')
    static async saveSetting(args: any, socket: Socket, query: QueryRunner, redis: Redis) {
        if (checkerr(socket, true)) return;
        console.log(1);

        if (args instanceof game.SaveSettingReq) {
            const { key, value, } = args;
            const { player } = <CustomData>socket.data;
            redis.hset(`settings:${player.id}`, key, value);
            player.settings[key] = value;
            console.log(2);

            return { code: ErrorCode.SUCCESS };
        }
    }

    /** 
     * 进入地图
    */
    @action()
    @queue()
    @redis()
    @protocol(game.EnterMapReq, game.EnterMapRes)
    @router('/game/enterMap')
    static async enterMap(args: any, socket: Socket, query: QueryRunner, redis: Redis) {
        if (checkerr(socket, true)) return;
        if (args instanceof game.EnterMapReq) {
            const { mapId } = args;
            const { player } = <CustomData>socket.data;
            await redis.hset(`games:${player.id}`, 'mapId', mapId);
            return { code: ErrorCode.SUCCESS };
        }
    }

    /** 
     * 刷怪请求
    */
    @action()
    @queue()
    @protocol(game.RefreshMonsterReq, game.RefreshMonsterRes)
    @router('/game/refreshMonster')
    static async refreshMonster(args: any, socket: Socket, query: QueryRunner, redis: Redis) {
        if (checkerr(socket, true)) return;
        const { monsters } = <CustomData>socket.data;

        if (args instanceof game.RefreshMonsterReq) {
            const { mapId, count } = args;
            const cfg = TableCfgMap.getConfig(mapId, true);
            const list = cfg.monsters;
            if (list) {
                const result = [];
                for (let i = 0; i < count; i++) {
                    const monsterId = list[UtilNum.randomInt(0, list.length - 1)];;
                    result.push(monsterId);
                    if (monsters[monsterId]) ++monsters[monsterId];
                    else monsters[monsterId] = 1;
                }
                return { code: ErrorCode.SUCCESS, monsters: result };
            }
        }
    }

    /**
     * 杀怪请求
     */
    @action()
    @queue()
    @mysql()
    @redis()
    @protocol(game.KillMonsterReq, game.KillMonsterRes)
    @router('/game/killMonster')
    static async killMonster(args: any, socket: Socket, query: QueryRunner, redis: Redis) {
        if (checkerr(socket, true)) return;
        if (args instanceof game.KillMonsterReq) {
            const { player, monsters } = <CustomData>socket.data;
            const { monsterId, mapId } = args;
            if (!monsters[monsterId] || monsters[monsterId] <= 0) return;

            const multi = redis.multi();

            --monsters[monsterId];
            const cfg = TableCfgMonster.getConfig(monsterId);
            const exp = cfg.level * 25;
            await multi.hincrby(`games:${player.id}`, 'exp', exp);
            await multi.hincrby(`games:${player.id}`, `kill:${monsterId}`, 1);
            await multi.hincrby(`days:${player.id}`, `kill:${monsterId}`, 1);
            await multi.hincrby(`days:${player.id}`, `kill:count`, 1);
            await multi.exec();

            // if (mapDrop[mapId]) {
            const reward = await GameController.dropItem(socket, player, mapId, 1, redis);
            if (reward) {
                GameController.dropItemRecycle(player, reward);
                await query.startTransaction();
                await PackageController.updateRewardCost(player, reward, null, query.manager);
                await query.commitTransaction();
                await PackageController.syncRewardCostMem(player, reward);
            }
            return { code: ErrorCode.SUCCESS, exp, reward };
            // }

            // return { code: ErrorCode.SUCCESS, exp };
        }
    }

    /** 
     * 掉落回收
    */
    static dropItemRecycle(player: Player, reward: RewardCost) {
        for (let i = reward.changes.length - 1; i >= 0; i--) {
            const item = reward.changes[i];
            let cfg = TableCfgItem.getConfig(item.cfgId);
            if (cfg.type == ItemTypes.Equipment) {
                const quality = Math.max(cfg.quality, item.quality);
                const key = RecycleType[quality];
                if (player.settings[key] || (player.job != cfg.job && player.settings[RecycleType.OtherJob])) {
                    reward.gold += Math.ceil(cfg.level * 15 * ItemQualityAdd[quality]);
                    reward.changes.splice(i, 1);
                    reward.recycles.push({ cfgId: item.cfgId, count: 1, quality });
                }
            }
        }
    }

    /**
     * 物品掉落
     * @param socket 
     * @param player 
     */
    static async dropItem(socket: Socket, player: Player, mapId: number, classType: number, redis: Redis) {
        const size = player.bagMax - player.bagCount;

        const count = Math.min(1, size);

        if (count) {
            const reward = createRewardCost();
            for (let i = 0; i < count; i++) {
                if (classType == 4) {
                    /** boss 宝石掉落 */
                    let item = this.dropGem(socket, player, redis);
                    if (item) {
                        reward.changes.push(item);
                        continue;
                    }
                    /** boss 技能书掉落 */
                    item = this.dropSkillBook(socket, player, redis);
                    if (item) {
                        reward.changes.push(item);
                        continue;
                    }
                }
                else {
                    reward.changes.push(this.randomEquip(105001, player, classType));
                }
            }
            return reward;
        }
    }

    /** 
     * 掉落宝石
     */
    static async dropGem(socket: Socket, player: Player, redis: Redis) {
        socket;
        const key = `controllers:${player.id}`;
        const count = Number(await redis.hget(key, 'gem'));
        if (count > 10) return;
        redis.hincrby(key, 'gem', 1);
        if (UtilNum.randomInt(0, 100) < 5) return <RewardCostItem>{ count: 1, cfgId: 105002 };
    }

    /**
     * 技能书掉落
     */
    static async dropSkillBook(socket: Socket, player: Player, redis: Redis) {
        socket;
        const key = `controllers:${player.id}`;
        const count = Number(await redis.hget(key, 'skillbook'));
        if (count > 10) return;
        redis.hincrby(key, 'skillbook', 1)
        if (UtilNum.randomInt(0, 100) < 5) return <RewardCostItem>{ count: 1, cfgId: 105002 };
    }

    /**
     * 随机装备
     * @param cfgId 
     * @param player 
     * @param classType 怪物类型
     * @returns 
     */
    static randomEquip(cfgId: number, player: Player, classType: number = 1) {
        const cfg = TableCfgItem.getConfig(cfgId);
        return <RewardCostItem>{ count: 1, cfgId, ...GameController.randomQualityAndAttr(cfg, player, classType) }
    }

    /** 
     * 随机品质和属性
     */
    static randomQualityAndAttr(cfg: TableCfgItem, player: Player, classType: number = 1) {
        let attr;
        let num = 0;
        let quality = ItemQuality.Normal;

        const rand = UtilNum.randomInt(0, 100) / classType;
        /** 计算品质的概率 */
        if (rand <= 5) {
            num = 18;
            quality = ItemQuality.Legend;
        } else if (rand <= 8) {
            num = 12;
            quality = ItemQuality.Historic;
        } else if (rand <= 15) {
            num = 8;
            quality = ItemQuality.Rare;
        } else if (rand <= 20) {
            num = 6;
            quality = ItemQuality.Excellent;
        }

        /** 随机属性 */
        if (num != 0) {
            attr = {};
            let hpmp = false;
            let critical = false;
            let miss = false;
            let lucky = false;
            let hit = false;
            switch (cfg.subType) {
                case EquipTypes.Weapon:
                    hpmp = true;
                    miss = true;
                    hit = true;
                    break;
                case EquipTypes.Helmet:
                    hpmp = true;
                    miss = true;
                    break;
                case EquipTypes.Armor:
                    hpmp = true;
                    lucky = true;
                    break;
                case EquipTypes.Belt:
                    hpmp = true;
                    miss = true;
                case EquipTypes.Necklace:
                    hpmp = true;
                    critical = true;
                    hit = true;
                    lucky = true;
                    break;
                case EquipTypes.Bracelet:
                    miss = true;
                    critical = true;
                    lucky = true;
                    break;
                case EquipTypes.Ring:
                    critical = true;
                    hit = true;
                    break;
                default:
                    lucky = true;
                    break;
            }

            if (num && hpmp) {
                const rand = UtilNum.randomInt(0, 100);
                if (num && rand <= 25) {
                    --num;
                    attr.hpMax = UtilNum.randomInt(5, 10) * cfg.level;
                }
                if (num && rand <= 50) {
                    --num;
                    attr.mpMax = UtilNum.randomInt(5, 10) * cfg.level;
                }
            }

            if (num >= 2 && miss) {
                const rand = UtilNum.randomInt(0, 100);
                if (num && rand <= 15) {
                    attr.miss = UtilNum.randomInt(1, Math.ceil(cfg.level / 5));
                    num -= 2;
                }
            }

            if (num >= 2 && hit) {
                const rand = UtilNum.randomInt(0, 100);
                if (num && rand <= 15) {
                    attr.hit = UtilNum.randomInt(1, Math.ceil(cfg.level / 5));
                    num -= 2;
                }
            }

            if (num >= 2 && critical) {
                const rand = UtilNum.randomInt(0, 100);
                if (num && rand <= 15) {
                    attr.critical = UtilNum.randomInt(1, Math.ceil(cfg.level / 5));
                    num -= 2;
                }
            }

            if (num >= 2 && lucky) {
                const rand = UtilNum.randomInt(0, 100);
                if (num && rand <= 15) {
                    attr.lucky = UtilNum.randomInt(1, Math.ceil(cfg.level / 5));
                    num -= 2;
                }
            }
        }

        /** 随机攻击或防御 */
        while (num > 0) {
            const v = Math.min(num, UtilNum.randomInt(1, 3));
            /** 50%概率 +攻击 或 +防御 */
            switch (player.job) {
                case JobTypes.WARRIOR:
                    if (UtilNum.randomInt(0, 100) <= 50) {
                        attr.atkMin = (attr.atkMin || 0) + UtilNum.randomInt(1, v);
                        attr.atkMax = (attr.atkMax || 0) + v;
                    } else {
                        attr.atkDefMin = (attr.atkDefMin || 0) + UtilNum.randomInt(1, v);
                        attr.atkDefMax = (attr.atkDefMax || 0) + v;
                    }
                    break;
                case JobTypes.MAGE:
                    if (UtilNum.randomInt(0, 100) <= 50) {
                        attr.mageMin = (attr.mageMin || 0) + UtilNum.randomInt(1, v);
                        attr.mageMax = (attr.mageMax || 0) + v;
                    } else {
                        attr.mageDefMin = (attr.mageDefMin || 0) + UtilNum.randomInt(1, v);
                        attr.mageDefMax = (attr.mageDefMax || 0) + v;
                    }
                    break;
                default:
                    if (UtilNum.randomInt(0, 100) <= 50) {
                        attr.taoistMin = (attr.taoistMin || 0) + UtilNum.randomInt(1, v);
                        attr.taoistMax = (attr.taoistMax || 0) + v;
                    } else {
                        attr.atkDefMin = (attr.atkDefMin || 0) + UtilNum.randomInt(1, v);
                        attr.atkDefMax = (attr.atkDefMax || 0) + v;
                        attr.mageDefMin = (attr.mageDefMin || 0) + UtilNum.randomInt(1, v);
                        attr.mageDefMax = (attr.mageDefMax || 0) + v;
                    }
                    break;
            }
            num -= v;
        }

        if (attr) attr = JSON.stringify(attr);

        return { quality, attr };
    }


}