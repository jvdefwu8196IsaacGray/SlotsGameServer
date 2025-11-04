require('./const.js');
require("../../../publics/rpc-client");
const bearcat = require('bearcat');
const {random} = require("../../../publics/global");

const KIND_ID = 1007;

const STATE_DOWN_BET = 2;
const STATE_RESULT = 3;0
const STATE_OVER = 4;

const row = [
    [[1,1],[2,1],[3,1],[4,1]],
    [[1,2],[2,2],[3,2],[4,2]],
    [[1,3],[2,3],[3,3],[4,3]],
];

const column = [
    [[1,1],[1,2],[1,3]],
    [[2,1],[2,2],[2,3]],
    [[3,1],[3,2],[3,3]],
    [[4,1],[4,2],[4,3]],
];

// 房间转发
function notify(room, data)
{   
    const buf = JSON.stringify(data);

    for(const sock of room.players){
        if(sock && sock.isai == undefined) sock.sendText(buf);
    }
}

// 房间转发
function notify_not_self(room, self, data)
{
    const buf = JSON.stringify(data);

    for(const sock of room.players){
        if(sock && sock != self && sock.isai == undefined) sock.sendText(buf);
    }
}

// 全服转发
function ser_notify(data)
{
    const buf = JSON.stringify(data);

    server.sockections.forEach((sock)=>{
       if(sock.uid) sock.sendText(buf); 
    });
}

// 随机庄闲和
function randomZxh()
{
    const r = random(0, 100);

    if(r >= 95) return 12;

    else if(r >=50) return 13;
    
    return 14;
}

// 获取机器人
function getRobot(max)
{
    return new Promise((resolve, reject)=>{
        crpc.popRobot({
            count: max
        }, (err, result) => {

            if(err || result.code != 10000) return reject(err || result.message);

            resolve(result.robots);
            
        });
    });
}

// 增加机器人
async function addRobot(room)
{
    // 随机添加机器人

    try
    {
        const robots = await getRobot(random(1, 3));

        const rid = room.rid;
    
        for(let i=0;i<robots.length;++i)
        {
            if(room.aiCount + room.playerCount == 6) break;
    
            const uid = robots[i].uid;
    
            userManager[uid] = robots[i];

            // 构造个虚拟的sock   
            room.players[i] = {
                isai: true,
                uid: uid,
                rid: rid,
                seat: i,
                time: random(15, 5000)
            };
    
            ++room.aiCount;
        }
    }
    catch(err)
    {
        logger.error(err);
    }
}

// 创建房间
function room_create(sock)
{
    let room = 
    {
        aiCount: 0,
        playerCount: 0,
        index: 0,
        look: 0,
        dt: 0,
        bets: {},
        millisec: 22000,
        state: STATE_DOWN_BET,
        betInfo: [500, 10000, 50000],                   // 筹码选择
        specialSymbolOdds: [2,2,8],                    // 赔率[庄闲和]
        symbolOdds: [                                  // 赔率[图标]
            [random(30, 45),random(25, 35),random(30, 45)],
            [random(15, 24),random(13, 18),random(15, 24)],
            [random(9, 12),random(8, 12),random(9, 12)],
            [random(4, 7),random(3, 6),random(4, 7)]
        ],
        historyInfo: [
            // {
            // specialSymbol    0.庄 1.闲 2.和
            // bonusAward       特殊奖 SEYO_BONUS_AWARD_MAX(17) 默认
            // gridIndexVec     [] 中奖格子
            // }
        ],
        players: [null,null,null,null,null,null],
    };

    for(let i=0;i<10;++i)
    {
        const c = random(0, 2);

        const s = random(0, 3);

        const bidIndex = random(0, 1) == 1 ? (s * 3 + c) : (s * 3 + c + 12);

        const sidIndex = randomZxh();

        room.historyInfo.push(
            {
                specialSymbol: sidIndex,
                symbolAndColor:{c:c, s:s},
                bonusAward: 17,
                gridIndexVec: [bidIndex]
            }
        );
    }

    room.rid = roomManager.length;

    roomManager.push(room);

    return room;
}

// 获取房间
function room_find(sock)
{
    for(let i=0;i<roomManager.length;++i)
    {
        const room = roomManager[i];

        const count = room.playerCount + room.aiCount;

        if(count < 6) return room;
    }

    return room_create(sock);
}

// 添加到房间并返回信息
function room_add(sock, user, room)
{
    sock.isai ? ++room.aiCount : ++room.playerCount;
    
    var info = {
        method: "join.room.res",
        ...room
    };
    
    delete info.lock;

    delete info.sync;

    info.players = [];

    // 将sock转换成用户信息

    for(let i=0;i<room.players.length;++i)
    {
        const playerSock = room.players[i];

        if(playerSock)
        {
            if(playerSock.uid)
            {
                let user = userManager[playerSock.uid];

                info.players.push({
                    accountId: user.uid,
                    seatMoney: user.chips,
                    nickname: user.nickname,
                    vip: user.vipLevel,
                    seat: i,
                });

                continue;
            }

            delete room.players[i];
        }

        if(sock.seat == undefined)
        {
            info.yourseat = i;

            sock.seat = i;

            room.players[i] = sock;

            userManager[user.uid] = user;

            info.players.push({
                accountId: user.uid,
                seatMoney: user.chips,
                nickname: user.nickname,
                vip: user.vipLevel,
                seat: i,
            });  
        }
    }

    return info;
    
}

// 从房间内移除
function room_remove(sock)
{
    console.log("退出房间");

    if(undefined == sock.uid) return;
    
    let room = roomManager[sock.rid];

    sock.isai ? --room.aiCount : --room.playerCount;

    for(let i=0;i<3;++i)
    {
        if(room.players[i] == sock)
        {
            delete room.players[i];

            break;
        }
    }

    notify(room, {
        method: "join.room.leave",
        seat: sock.seat
    })

    delete userManager[sock.uid];

    delete sock.seat;

    delete sock.uid;

    delete sock.rid;   

    delete sock.bets;
    
    delete sock.logic;

    delete sock.isbet;
}

// 进入房间
function join_room (sock, args)
{
    const {uid, token} = args;

    crpc.checkToken({
        uid: uid,
        token: token
    }, async (err, result) => {
        
        if(err || result.code != 10000) return logger.error(err || result.message);

        sock.rid = 0;

        sock.uid = uid;      

        let room = room_find(sock);

        if(room.aiCount == 0 && room.playerCount == 0 /*&& random(0, 100) <= 80*/) await addRobot(room);

        const user = {
            uid: uid,
            chips: result.chips,
            nickname: result.nickname,
            vipLevel: result.vipLevel
        };
    
        sock.sendText(JSON.stringify(room_add(sock, user, room)));

    });
}

// 下注
function down_bet (sock, args)
{
    const uid = sock.uid;

    var user = userManager[sock.uid];
    
    var room = roomManager[sock.rid];

    if(room.state != STATE_DOWN_BET || room.dt >= 22)
    {
        console.log(APP_NAME, "非下注状态", room.dt, room.state);
        
        return;
    }

    var chipsCount = 0;

    for (const iter of args.data) 
    {
        const {chips, symbol, color, isSpecial} = iter;

        if(symbol == undefined || chips == undefined || isSpecial == undefined || symbol < 1 || symbol > 12 || (!isSpecial && color < 1 || color > 3)) return logger.error("下注参数不对");

        chipsCount += chips;
    }

    ++room.lock;

    if(sock.isai)
    {
        user.chips -= chipsCount;
    
        for (const iter of args.data) 
        {
            let {chips, symbol, color, isSpecial} = iter;

            --symbol;

            --color;

            let tab;

            if(room.bets[uid] == undefined) 
            {
                tab = {
                    symbolBet: {},
                    specialSymbolBet: {}
                };

                room.bets[uid] = tab;
            }
            else
            {
                tab = room.bets[uid];
            }

            if(isSpecial)
            {
                if(tab.specialSymbolBet[symbol] == undefined) tab.specialSymbolBet[symbol] = chips;
            
                else tab.specialSymbolBet[symbol] += chips;
            }
            else
            {
                if(tab.symbolBet[symbol] == undefined) tab.symbolBet[symbol] = {};

                if(tab.symbolBet[symbol][color] == undefined) tab.symbolBet[symbol][color] = chips;
                else tab.symbolBet[symbol][color] += chips;
            }
        }

        notify(room, {
            method: "down.bet.notify",
            data: args.data,
            uid: uid,
            seat: 1,
            seatMoney: user.chips
        });
    }
    else
    {

        crpc.addChipsSync({
            kid: KIND_ID,
            uid: uid,
            chips: -chipsCount,
            comment: "下注",
        }, (err, result)=>
        {
            --room.lock;
            
            if(err || result.code != 10000) return;
    
            user.chips -= chipsCount;
    
            for (const iter of args.data) 
            {
                const {chips, symbol, color, isSpecial} = iter;
    
                --symbol;
    
                --color;
    
                let tab;
    
                if(room.bets[uid] == undefined) 
                {
                    tab = {
                        symbolBet: {},
                        specialSymbolBet: {}
                    };
    
                    room.bets[uid] = tab;
                }
                else
                {
                    tab = room.bets[uid];
                }
    
                if(isSpecial)
                {
                    if(tab.specialSymbolBet[symbol] == undefined) tab.specialSymbolBet[symbol] = chips;
                
                    else tab.specialSymbolBet[symbol] += chips;
                }
                else
                {
                    if(tab.symbolBet[symbol] == undefined) tab.symbolBet[symbol] = {};
    
                    if(tab.symbolBet[symbol][color] == undefined) tab.symbolBet[symbol][color] = chips;
                    else tab.symbolBet[symbol][color] += chips;
                }
            }
    
            if(sock.uid == undefined) return; // 判断是否还再房间
    
            notify(room, {
                method: "down.bet.notify",
                data: args.data,
                uid: uid,
                seat: 1,
                seatMoney: user.chips
            });
        });
    }
}

// 清除下注
function clear_bet (sock, args)
{
    const {uid, room} = session;

    uid = 10000;

    if(room == undefined || uid == undefined)
    {
        console.log(APP_NAME, "未登入房间");
        
        return;
    }

    let room = roomManager[session.room];

    if(room.state == STATE_DOWN_BET && room.bets[conn])
    {
        room.bets[conn] = {};
    }
}

// 改变状态[开奖](room)
function change_state_result(room)
{
    var result = {
        method: "change.state",
        state: STATE_RESULT,
        gridVec: [],
        bonusInfo: {
            bonusAward: 2,
            leftBonusSymbol: 4,//random(0, 7),
            rightBonusSymbol: 4,//random(0, 7),
            specialSymbol: 0
        },
        performanceInfo: {
            fightInfo: {
                bonusSymbol: 8,
                fightSettingVec: [],
                isChange: false,
                isWin: false,
                method: 3,
                needPerformance: false
            },
            jpPerformanceInfo: {
                jpCandidateInfoVec: [],
                jpMoney: 0,
                needPerformance: false,
                winnerAccountId: 0
            },
            onlineAwardPerformanceInfo: {
                awardMoney: 0,
                needPerformance: false,
                onlineAwardCandidateVec: [],
                onlineAwardInfoVec: [],
                onlineType: 3,
                winnerAccountId: 0
            }
        }
    };

    var count = 
    {
        symbolBet: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ],

        specialSymbolBet: [0, 0, 0]
    }

    var exist = false;

    for (const uid in room.bets) {

        exist = true;

        var bets = room.bets[uid];

        if(bets.symbolBet)
        {
            for (const index1 in bets.symbolBet) {
                const symbols = bets.symbolBet[index1];
                for (const index2 in symbols) {
                    count.symbolBet[index1][index2] += symbols[index2] * room.symbolOdds[index1][index2];
                }
            }
        }
        
        if(bets.specialSymbolBet)
        {
            for (const index in bets.specialSymbolBet) {
                count.specialSymbolBet[index] += bets.specialSymbolBet[index] * room.specialSymbolOdds[index];
            }
        }
    }

    if(exist)
    {
        var data = [];

        var bidChips = -1;

        var sidChips = -1;

        var c = 0;

        var s = 0;

        var ss = 0;

        for (let i=0;i<count.symbolBet.length;++i) 
        {
            const symbols = count.symbolBet[i];

            for (let n=0;n<symbols.length;++n) 
            {
                if(bidChips == -1 || bidChips > symbols[n])
                {
                    bidChips = symbols[n];

                    s = i;

                    c = n;
                }
            }
        }

        for (let i=0;i<count.specialSymbolBet.length;++i) 
        {
            if(sidChips == -1 || sidChips > count.specialSymbolBet[i])
            {
                sidChips = count.specialSymbolBet[i];

                ss = i;
            }
        }

        // 遍历中奖用户
        for (const uid in room.bets) 
        {
            const bets = room.bets[uid];

            let chips = 0;
    
            if(bets.symbolBet && bets.symbolBet[s] && bets.symbolBet[s][c]) chips += bets.symbolBet[s][c] * room.symbolOdds[s][c];

            if(bets.specialSymbolBet && bets.specialSymbolBet[ss]) chips += bets.specialSymbolBet[ss] * room.specialSymbolOdds[ss];

            if(chips > 0) data.push({uid:uid, chips:chips});
        }

        var bidIndex = random(0, 1) == 1 ? (s * 3 + c) : (s * 3 + c + 12);

        result.gridVec.push(bidIndex);
        
        result.bonusInfo.specialSymbol = ss;

        if(data.length)
        {
            ++room.lock;

            crpc.addChipsDelay({
                kid: KIND_ID,
                data: data,
                comment: "中奖",
            }, (err, res)=>
            {
                --room.lock;
                
                if(err || res.code != 10000) return logger.error(err || res.message);

                var value = [0,0,0,0,0,0];

                room.sync = [];

                // 更新内存金钱
                data.forEach((itor)=>
                {
                    const {uid, chips} = itor; 

                    var user = userManager[uid];

                    if(user) user.chips += chips;

                    room.sync.push(uid);

                    for(let i=0;i<room.players.length;++i)
                    {
                        const sock = room.players[i];

                        if(sock && sock.uid == uid) {
                            value[i] = chips;
                            break;
                        }
                    }
                });
        
                room.historyInfo.shift();
        
                room.historyInfo.push(
                    {
                        specialSymbol: ss,
                        symbolAndColor:{c:c, s: s},
                        bonusAward: 17,
                        gridIndexVec: result.gridVec
                    }
                );

                room.state = STATE_RESULT;

                room.dt = 0;

                notify(room, result);
            });

            return;
        }
    }
    else
    {
        const c = random(0, 2);

        const s = random(0, 3);

        const bidIndex = random(0, 1) == 1 ? (s * 3 + c) : (s * 3 + c + 12);

        const ss = randomZxh();

        result.bonusInfo.specialSymbol = ss;

        result.gridVec.push(bidIndex);

        room.historyInfo.shift();

        room.historyInfo.push(
            {
                specialSymbol: ss,
                symbolAndColor:{c:c, s:s},
                bonusAward: 17,
                gridIndexVec: result.gridVec
            }
        );
    }

    room.state = STATE_RESULT;

    room.dt = 0;

    notify(room, result);
}

// 改变状态[结束](room)
function change_state_over (room)
{   
    room.state = STATE_OVER

    room.dt = 0;

    // 保留机器人上次投注 方便续压

    for(let i=0;i<room.players.length;++i)
    {
        var sock = room.players[i];

        if(sock && sock.isai)
        {
            delete sock.bets;

            delete sock.logic;

            delete sock.isbet;

            if(random(0, 3) == 0) sock.bets = room.bets[sock.uid];
        }
    }

    const history = room.historyInfo[room.historyInfo.length - 1];

    const s = history.symbolAndColor.s;

    const c = history.symbolAndColor.c;

    const ss = history.specialSymbol;

    var result = {
        method: "change.state",
        state: STATE_OVER,
        "b": 17,
        "c": 0,
        "jp": 0,
        "t": 0,   // 总赢分
        "o": 0,
        "r": [],
        "s": [
            {
                "a": 0,    // 赢分
                "o": room.symbolOdds[s][c],
                "p": 0,    // 下注
                "s": history.symbolAndColor
            }
        ],
        "sp": {
            "a": 0,        // 赢分
            "o": room.specialSymbolOdds[ss],
            "p": 0,        // 下注
            "s": ss
        }
    };

    for(const sock of room.players)
    {
        if(sock && !sock.isai && sock.uid) 
        {
            var bets = room.bets[sock.uid];

            if(bets)
            {
                if(bets.symbolBet && bets.symbolBet[s] && bets.symbolBet[s][c])
                {
                    result.s[0].p = bets.symbolBet[s][c];
                    result.s[0].a = result.s[0].p * result.s[0].o;
                }
                else
                {
                    result.s[0].p = 0;
                    result.s[0].a = 0;
                }

                if(bets.specialSymbolBet && bets.specialSymbolBet[ss])
                {
                    result.sp.p = bets.specialSymbolBet[ss];
                    result.sp.a = result.sp.p * result.sp.o;
                }
                else
                {
                    result.sp.p = 0;
                    result.sp.a = 0;
                }

                result.t = result.s[0].a + result.sp.a;
            }
            else
            {   
                result.s[0].p = 0;
                result.s[0].a = 0;
                result.sp.p = 0;
                result.sp.a = 0;
                result.t = 0;
            }
            
            const buf = JSON.stringify(result);

            sock.sendText(buf);
        }
    }

}

// 改变状态[开始下注](room)
function change_state_start (room)
{
    room.state = STATE_DOWN_BET

    room.dt = 0;

    room.bets = {};

    room.symbolOdds = [
        [random(30, 45),random(25, 35),random(30, 45)],
        [random(15, 24),random(13, 18),random(15, 24)],
        [random(9, 12),random(8, 12),random(9, 12)],
        [random(4, 7),random(3, 6),random(4, 7)]
    ];

    notify(room, {
        method: "change.state",
        state: STATE_DOWN_BET,
        betInfo: room.betInfo,
        historyInfo: [room.historyInfo[room.historyInfo.length - 1]],
        millisec: room.millisec,
        symbolOdds: room.symbolOdds,
        specialSymbolOdds: room.specialSymbolOdds,
        dt: 0
    });
}   

// 机器人逻辑
function room_ai(room, dt)
{
    for(let i=0;i<room.players.length;++i)
    {
        let sock = room.players[i];

        if(sock && sock.isai) sock.time -= dt;
    }

    if(room.state == STATE_DOWN_BET && room.dt >= random(3, 8) && room.dt < 18)
    {
        // 随机下注

        for(let i=0;i<room.players.length;++i)
        {
            var sock = room.players[i];

            if(sock && sock.isai && random(0, 100) <= 75)
            {
                let user = userManager[sock.uid];

                if(sock.time < 0 && room.bets[sock.uid] == undefined)
                {
                    room_remove(sock);

                    continue;
                }

                if(sock.bets)
                {
                    if(sock.isbet) return;

                    sock.isbet = true;

                    const last = sock.bets;

                    var data = [];
                    
                    for(let symbol in last.symbolBet)
                    {
                        var colors = last.symbolBet[symbol];

                        for(let color in colors)
                        {
                            data.push(
                                {
                                    chips: colors[color],
                                    symbol: symbol,
                                    color: color,
                                    isSpecial: false
                                }
                            );
                        }
                    }

                    for(let symbol in last.specialSymbolBet) data.push({chips: last.specialSymbolBet[symbol], symbol: symbol, isSpecial: true});

                    if(data.length)
                    {
                        down_bet(sock, {
                            data: data
                        });
                    }
                }
                else
                {
                    if(sock.logic  == undefined)
                    {
                        sock.logic = {
                            look: random(0, 3) == 0 ? true : false,
                            project: [],
                            chipsCount: 0,
                        };

                        const chipsType = random(0, 100) < 30 ? 1 : 10;

                        // 只看不下
                        if(sock.logic.look) return;

                        // 和
                        if(random(0, 100) < 30) sock.logic.project.push({chips: chipsType, symbol: 2, isSpecial: true});

                        // 庄闲随机取一个
                        random(0, 100) < 50 ? sock.logic.project.push({chips: chipsType, symbol: 1, isSpecial: true}) : sock.logic.project.push({chips: chipsType, symbol: 3, isSpecial: true});

                        if(random(0, 1) == 1)
                        {
                            // 随机给几列

                            for(let i=0;i<column.length;++i)
                            {
                                if(random(0,100) < 50)
                                {
                                    for(let n=0;n<column[i].length;++n)
                                    {
                                        const c = column[i][n];

                                        sock.logic.project.push({chips: chipsType, symbol: c[0], color: c[1], isSpecial: false});
                                    }
                                }
                            }
                        }
                        else
                        {
                            // 随机给几行

                            for(let i=0;i<row.length;++i)
                            {
                                if(random(0,100) < 50)
                                {
                                    for(let n=0;n<row[i].length;++n)
                                    {
                                        const r = row[i][n];

                                        sock.logic.project.push({chips: chipsType, symbol: r[0], color: r[1], isSpecial: false});
                                    }
                                }
                            }
                        }
                    }

                    if(sock.logic.project.length)
                    {
                        var data = [];

                        var count = random(1, 4);

                        const size = sock.logic.project.length - 1;

                        for(let i=0;i<=size;++i)
                        {
                            if(--count == 0) break;

                            const item = sock.logic.project[random(0, size)];
    
                            if(random(0, 100) < 20) continue;
       
                            if(item.isSpecial == true && item.symbol == 1 && random(0, 100) > 45) continue;
    
                            if(user.chips < item.chips) break;
    
                            data.push(item);
                        }
    
                        if(data.length)
                        {
                            down_bet(sock, {
                                data: data
                            });
                        }
                    }
                }
            }
        }
    }
}

/*public method*/

let method = function()
{       

}

method.prototype.message = (sock, msg)=>
{
    const json = JSON.parse(msg);

    if(json)
    {
        switch(json.method)
        {
            case "join.room.req" : { join_room(sock, json); break; }
            case "down.bet.req": { down_bet(sock, json); break; }
            case "clear.bet.req": { clear_bet(sock, json); break; }
            default: break;
        }
    }
}

method.prototype.close = (sock)=>
{
    if(undefined == sock.uid) return;
    
    var room = roomManager[sock.rid];

    --room.playerCount;

    for(let i=0;i<3;++i)
    {
        if(room.players[i] == sock)
        {
            delete room.players[i];

            break;
        }
    }

    delete userManager[sock.uid];

    delete sock.uid;

    delete sock.rid;   

    delete sock.bullets;
}

method.prototype.error = (sock)=>
{

}

method.prototype.frame = (dt)=>
{   
    for(let i=0;i<roomManager.length;++i)
    {
        let room = roomManager[i];

        room.dt += dt;

        if(room.state == STATE_DOWN_BET && room.dt >= 23) change_state_result(room);
        else if(room.state == STATE_RESULT && room.dt >= 15) change_state_over(room);
        else if(room.state == STATE_OVER && room.dt >= 5) change_state_start(room);

        room_ai(room, dt);
    }
}

/*public method*/

module.exports = {
    id: "method",
    func: method
};
