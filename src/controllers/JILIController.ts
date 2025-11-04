import { BaseController } from "../base/BaseController";
import { Item } from "../entity/Item";

export interface RecycleItem {
    /** 配置id */
    cfgId: number;
    /** 数量 */
    count: number;
    /** 品质 */
    quality: number;
};

export interface RewardCostItem {
    /** 配置id */
    cfgId: number;
    /** 数量 */
    count: number;
    /** 附加属性 */
    attr?: string;
    /** 品质 */
    quality?: number;
    /** 是否存在 */
    has?: boolean;
};

export interface RewardCost {
    /** 金币 */
    gold?: number;
    /** 元宝 */
    yuanbao?: number;
    /** 新增 */
    inserts?: Item[];
    /** 改变 */
    changes?: RewardCostItem[];
    /** 回收 */
    recycles?: RecycleItem[];
};

export function createRewardCost(cfgId?: number, count?: number) {
    const obj = { gold: 0, yuanbao: 0, changes: [], inserts: [] };
    if (!!cfgId && !!count) {
        obj.changes.push(<RewardCostItem>{ cfgId, count });
    }
    return obj;
}

export class RewardCostController extends BaseController {

    static async init() {

    }

    static parseRewardCost(list: number[][], isCost: boolean = false, mul: number = 1) {
        let result: RewardCost = createRewardCost();
        if (!list || list.length == 0) return result;
        if (!(list[0] instanceof Array)) {
            throw '配表解析错误';
        }
        for (let i = 0; i < list.length; i++) {
            const v = list[i];
            const type = v[0];
            switch (type) {
                case 0:
                    result.gold += isCost ? v[1] : - v[1];
                    break;
                case 1:
                    result.yuanbao += isCost ? v[1] : - v[1];
                    break;
                default:
                    const item = <RewardCostItem>{};
                    item.cfgId = type;
                    item.count = isCost ? v[1] : - v[1];
                    result.changes.push(item);
                    break;
            }
        }
        if (mul > 1) {
            result.gold = result.gold * mul;
            result.yuanbao = result.yuanbao * mul;
            const items = result.changes;
            if (items && items.length) {
                const ary = [];
                for (let i = 0; i < mul; ++i) {
                    ary.push(...items);
                }
                result.changes = ary;
            }
        }
        return result;
    }

    static parseRewardCostByJson(str: string, isCost: boolean = false) {
        const rewards = JSON.parse(str);
        return this.parseRewardCost(rewards, isCost);
    }

}
