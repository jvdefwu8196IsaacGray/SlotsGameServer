
import { JsonUtil } from "../publics/util/JsonUtil";

export class TableCfgBuff {

    static TableName: string = "CfgBuff";

    private data: any;

    static cache: Map<number | string, TableCfgBuff> = new Map;

    static getConfig(id: number | string, error:boolean = true) {
        const hash = id;
        if (this.cache.has(hash)) return this.cache.get(hash);
        const table = JsonUtil.get("CfgBuff");
        const data = table[id];
        if (data) {
            const cfg = new TableCfgBuff(id, data);
            this.cache.set(hash, cfg);
            return cfg;
        }
        if (error) throw "TableCfgBuff not found";
    }

    static list(): TableCfgBuff[] {
        let result = [];
        const all = JsonUtil.get("CfgBuff");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            const cfg = this.getConfig(id);
            result.push(cfg);
        }
        return result;
    }

    static filter(cb: (cfg: TableCfgBuff, key?: number | string) => boolean | void): TableCfgBuff[] {
        let result = [];
        const all = JsonUtil.get("CfgBuff");
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

    static forEach(cb: (cfg: TableCfgBuff, key?: number | string) => boolean | void) {
        const all = JsonUtil.get("CfgBuff");
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

    /** 触发次数 */
    get count(): number {
        return this.data.count;
    }
    
    /** 触发间隔 */
    get interval(): number {
        return this.data.interval;
    }
    
    /** 禁止移动 */
    get no_move(): number {
        return this.data.no_move;
    }
    
    /** 禁止技能 */
    get no_skill(): number {
        return this.data.no_skill;
    }
    
    /** 是否中毒 */
    get disable(): number {
        return this.data.disable;
    }
    
    /** 动画偏移 */
    get offset(): any {
        return this.data.offset;
    }
    
    /** 动画缩放 */
    get scale(): number {
        return this.data.scale;
    }
    
    /** 增加属性 */
    get add_attr(): any {
        return this.data.add_attr;
    }
    
    /** 描述 */
    get tips(): number {
        return this.data.tips;
    }
    
    /** 动画 */
    get ani(): string {
        return this.data.ani;
    }
    
    
}