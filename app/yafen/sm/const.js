if(global.const) return; global.const = true;

require("../../../publics/rpc-client");

const log4js = require('log4js');

global.APP_NAME = "押分机-赛马";

global.APP_PORT = 10005;

global.logger = log4js.getLogger();  

global.roomManager = [];

global.sockManager = [];

global.room = {
    dt: 0,
    state: 2,
    stage: 4,
    endTime: 47594,
    unit: [100, 500, 1000],
    horseInfos: [
        {
            history: [6,5,5,3,4],
            lv: 5,
            name: '美麗寶貝',
            track: 0
        },
        {
            history: [1,3,4,5,1],
            lv: 5,
            name: '藍天堡馬',
            track: 1
        },
        {
            history: [3,3,4,3,4],
            lv: 3,
            name: '彩福',
            track: 2
        },
        {
            history: [5,4,2,2,3],
            lv: 1,
            name: '澳斯卡',
            track: 3
        },
        {
            history: [2,1,1,2,2],
            lv: 4,
            name: '赤兔寶駒',
            track: 4
        },
        {
            history: [4,3,1,2,3],
            lv: 2,
            name: '川河尊駒',
            track: 5
        }
    ],
    shoeSettings: [
        {
            extraWin: 100000,
            lv: 0,
            totalBet: 5000,
            value: 300
        },
        {
            extraWin: 300000,
            lv: 1,
            totalBet: 10000,
            value: 900
        },
        {
            extraWin: 2600000,
            lv: 2,
            totalBet: 50000,
            value: 7800
        },
        {
            extraWin: 10000000,
            lv: 3,
            totalBet: 100000,
            value: 15000
        }
    ],
    players : [

    ],
}

log4js.configure({
    appenders: { 
        io: { type: 'file', filename: "./log/" + APP_NAME + ".log"},
        console:{type:'console'}
    },
    categories: { default: { appenders: ['io', 'console'], level: 'all' } }
})

// crpc.addGameService({
//     appport: APP_PORT,
//     appname: APP_NAME
// }, (err)=>{})