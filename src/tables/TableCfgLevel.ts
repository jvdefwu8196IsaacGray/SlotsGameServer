
import { JsonUtil } from "../publics/util/JsonUtil";

export class TableCfgLevel {

    static TableName: string = "CfgLevel";

    private data: any;

    static cache: Map<number | string, TableCfgLevel> = new Map;

    static getConfig(level: number | string, error:boolean = true) {
        const hash = level;
        if (this.cache.has(hash)) return this.cache.get(hash);
        const table = JsonUtil.get("CfgLevel");
        const data = table[level];
        if (data) {
            const cfg = new TableCfgLevel(level, data);
            this.cache.set(hash, cfg);
            return cfg;
        }
        if (error) throw "TableCfgLevel not found";
    }

    static list(): TableCfgLevel[] {
        let result = [];
        const all = JsonUtil.get("CfgLevel");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            const cfg = this.getConfig(id);
            result.push(cfg);
        }
        return result;
    }

    static filter(cb: (cfg: TableCfgLevel, key?: number | string) => boolean | void): TableCfgLevel[] {
        let result = [];
        const all = JsonUtil.get("CfgLevel");
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

    static forEach(cb: (cfg: TableCfgLevel, key?: number | string) => boolean | void) {
        const all = JsonUtil.get("CfgLevel");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            if (cb(this.getConfig(id), id)) break;
        }
    }

    constructor(level: number | string, data: any) {
        this.data = data;
        this.level = level;
    }

    /** 编号【KEY】 */
    level: number | string = 0;

    /** 下级经验 */
    get exp(): number {
        return this.data.exp;
    }
    
    /** 属性加成 */
    get attribute(): number {
        return this.data.attribute;
    }
    
    
}