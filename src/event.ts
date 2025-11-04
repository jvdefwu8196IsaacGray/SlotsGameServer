import { Socket } from "socket.io";
import { logger } from "./logger";
import { game } from "../proto/protocol";
import { db } from "./main";
import { CustomData } from "./controllers/UserController";
import { Redis } from "ioredis";

const events: any[] = [];

var arg_encode: Function;
var arg_decode: Function;
var arg_queue: boolean = false;
var arg_mysql: boolean = false;
var arg_redis: boolean = false;
var arg_action: boolean = false;

const system = logger('system');

const user = logger('user');

export function protocol(req: any, res: any) {
    arg_decode = req.decode;
    arg_encode = res.encode;
    return function (target, key, descriotor?: PropertyDescriptor): void { }
}

export function queue(use: boolean = true) {
    arg_queue = use;
    return function (target, key, descriotor?: PropertyDescriptor): void { }
}

export function redis(use: boolean = true) {
    arg_redis = use;
    return function (target, key, descriotor?: PropertyDescriptor): void { }
}

export function mysql(use: boolean = true) {
    arg_mysql = use;
    return function (target, key, descriotor?: PropertyDescriptor): void { }
}

export function action(use: boolean = true) {
    arg_action = use;
    return function (target, key, descriotor?: PropertyDescriptor): void { }
}

/**
 * 路由
 * @param name 名称 
 * @param encode 返回协议编码
 * @param queue  队列模式
 * @param mysql  使用数据库
 * @returns 
 */
export function router(name: string, file:string = __filename) {
    return function (target, key, descriotor?: PropertyDescriptor): void {
        const callback = descriotor?.value;
        events.push({
            name,
            callback,
            encode: arg_encode,
            decode: arg_decode,
            queue: arg_queue,
            mysql: arg_mysql,
            redis: arg_redis,
            action: arg_action
        });
        arg_encode = null;
        arg_decode = null;
        arg_queue = false;
        arg_mysql = false;
        arg_redis = false;
        arg_action = false;
    }
}

/** 绑定事件 */
export function bind(socket: Socket) {
    events.forEach(ev => {
        const { name, callback, encode, queue, mysql } = ev;
        socket.on(name, async (buff: Uint8Array, next: Function) => {
            if (queue) {
                queue_exec(socket, () => {
                    if (mysql) safe_exec_mysql(socket, buff, ev, next);
                    else safe_exec(socket, buff, ev, next);
                });
            } else {
                if (mysql) safe_exec_mysql(socket, buff, ev, next);
                else safe_exec(socket, buff, ev, next);
            }
        });
    });
}

async function queue_exec(socket: Socket, callback: Function) {
    const data = <CustomData>socket.data;
    if (data.lock) {
        data.queue.push(callback);
        return;
    }
    data.lock = true;
    await callback();
    while (data.queue.length > 0) {
        const next = data.queue.shift();
        await next();
    }
    data.lock = false;
}

/** 安全执行 */
export async function safe_exec_mysql(
    socket: Socket,
    buff: Uint8Array,
    ev: { name: string, callback: Function, encode: Function, decode: Function, queue: boolean, redis: boolean, action: boolean },
    next: Function
) {
    let redis;
    let query;
    let args;
    try {
        args = ev.decode(buff);
        if (ev.redis) redis = new Redis;
        query = db.createQueryRunner();
        await query.connect();
        const result = await ev.callback(args, socket, query, redis);
        if (result && ev.encode) next(ev.encode(result).finish());
        if (ev.action) {
            user.info("--=========================== 业务正常 ===========================--");
            user.info("@模块名称", ev.name);
            if (socket.data?.player) user.info("@玩家ID", socket.data.player.id);
            user.info("@args", args);
            user.info("@result", result);
        }
    } catch (error) {
        if (query && query.isTransactionActive) await query.rollbackTransaction();
        system.info("--=========================== 业务错误 ===========================--");
        system.info("@模块名称", ev.name);
        if (socket.data?.player) system.info("@玩家ID", socket.data.player.id);
        system.info("@args", args);
        system.error(error);
        if (ev.encode) next(ev.encode({ code: game.ErrorCode.NETERR, msg: '未知错误, 请重新尝试' }).finish());
    } finally {
        if (query) query.release();
        if (redis) redis.quit();
    }
}

export async function safe_exec(
    socket: Socket,
    buff: Uint8Array,
    ev: { name: string, callback: Function, encode: Function, decode: Function, queue: boolean, redis: boolean, action: boolean },
    next: Function
) {
    let args;
    let redis;
    try {
        args = ev.decode(buff);
        redis = ev.redis ? new Redis : null;
        const result = await ev.callback(args, socket, null, redis);
        if (result && ev.encode) next(ev.encode(result).finish());
        if (ev.action) {
            user.info("--=========================== 业务正常 ===========================--");
            if (socket.data?.player) user.info("@玩家ID", socket.data.player.id);
            user.info("@模块名称", ev.name);
            user.info("@args", args);
            user.info("@result", result);
        }
    } catch (error) {
        system.info("--=========================== 业务错误 ===========================--");
        if (socket.data?.player) system.info("@玩家ID", socket.data.player.id);
        system.info("@模块名称", ev.name);
        system.info("@args", args);
        system.error(error);
        if (ev.encode) next(ev.encode({ code: game.ErrorCode.NETERR, msg: '未知错误, 请重新尝试' }).finish());
    } finally {
        if (redis) redis.quit();
    }
}