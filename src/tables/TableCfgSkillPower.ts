
import { JsonUtil } from "../publics/util/JsonUtil";

export class TableCfgSkillPower {
    
    static TableName: string = "CfgSkillPower";

    private data: any;

    static cache: Map<number | string, TableCfgSkillPower> = new Map;

    static getConfig(skill: number | string, level: number | string, error:boolean = true) {
        const hash = skill+ ',' +level;
        if (this.cache.has(hash)) return this.cache.get(hash);
        const table = JsonUtil.get("CfgSkillPower");
        let data;
        try {
            data = table[skill][level];
            const cfg = new TableCfgSkillPower(skill,level, data);
            this.cache.set(hash, cfg);
            return cfg;
        } catch(err) {

        }
        if (error) throw "TableCfgSkillPower not found";
    }

    constructor(skill: number | string, level: number | string, data: any) {
        this.data = data;
        this.skill = skill;        this.level = level;
    }

    /** 技能【KEY】 */
    skill: number | string = 0;

    /** 等级【KEY】 */
    level: number | string = 0;

    /** 升级经验 */
    get exp(): number {
        return this.data.exp;
    }
    
    /** 关联效果 */
    get buffs(): any {
        return this.data.buffs;
    }
    
    /** 说明 */
    get desc(): string {
        return this.data.desc;
    }
    
    /** 伤害比例 */
    get power(): number {
        return this.data.power;
    }
    
    
}