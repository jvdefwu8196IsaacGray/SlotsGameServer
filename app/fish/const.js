if(global.const) return; global.const = true;

require("../../publics/rpc-client");

const async = require('async');

const log4js = require('log4js');

const {readJson, random} = require("../../publics/global")

global.logger = log4js.getLogger(); 

global.APP_NAME = "捕鱼";

global.APP_PORT = 10001;

global.roomManager = [];

global.userManager = {};

global.linetimeManager = [];

global.kline = 1.5;

global.lucky = [1, 1, 1, 1, 1, 1, 1];

global.jacktime = 0;

global.jackpool = 10000000;

global.virtualJack = [
    random(8000, 1200), 
    random(350000, 750000), 
    random(100000, 300000)
];

var odds = [2,3,4,5,7,8,9,10,12,14,18,25,30,150,200,250,150,180,240,330,360,400,168,600,900,888,1888];

log4js.configure({
    appenders: { 
        io: { type: 'file', filename: "./log/" + APP_NAME + ".log"},
        console:{type:'console'}
    },
    categories: { default: { appenders: ['io', 'console'], level: 'all' } }
})

/*private*/

function room_create()
{
    const index = random(0, linetimeManager.length-1);

    const script = linetimeManager[index];

    roomManager.push({
        rid: roomManager.length,
        aiCount: 0,
        playerCount: 0,
        syncTime: 0,
        currentLineTime: index,
        currentDt: random(0, Math.max(Math.ceil(script.nextTime * 0.75), 0)),
        currentProgress: 0,
        players: [null, null, null],
        fishManager: {},
        moreManger: []
    });
}

function buildScript(mainIndex, script, SubScript, GroupData)
{
    for(let subIndex in script.SubScriptList)
    {
        const name = script.SubScriptList[subIndex];

        const subScript = SubScript[name];

        buildSubScript(mainIndex, subIndex, subScript, GroupData);
    }
}

function buildSubScript(mainIndex, subIndex, subScript, GroupData)
{
    var linetime = [];
    
    var nextTime = 0;

    var wavesTime = 0;

    for(let v of subScript)
    {
        const group = GroupData[v.group];
    
        const time = buildFishGroup(group, v.time, linetime);

        if(time >= nextTime) nextTime = time;

        if(GroupData.extra[v.group] == "Waves") wavesTime = v.time;
    }

    let ary = linetime.sort((a,b)=>{
        let rtn = a.startTime - b.startTime;
        if(rtn == 0) rtn = b.fishId - a.fishId;
        return rtn;
    });

    linetimeManager.push({
        wavesTime: wavesTime,
        nextTime: nextTime + 3,
        mainIndex: Number(mainIndex) + 1,
        subIndex: Number(subIndex) + 1,
        lineTime: ary
    });
}

function buildFishGroup(group, time, linetime)
{
    var endTime = time;

    for(let v of group)
    {
		const s = time + v.delay;

        const e = s + v.duration;

        const id = linetime.length + 1;

        if(e > endTime) endTime = e;

        linetime.push({
            id: v.fish + 1,
            fishId: id,
            startTime: s,
            endTime: e,
            odds: odds[v.fish]
        });
    }

    return endTime;
}

(function()
{
    const GroupData = readJson("./data/fish/GroupData.json");

    const MainScript = readJson("./data/fish/MainScript.json");

    const SubScript = readJson("./data/fish/SubScript.json");

    for(let index in MainScript)
    {
        const script = MainScript[index];

        buildScript(index, script, SubScript, GroupData);
    }

    for(let i=0;i<100;++i) room_create();

})()

// crpc.addGameService({
//     appport: APP_PORT,
//     appname: APP_NAME
// }, (err)=>{})

/*private method*/
