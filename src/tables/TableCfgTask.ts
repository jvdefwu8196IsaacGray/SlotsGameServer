
import { JsonUtil } from "../publics/util/JsonUtil";

export class TableCfgTask {

    static TableName: string = "CfgTask";

    private data: any;

    static cache: Map<number | string, TableCfgTask> = new Map;

    static getConfig(id: number | string, error:boolean = true) {
        const hash = id;
        if (this.cache.has(hash)) return this.cache.get(hash);
        const table = JsonUtil.get("CfgTask");
        const data = table[id];
        if (data) {
            const cfg = new TableCfgTask(id, data);
            this.cache.set(hash, cfg);
            return cfg;
        }
        if (error) throw "TableCfgTask not found";
    }

    static list(): TableCfgTask[] {
        let result = [];
        const all = JsonUtil.get("CfgTask");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            const cfg = this.getConfig(id);
            result.push(cfg);
        }
        return result;
    }

    static filter(cb: (cfg: TableCfgTask, key?: number | string) => boolean | void): TableCfgTask[] {
        let result = [];
        const all = JsonUtil.get("CfgTask");
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

    static forEach(cb: (cfg: TableCfgTask, key?: number | string) => boolean | void) {
        const all = JsonUtil.get("CfgTask");
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

    /** 任务说明 */
    get dest(): string {
        return this.data.dest;
    }
    
    /** 类型 */
    get type(): number {
        return this.data.type;
    }
    
    /** 子类型 */
    get task_type(): number {
        return this.data.task_type;
    }
    
    /** 条件数量 */
    get limit(): any {
        return this.data.limit;
    }
    
    /** 奖励 */
    get rewards(): any {
        return this.data.rewards;
    }
    
    
}