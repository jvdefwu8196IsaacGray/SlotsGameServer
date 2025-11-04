
import { JsonUtil } from "../publics/util/JsonUtil";

export class TableCfgShop {

    static TableName: string = "CfgShop";

    private data: any;

    static cache: Map<number | string, TableCfgShop> = new Map;

    static getConfig(id: number | string, error:boolean = true) {
        const hash = id;
        if (this.cache.has(hash)) return this.cache.get(hash);
        const table = JsonUtil.get("CfgShop");
        const data = table[id];
        if (data) {
            const cfg = new TableCfgShop(id, data);
            this.cache.set(hash, cfg);
            return cfg;
        }
        if (error) throw "TableCfgShop not found";
    }

    static list(): TableCfgShop[] {
        let result = [];
        const all = JsonUtil.get("CfgShop");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            const cfg = this.getConfig(id);
            result.push(cfg);
        }
        return result;
    }

    static filter(cb: (cfg: TableCfgShop, key?: number | string) => boolean | void): TableCfgShop[] {
        let result = [];
        const all = JsonUtil.get("CfgShop");
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

    static forEach(cb: (cfg: TableCfgShop, key?: number | string) => boolean | void) {
        const all = JsonUtil.get("CfgShop");
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

    /** 类型 */
    get type(): string {
        return this.data.type;
    }
    
    /** 价格 */
    get price(): number {
        return this.data.price;
    }
    
    /** 图标 */
    get icon(): string {
        return this.data.icon;
    }
    
    /** 物品内容 */
    get item(): any {
        return this.data.item;
    }
    
    /** 显示名称 */
    get name(): string {
        return this.data.name;
    }
    
    
}