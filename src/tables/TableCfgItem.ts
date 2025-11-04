
import { JsonUtil } from "../publics/util/JsonUtil";

export class TableCfgItem {

    static TableName: string = "CfgItem";

    private data: any;

    static cache: Map<number | string, TableCfgItem> = new Map;

    static getConfig(id: number | string, error:boolean = true) {
        const hash = id;
        if (this.cache.has(hash)) return this.cache.get(hash);
        const table = JsonUtil.get("CfgItem");
        const data = table[id];
        if (data) {
            const cfg = new TableCfgItem(id, data);
            this.cache.set(hash, cfg);
            return cfg;
        }
        if (error) throw "TableCfgItem not found";
    }

    static list(): TableCfgItem[] {
        let result = [];
        const all = JsonUtil.get("CfgItem");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            const cfg = this.getConfig(id);
            result.push(cfg);
        }
        return result;
    }

    static filter(cb: (cfg: TableCfgItem, key?: number | string) => boolean | void): TableCfgItem[] {
        let result = [];
        const all = JsonUtil.get("CfgItem");
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

    static forEach(cb: (cfg: TableCfgItem, key?: number | string) => boolean | void) {
        const all = JsonUtil.get("CfgItem");
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

    /** 道具名 */
    get name(): string {
        return this.data.name;
    }
    
    /** 职业 */
    get job(): number {
        return this.data.job;
    }
    
    /** 类型 */
    get type(): number {
        return this.data.type;
    }
    
    /** 子类型 */
    get subType(): any {
        return this.data.subType;
    }
    
    /** 品质 */
    get quality(): number {
        return this.data.quality;
    }
    
    /** 图标 */
    get icon(): number {
        return this.data.icon;
    }
    
    /** 说明 */
    get desc(): string {
        return this.data.desc;
    }
    
    /** 等级 */
    get level(): number {
        return this.data.level;
    }
    
    /** 外观 */
    get looks(): number {
        return this.data.looks;
    }
    
    /** 血量值 */
    get hpMax(): number {
        return this.data.hpMax;
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
    
    /** 幸运 */
    get lucky(): number {
        return this.data.lucky;
    }
    
    /** 命中 */
    get hit(): number {
        return this.data.hit;
    }
    
    /** 闪避 */
    get miss(): number {
        return this.data.miss;
    }
    
    /** 暴击 */
    get critical(): number {
        return this.data.critical;
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
    
    /** 套 */
    get suit(): string {
        return this.data.suit;
    }
    
    
}