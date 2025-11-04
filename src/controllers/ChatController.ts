
import { Socket } from "socket.io";
import { BaseController } from "../base/BaseController";
import { router } from "../event";
import { io } from "../main";
import { checkerr } from "./UserController";


/**
 * 事件转发
 */
export class ChatController extends BaseController {

    static async init() {

    }

    @router("chat")
    static async chat(socket: Socket, msg: string) {
        if (checkerr(socket, true)) return;
        io.emit('chat', msg);
    }

}
