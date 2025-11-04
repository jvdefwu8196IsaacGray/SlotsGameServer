
import { JsonUtil } from "../publics/util/JsonUtil";

export class TableCfgGrowth {

    static TableName: string = "CfgGrowth";

    private data: any;

    static cache: Map<number | string, TableCfgGrowth> = new Map;

    static getConfig(id: number | string, error:boolean = true) {
        const hash = id;
        if (this.cache.has(hash)) return this.cache.get(hash);
        const table = JsonUtil.get("CfgGrowth");
        const data = table[id];
        if (data) {
            const cfg = new TableCfgGrowth(id, data);
            this.cache.set(hash, cfg);
            return cfg;
        }
        if (error) throw "TableCfgGrowth not found";
    }

    static list(): TableCfgGrowth[] {
        let result = [];
        const all = JsonUtil.get("CfgGrowth");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            const cfg = this.getConfig(id);
            result.push(cfg);
        }
        return result;
    }

    static filter(cb: (cfg: TableCfgGrowth, key?: number | string) => boolean | void): TableCfgGrowth[] {
        let result = [];
        const all = JsonUtil.get("CfgGrowth");
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

    static forEach(cb: (cfg: TableCfgGrowth, key?: number | string) => boolean | void) {
        const all = JsonUtil.get("CfgGrowth");
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

    /** 解锁等级 */
    get limitlevel(): number {
        return this.data.limitlevel;
    }
    
    /** 奖励内容，每个3档，1钻石，2金币 */
    get rewards(): any {
        return this.data.rewards;
    }
    
    
}