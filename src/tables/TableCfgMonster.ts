
import { JsonUtil } from "../publics/util/JsonUtil";

export class TableCfgMonster {

    static TableName: string = "CfgMonster";

    private data: any;

    static cache: Map<number | string, TableCfgMonster> = new Map;

    static getConfig(id: number | string, error:boolean = true) {
        const hash = id;
        if (this.cache.has(hash)) return this.cache.get(hash);
        const table = JsonUtil.get("CfgMonster");
        const data = table[id];
        if (data) {
            const cfg = new TableCfgMonster(id, data);
            this.cache.set(hash, cfg);
            return cfg;
        }
        if (error) throw "TableCfgMonster not found";
    }

    static list(): TableCfgMonster[] {
        let result = [];
        const all = JsonUtil.get("CfgMonster");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            const cfg = this.getConfig(id);
            result.push(cfg);
        }
        return result;
    }

    static filter(cb: (cfg: TableCfgMonster, key?: number | string) => boolean | void): TableCfgMonster[] {
        let result = [];
        const all = JsonUtil.get("CfgMonster");
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

    static forEach(cb: (cfg: TableCfgMonster, key?: number | string) => boolean | void) {
        const all = JsonUtil.get("CfgMonster");
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

    /** 名称 */
    get name(): string {
        return this.data.name;
    }
    
    /** 等级 */
    get level(): number {
        return this.data.level;
    }
    
    /** 血量值 */
    get hpMax(): number {
        return this.data.hpMax;
    }
    
    /** 最小防御 */
    get atkDefMin(): number {
        return this.data.atkDefMin;
    }
    
    /** 最大防御 */
    get atkDefMax(): number {
        return this.data.atkDefMax;
    }
    
    /** 最小攻击 */
    get atkMin(): number {
        return this.data.atkMin;
    }
    
    /** 最大攻击 */
    get atkMax(): number {
        return this.data.atkMax;
    }
    
    /** 头像 */
    get head(): number {
        return this.data.head;
    }
    
    /** 声音 */
    get sound(): string {
        return this.data.sound;
    }
    
    
}