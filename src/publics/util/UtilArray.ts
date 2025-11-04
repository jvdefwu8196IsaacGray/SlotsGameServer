
interface WidgthItem {
    item: any;
    width: number;
};

export class UtilArray {
    /**
     * 获取数值数组中的最小值
     * @param arr
     */
    public static min(arr: number[]): number {
        return Math.min.apply(null, arr) as number;
    }

    /**
     * 获取数值数组中的最大值
     * @param arr
     */
    public static max(arr: number[]): number {
        return Math.max.apply(null, arr) as number;
    }

    /**
     * 获取数值数值之和
     * @param arr
     */
    public static sum(arr: number[]): number {
        return arr.reduce((pre, cur) => pre + cur);
    }

    /**
     * 复制数组
     * @param arr 目标数组
     */
    public static copy<T>(arr: T[]): T[] {
        const newArr: T[] = [];
        arr.forEach((elm) => newArr.push(elm));
        return newArr;
    }

    /**
    * 混淆数组，引用改变
    * @param arr 目标数组
    */
    public static confound<T>(arr: T[]): T[] {
        return arr.slice().sort(() => Math.random() - 0.5);
    }

    /**
    * 返回一个0-MAX的随机排序数组
    * @param arr 目标数组
    */
    public static confoundList(max: number, min: number = 0): number[] {
        let arr = []
        for (let index = min; index <= max; index++) {
            arr.push(index);
        }
        return arr.slice().sort(() => Math.random() - 0.5);
    }


    /**
    * 返回一个0-MAX的排序数组
    * @param arr 目标数组
    */
    public static nomalList(max: number, min: number = 0): number[] {
        let arr = []
        for (let index = min; index <= max; index++) {
            arr.push(index);
        }
        return arr;
    }

    /**
    * 合并数组
    * @param arr1 目标数组1
    * @param arr2 目标数组2
    */
    public static combine<T>(arr1: T[], arr2: T[]): T[] {
        return [...arr1, ...arr2];
    }

    /**
    * 获取随机数组成员
    * @param arr 目标数组
    */
    public static random<T>(arr: T[]): T {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    /**
     * 比较列表1和列表2的每一项，全部一样才返回true，否则返回false
     * @param list1 列表1
     * @param list2 列表2
     * @returns
     */
    public static every<T>(list1: T[], list2: T[]): boolean {
        if (list1.length === list2.length) {
            return list1.every((v, i) => v === list2[i]);
        }
        return false;
    }

    /**
     * 比较列表1和列表2的每一项，有一个一样的就返回true，全部不一样返回false
     * @param list1 列表1
     * @param list2 列表2
     * @returns
     */
    public static some<T>(list1: T[], list2: T[]): boolean {
        return list1.some((v) => list2.indexOf(v) >= 0);
    }

    /**
     * 返回一个在指定范围内的随机数组，数组内的元素顺序随机
     * @param min 数组中的最小值（包含）
     * @param max 数组中的最大值（包含）
     * @returns 随机数组
     */
    public static getRandomArray(min: number, max: number): number[] {
        // 先生成一个包含所有数字的数组
        const arr = [];
        for (let i = min; i <= max; i++) {
            arr.push(i);
        }
        // 再随机打乱数组顺序
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    /**
     * 根据权重随机返回一个 item
     * @param items 包含 item 和 width 属性的对象数组
     * @returns 随机的 item 对象
     */
    public static getWeightItem(items: WidgthItem[]) {
        let totalWidth = 0;
        for (let i = 0; i < items.length; i++) {
            totalWidth += items[i].width;
        }
        let randomWidth = Math.floor(Math.random() * totalWidth);
        let widthSum = 0;
        for (let j = 0; j < items.length; j++) {
            widthSum += items[j].width;
            if (widthSum > randomWidth) {
                return items[j].item;
            }
        }
        // 如果无法匹配到任何一个 item，则返回空
        return null;
    }

    /**获取数组出现最多次数的[元素，次数] */
    public static findMostFrequentElement(arr: any[]): any {
        const elementCounts: { [key: string]: number } = {};
        let maxCount = -1;
        let mostFrequentElement: any = null;

        // 计算每个元素出现的次数
        for (const element of arr) {
            const key = JSON.stringify(element);
            if (elementCounts[key]) {
                elementCounts[key]++;
            } else {
                elementCounts[key] = 1;
            }

            // 更新最大次数和最频繁元素
            if (elementCounts[key] > maxCount) {
                maxCount = elementCounts[key];
                mostFrequentElement = JSON.parse(key);
            }
        }

        return [mostFrequentElement, maxCount];
    }


};