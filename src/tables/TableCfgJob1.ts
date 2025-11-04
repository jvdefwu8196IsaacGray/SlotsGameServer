
import { JsonUtil } from "../publics/util/JsonUtil";

export class TableCfgJob1 {

    static TableName: string = "CfgJob1";

    private data: any;

    static cache: Map<number | string, TableCfgJob1> = new Map;

    static getConfig(id: number | string, error:boolean = true) {
        const hash = id;
        if (this.cache.has(hash)) return this.cache.get(hash);
        const table = JsonUtil.get("CfgJob1");
        const data = table[id];
        if (data) {
            const cfg = new TableCfgJob1(id, data);
            this.cache.set(hash, cfg);
            return cfg;
        }
        if (error) throw "TableCfgJob1 not found";
    }

    static list(): TableCfgJob1[] {
        let result = [];
        const all = JsonUtil.get("CfgJob1");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            const cfg = this.getConfig(id);
            result.push(cfg);
        }
        return result;
    }

    static filter(cb: (cfg: TableCfgJob1, key?: number | string) => boolean | void): TableCfgJob1[] {
        let result = [];
        const all = JsonUtil.get("CfgJob1");
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

    static forEach(cb: (cfg: TableCfgJob1, key?: number | string) => boolean | void) {
        const all = JsonUtil.get("CfgJob1");
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

    /** 血量值 */
    get hpMax(): number {
        return this.data.hpMax;
    }
    
    /** 魔法值 */
    get mpMax(): number {
        return this.data.mpMax;
    }
    
    /** 最小物防 */
    get atkDefMin(): number {
        return this.data.atkDefMin;
    }
    
    /** 最大物防 */
    get atkDefMax(): number {
        return this.data.atkDefMax;
    }
    
    /** 最小魔防 */
    get mageDefMin(): number {
        return this.data.mageDefMin;
    }
    
    /** 最大魔防 */
    get mageDefMax(): number {
        return this.data.mageDefMax;
    }
    
    /** 最小攻击 */
    get atkMin(): number {
        return this.data.atkMin;
    }
    
    /** 最大攻击 */
    get atkMax(): number {
        return this.data.atkMax;
    }
    
    /** 最小魔法 */
    get mageMin(): number {
        return this.data.mageMin;
    }
    
    /** 最小魔法 */
    get mageMax(): number {
        return this.data.mageMax;
    }
    
    /** 最小道术 */
    get taoistMin(): number {
        return this.data.taoistMin;
    }
    
    /** 最大道术 */
    get taoistMax(): number {
        return this.data.taoistMax;
    }
    
    
}