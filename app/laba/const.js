if(global.const) return; global.const = true;

require("../../publics/rpc-client");

const log4js = require('log4js');

global.APP_NAME = "拉霸";

global.APP_PORT = 10002;

global.logger = log4js.getLogger();  

global.roomManager = [];

global.sockManager = [];

global.kline = 1.5;

global.jackpool = 2000000;

log4js.configure({
    appenders: { 
        io: { type: 'file', filename: "./log/" + APP_NAME + ".log"},
        console:{type:'console'}
    },
    categories: { default: { appenders: ['io', 'console'], level: 'all' } }
});
  
// crpc.addGameService({
//     appport: APP_PORT,
//     appname: APP_NAME
// }, (err)=>{})
