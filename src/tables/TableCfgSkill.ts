
import { JsonUtil } from "../publics/util/JsonUtil";

export class TableCfgSkill {

    static TableName: string = "CfgSkill";

    private data: any;

    static cache: Map<number | string, TableCfgSkill> = new Map;

    static getConfig(id: number | string, error:boolean = true) {
        const hash = id;
        if (this.cache.has(hash)) return this.cache.get(hash);
        const table = JsonUtil.get("CfgSkill");
        const data = table[id];
        if (data) {
            const cfg = new TableCfgSkill(id, data);
            this.cache.set(hash, cfg);
            return cfg;
        }
        if (error) throw "TableCfgSkill not found";
    }

    static list(): TableCfgSkill[] {
        let result = [];
        const all = JsonUtil.get("CfgSkill");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            const cfg = this.getConfig(id);
            result.push(cfg);
        }
        return result;
    }

    static filter(cb: (cfg: TableCfgSkill, key?: number | string) => boolean | void): TableCfgSkill[] {
        let result = [];
        const all = JsonUtil.get("CfgSkill");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            const cfg = this.getConfig(id);
            if (cb(cfg, id)) {
                result.push(cfg);
            }
        }
        return result;
    }

    static forEach(cb: (cfg: TableCfgSkill, key?: number | string) => boolean | void) {
        const all = JsonUtil.get("CfgSkill");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            if (cb(this.getConfig(id), id)) break;
        }
    }

    constructor(id: number | string, data: any) {
        this.data = data;
        this.id = id;
    }

    /** 编号【KEY】 */
    id: number | string = 0;

    /** 技能名 */
    get name(): string {
        return this.data.name;
    }
    
    /** 权重 */
    get sort(): number {
        return this.data.sort;
    }
    
    /** 职业 */
    get job(): number {
        return this.data.job;
    }
    
    /** 效果 */
    get type(): number {
        return this.data.type;
    }
    
    /** 有效目标 */
    get target(): number {
        return this.data.target;
    }
    
    /** 目标条件 */
    get limit(): number {
        return this.data.limit;
    }
    
    /** 冷却时间 */
    get cd(): number {
        return this.data.cd;
    }
    
    /** 缩放 */
    get scale(): any {
        return this.data.scale;
    }
    
    /** 伤害次数 */
    get count(): number {
        return this.data.count;
    }
    
    /** 伤害间隔 */
    get interval(): number {
        return this.data.interval;
    }
    
    /** 技能音效 */
    get sound(): string {
        return this.data.sound;
    }
    
    /** 起手偏移 */
    get offset(): any {
        return this.data.offset;
    }
    
    /** 起手动画 */
    get start(): any {
        return this.data.start;
    }
    
    /** 命中动画 */
    get hit(): any {
        return this.data.hit;
    }
    
    /** 子弹动画 */
    get bullet(): number {
        return this.data.bullet;
    }
    
    /** 移动速度 */
    get speed(): number {
        return this.data.speed;
    }
    
    
}