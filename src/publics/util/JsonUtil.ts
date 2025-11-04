/*
 * @Author: dgflash
 * @Date: 2021-08-18 17:00:59
 * @LastEditors: dgflash
 * @LastEditTime: 2023-08-22 15:48:02
 */

import { readFileSync } from "fs";

/** 资源路径 */
var path: string = process.cwd() + "/configs/";

/** 数据缓存 */
var data: Map<string, any> = new Map();

/** JSON数据表工具 */
export class JsonUtil {
    /**
     * 通知资源名从缓存中获取一个Json数据表
     * @param name  资源名
     */
    static get(name: string): any {
        if (data.has(name))
            return data.get(name);
    }

    /**
     * 异步加载Json数据表
     * @param name 资源名
     */
    static async load(name: string) {
        if (data.has(name)) {
            return data.get(name);
        }
        var url = path + name + '.json';
        const json = JSON.parse(readFileSync(url, 'utf8'));
        if (json) data.set(name, json);
        return json;
    }

    /**
     * 通过指定资源名释放资源
     * @param name 资源名
     */
    static release(name: string) {
        var url = path + name;
        data.delete(name);
    }
}