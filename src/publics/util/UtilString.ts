
const base64_hash = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

export class UtilString {

    /** 
     * base编码
     * @param str 内容 
    */
    public static base64_encode(str: string): string {
        if (/([^\u0000-\u00ff])/.test(str)) {
            throw new Error('INVALID_CHARACTER_ERR');
        }
        var i = 0,
            prev,
            ascii,
            mod,
            result = [];

        while (i < str.length) {
            ascii = str.charCodeAt(i);
            mod = i % 3;

            switch (mod) {
                // 第一个6位只需要让8位二进制右移两位
                case 0:
                    result.push(base64_hash.charAt(ascii >> 2));
                    break;
                //第二个6位 = 第一个8位的后两位 + 第二个8位的前4位
                case 1:
                    result.push(base64_hash.charAt((prev & 3) << 4 | (ascii >> 4)));
                    break;
                //第三个6位 = 第二个8位的后4位 + 第三个8位的前2位
                //第4个6位 = 第三个8位的后6位
                case 2:
                    result.push(base64_hash.charAt((prev & 0x0f) << 2 | (ascii >> 6)));
                    result.push(base64_hash.charAt(ascii & 0x3f));
                    break;
            }

            prev = ascii;
            i++;
        }

        // 循环结束后看mod, 为0 证明需补3个6位，第一个为最后一个8位的最后两位后面补4个0。另外两个6位对应的是异常的“=”；
        // mod为1，证明还需补两个6位，一个是最后一个8位的后4位补两个0，另一个对应异常的“=”
        if (mod == 0) {
            result.push(base64_hash.charAt((prev & 3) << 4));
            result.push('==');
        } else if (mod == 1) {
            result.push(base64_hash.charAt((prev & 0x0f) << 2));
            result.push('=');
        }

        return result.join('');
    }

    /** 
     * base解码
     * @param str 内容 
    */
    public static base64_decode(str: string): string {
        str = str.replace(/\s|=/g, '');
        var cur,
            prev,
            mod,
            i = 0,
            result = [];

        while (i < str.length) {
            cur = base64_hash.indexOf(str.charAt(i));
            mod = i % 4;

            switch (mod) {
                case 0:
                    //TODO
                    break;
                case 1:
                    result.push(String.fromCharCode(prev << 2 | cur >> 4));
                    break;
                case 2:
                    result.push(String.fromCharCode((prev & 0x0f) << 4 | cur >> 2));
                    break;
                case 3:
                    result.push(String.fromCharCode((prev & 3) << 6 | cur));
                    break;

            }

            prev = cur;
            i++;
        }

        return result.join('');
    }

    /** 
     * 检测是否存在emoji表情
     * @param str 内容 
    */
    public static hasEmoji(str: string): boolean {
        let emojiReg = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi;
        return emojiReg.test(str);
    }

    public static getFileName(path: string): string {
        path = path.replace("\\", "/");
        let pathArray = path.split("/");
        return pathArray[pathArray.length - 1];
    }
    /**
     * 替换字符串
     * @param str
     * @param strSearch
     * @param strReplace
     */
    public static replaceAll(str: string, strSearch: string, strReplace: string): string {
        while (str.indexOf(strSearch) >= 0) {
            str = str.replace(strSearch, strReplace);
        }
        return str;
    }

    /**
     * 字符串转单个字数组
     * @param str 内容 =》 "字符串转单个字数组"
     * @returns 返回=》 ['字','符','串','转','单','个','字','数','组']
     */
    public static toArray(str: string): string[] {
        if (!str) return [];
        const att: string[] = [];
        for (let i = 0; i < str.length; i++) {
            const char = str.charAt(i);
            att.push(char);
        }
        return att;
    }
};
