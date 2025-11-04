
import { JsonUtil } from "../publics/util/JsonUtil";

export class TableCfgExp {

    static TableName: string = "CfgExp";

    private data: any;

    static cache: Map<number | string, TableCfgExp> = new Map;

    static getConfig(id: number | string, error:boolean = true) {
        const hash = id;
        if (this.cache.has(hash)) return this.cache.get(hash);
        const table = JsonUtil.get("CfgExp");
        const data = table[id];
        if (data) {
            const cfg = new TableCfgExp(id, data);
            this.cache.set(hash, cfg);
            return cfg;
        }
        if (error) throw "TableCfgExp not found";
    }

    static list(): TableCfgExp[] {
        let result = [];
        const all = JsonUtil.get("CfgExp");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            const cfg = this.getConfig(id);
            result.push(cfg);
        }
        return result;
    }

    static filter(cb: (cfg: TableCfgExp, key?: number | string) => boolean | void): TableCfgExp[] {
        let result = [];
        const all = JsonUtil.get("CfgExp");
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

    static forEach(cb: (cfg: TableCfgExp, key?: number | string) => boolean | void) {
        const all = JsonUtil.get("CfgExp");
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

    /** 升级经验 */
    get exp(): number {
        return this.data.exp;
    }
    
    
}