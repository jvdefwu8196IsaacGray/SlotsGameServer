import { Socket } from "socket.io";
import { BaseController } from "../base/BaseController";
import { protocol, mysql, router, redis, queue, action } from "../event";
import { CustomData, SkillExp, checkerr } from "./UserController";
import { TableCfgTask } from "../tables/TableCfgTask";
import { Player } from "../entity/Player";
import { Skill } from "../entity/Skill";
import { EntityManager, QueryRunner } from "typeorm";
import { game } from "../../proto/protocol";
import { Redis } from "ioredis";
import { TableCfgSkill } from "../tables/TableCfgSkill";
import { TableCfgSkillPower } from "../tables/TableCfgSkillPower";

const ErrorCode = game.ErrorCode;

export class SkillController extends BaseController {

    static async init() {

    }

    /** 学习技能 */
    static async studySkill(player: Player, skillId: number, manager: EntityManager): Promise<any> {
        const skill = new Skill;
        skill.cfgId = skillId;
        skill.playerId = player.id;
        manager.save(Skill, skill);
    }

    /** 升级技能 */
    @action()
    @queue()
    @redis()
    @mysql()
    @protocol(game.UpdateSkillReq, game.UpdateSkillRes)
    @router('/skill/update')
    static async updateSkill(args: any, socket: Socket, query: QueryRunner, redis: Redis): Promise<any> {
        if (checkerr(socket, true)) return;
        if (args instanceof game.UpdateSkillReq) {
            const { player } = <CustomData>socket.data;
            const skillId = 1;
            const manager = query.manager;
            const skill = await manager.findOne(Skill, { where: { id: skillId } });
            if (!skill) return;
            if (skill.playerId != player.id) return;
            const cfg = TableCfgSkillPower.getConfig(skill.cfgId, skill.level);
            const exp = Number(await redis.hget(`games:${player.id}`, `skill:exp:${skill.cfgId}`));
            if (exp < cfg.exp) return;
            ++skill.level;
            await manager.save(skill);
            await redis.hincrby(`games:${player.id}`, `skill:exp:${skill.cfgId}`, -cfg.exp);
            return { code: ErrorCode.SUCCESS, msg: '升级成功' };
        }
    }

}


