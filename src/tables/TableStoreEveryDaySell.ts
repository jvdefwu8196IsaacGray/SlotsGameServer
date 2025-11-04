
import { JsonUtil } from "../publics/util/JsonUtil";

export class TableStoreEveryDaySell {
    static TableName: string = "StoreEveryDaySell";

    private data: any;

    static cache: Map<number | string, TableStoreEveryDaySell> = new Map;

    static getConfig(id: number | string) {
        if (this.cache.has(id)) return this.cache.get(id);
        const table = JsonUtil.get("StoreEveryDaySell");
        const data = table[id];
        if (data) {
            const cfg = new TableStoreEveryDaySell(id, data);
            this.cache.set(id, cfg);
            return cfg;
        }
        console.warn("StoreEveryDaySell id:", id, "not found");
        return null;
    }

    static list(): TableStoreEveryDaySell[] {
        let result = [];
        const all = JsonUtil.get("StoreEveryDaySell");
        const keys = Object.keys(all);
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            if(id == '_safe_') continue;
            const cfg = this.getConfig(id);
            result.push(cfg);
        }
        return result;
    }

    static filter(cb: (cfg: TableStoreEveryDaySell, key?: number | string) => boolean | void): TableStoreEveryDaySell[] {
        let result = [];
        const all = JsonUtil.get("StoreEveryDaySell");
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

    static forEach(cb: (cfg: TableStoreEveryDaySell, key?: number | string) => boolean | void) {
        const all = JsonUtil.get("StoreEveryDaySell");
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

    /** 商城每日特惠内容【KEY】0为视频免费领取 */
    id: number | string = 0;

    /** 奖励内容 【ID，数量】 */
    get reward(): any {
        return this.data.reward;
    }
    /** 获取条件 */
    get getlimit(): any {
        return this.data.getlimit;
    }
}