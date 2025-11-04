if(global.const) return; global.const = true;

require("../../../publics/rpc-client");

const log4js = require('log4js');

global.APP_NAME = "押分机-深林舞会";

global.APP_PORT = 10004;

global.logger = log4js.getLogger();  

global.roomManager = [];

global.userManager = {};

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
