if(global.const) return; global.const = true;

const log4js = require('log4js');

global.APP_NAME = "大厅服务";

global.APP_PORT = 10000;

global.logger = log4js.getLogger();  
// 应用管理
global.appManager = {};
// 连接管理
global.sockManager = {};
// 连接信息
global.sessionManager = {};
// 用户信息
global.userManager = {};
// 同步管理[筹码]
global.syncManager = {};
// RPC与RPC之间同步管理[筹码]
global.changeManager = {};
// 机器人管理
global.robotManager = [];

log4js.configure({
    appenders: { 
        io: { type: 'file', filename: "./log/" + APP_NAME + ".log"},
        console:{type:'console'}
    },
    categories: { default: { appenders: ['io', 'console'], level: 'all' } }
})
