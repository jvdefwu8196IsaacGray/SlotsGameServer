
export interface Lucky {
    /** 等级 */
    lv: number,
    /** 总数 */
    total: number,
    /** 升级花费 */
    money: number,
    /** 概率 */
    limit: number
};

export class UtilNum {
    /**
     * 数字前面补零
     * @param num 数字
     * @param len 总长度, 不能等于1, 若为1以0处理
     * @returns 补零后的字符串
     * @example UtilNum.FillZero(1, 2) = 01;
     */
    public static fillZero(num: number, len: number): string {
        len = len <= 1 ? 0 : len; // 长度不能等于1
        return `${Array(len).join('0')}${num}`.slice(-len);
    }

    /**
     * 获取范围内整型随机数
     * @param min
     * @param max
     * @returns 向下的整数
     */
    public static randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * 数值分割
     * @param total 总数 
     * @param count 数量
     * @param sub 递减
     * @returns 
     */
    public static split(total: number, count: number, sub: number): number[] {
        const result: number[] = [];
        let current = total;
        for (let i = 0; i < count; i++) {
            result.push(Math.ceil(current));
            current -= sub;
        }
        return result;
    }

    public static lucky(list: number[], oneMoney: number, oneLucky: number) {
        const result = new Map;
        const size = list.length * 2;
        let total = 0;
        list.forEach((v, i) => {
            let lucky = v + size - i;
            let money = oneMoney;
            while (lucky < 100) {
                lucky += oneLucky;
                money += oneMoney;
            }
            total += money;
            const lv = i + 1;
            result.set(i, { lv, total: parseInt(String(total)), money: money.toFixed(), limit: parseInt(String(v)) });
        });
        return result;
    }


    /**
     * 获取范围内随机浮点数
     * @param min
     * @param max
     * @param decimal 小数点位数（可选）
     * @returns 浮点数
     */
    public static randomFloat(min: number, max: number, decimal?: number): number {
        const value = Math.random() * (max - min) + min;
        return decimal ? +value.toFixed(decimal) : value;
    }

    /**
     * 数字转汉字
     * @param num 数字0-10
     * @returns string
     */
    public static toZh(num: number): string {
        const words = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        return words[num];
    }

    /**
     * 获取概率是否生效
     * @param 概率 <= V  v= 0-1
     */
    public static getInPercentage(v: number): boolean {
        return v >= Math.random()
    }

    /**
     *  转换成货币格式
     *  金币1000的话显示为1k
     *  金币1万显示为10k
     *  金币10万显示为100K
     *  金币100万显示为1M
     *  金币1000万显示为10M
     *  金币1亿显示为1B
     */
    public static formatMoney(num: number): string {
        let absNum = Math.abs(num);
        if (absNum >= 100000000) {
            return (num / 100000000).toFixed(2) + "B";
        } else if (absNum >= 10000000) {
            return (num / 1000000).toFixed(1) + "M";
        } else if (absNum >= 1000000) {
            return (num / 1000000).toFixed(2) + "M";
        } else if (absNum >= 100000) {
            return (num / 1000).toFixed(1) + "K";
        } else if (absNum >= 10000) {
            return (num / 1000).toFixed(2) + "K";
        } else {
            return num.toString();
        }
    }

    /** 文件大小转换 */
    public static formatBytes(bytes: number, decimals = 2): string {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toFixed(dm) + ' ' + sizes[i];
    }
}