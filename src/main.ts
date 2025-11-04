globalThis.$protobuf = require("protobufjs");
import "reflect-metadata";

import { Server, Socket } from "socket.io";
import { createServer } from "http";
import { ConfigMgr } from "./publics/mgr/ConfigMgr";
import { AppDataSource } from "./data-source"
import { DataSource } from "typeorm";
import { OnlineController } from "./controllers/OnlineController";
import { GrowthController } from "./controllers/GrowthController";
import { MailController } from "./controllers/MailController";
import { TaskController } from "./controllers/TaskController";
import { PackageController } from "./controllers/PackageController";
import { GameController } from "./controllers/GameController";
import { bind } from "./event";
import { logger } from "./logger";
import Sms from "./sendsms";
import { ChatController } from "./controllers/ChatController";

export var db: DataSource = null;

export const io = new Server(createServer(), { cors: { origin: "*" } });

(async function main() {

	logger().info("--=========================== 服务器启动中 ===========================--");

	logger().log("@初始化配置项");
	await ConfigMgr.I.init();
	logger().log("@初始化控制器");
	await GameController.init();
	await ChatController.init();
	await PackageController.init();
	await TaskController.init();
	await MailController.init();
	await GrowthController.init();
	await OnlineController.init();

	// Sms.send('18377700778', 5573);

	logger().log("@初始化数据库");
	db = await AppDataSource.initialize();

	logger().log("@初始化通信");
	io.on("connection", (socket: Socket) => {
		socket.data.queue = [];
		socket.data.monsters = {};
		socket.data.lock = false;
		socket.data.warn = 0;
		bind(socket);
	});
	io.listen(3000);
	logger().log("@初始化完毕");
})();


