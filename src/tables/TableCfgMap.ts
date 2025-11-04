
import { JsonUtil } from "../publics/util/JsonUtil";

export class TableCfgMap {

    static TableName: string = "CfgMap";

    private data: any;

    static cache: Map<number | string, TableCfgMap> = new Map;

    static getConfig(id: number | string, error:boolean = true) {
        const hash = id;
        if (this.cache.has(hash)) return this.cache.get(hash);
        const table = JsonUtil.get("CfgMap");
        const data = table[id];
        if (data) {
            const cfg = new TableCfgMap(id, data);
            this.cache.set(hash, cfg);
            return cfg;
        }
        if (error) throw "TableCfgMap not found";
    }

    static list(): TableCfgMap[] {
        let result = [];
        const all = JsonUtil.get("CfgMap");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            const cfg = this.getConfig(id);
            result.push(cfg);
        }
        return result;
    }

    static filter(cb: (cfg: TableCfgMap, key?: number | string) => boolean | void): TableCfgMap[] {
        let result = [];
        const all = JsonUtil.get("CfgMap");
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

    static forEach(cb: (cfg: TableCfgMap, key?: number | string) => boolean | void) {
        const all = JsonUtil.get("CfgMap");
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

    /** 地图名称 */
    get name(): string {
        return this.data.name;
    }
    
    /** 刷新条件 */
    get refreshLimit(): number {
        return this.data.refreshLimit;
    }
    
    /** 刷怪数量 */
    get refresh(): number {
        return this.data.refresh;
    }
    
    /** 地图跳转 */
    get goto(): any {
        return this.data.goto;
    }
    
    /** 掉落等级 */
    get dropLimit(): any {
        return this.data.dropLimit;
    }
    
    /** 掉落物品 */
    get drop(): any {
        return this.data.drop;
    }
    
    /** 怪物列表 */
    get monsters(): any {
        return this.data.monsters;
    }
    
    
}