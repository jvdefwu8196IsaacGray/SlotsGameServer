require('./const.js');
require("../../../publics/rpc-client");
const bearcat = require('bearcat');
const {random} = require("../../../publics/global");

const KIND_ID = 1008;

const STATE_DOWN_BET = 2;
const STATE_RESULT = 3;
const STATE_OVER = 4;

const row = [
    [0,3,6,9],
    [1,4,7,10],
    [2,5,8,11],
];

const column = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [9,10,11]
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
    var r = random(0, 100);

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
            var sock = {
                isai: true,
                uid: uid,
                rid: rid,
                seat: i,
                time: random(15, 5000)
            }
    
            room.players[i] = sock;
    
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
    var room = 
    {
        dt: 0,
        lock: 0,
        players: [null,null,null,null,null,null],
        aiCount: 0,
        playerCount: 0,
        bets: {},
        odds: [0,0,0,0,0,0,0,0,0,0,0,0,2,12,2],
        state: STATE_DOWN_BET,
        historys: [
            // [(0, 14), (0, 2)]
        ]
    };

    for(let i=0;i<10;++i)
    {
        var r = random(1, 100)

        if(r >= 95)
        {
            room.historys.push({
                spItem : random(0, 6),
                bIdx : 0,
                sIdx : randomZxh(),
            });
        }
        else
        {
            room.historys.push({
                spItem : 9,
                bIdx : random(0, 11),
                sIdx : randomZxh(),
            });
        }
    }

    for(let i=0;i<12;++i)
    {
        if(random(0, 10) >= 5)
        {
            if(i <= 2) room.odds[i] = random(55, 77);
            else if(i <= 5) room.odds[i] = random(25, 45);
            else if(i <= 8) room.odds[i] = random(7, 21);
            else if(i <= 11) room.odds[i] = random(4, 6);
        }
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
        var room = roomManager[i];

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

    delete info.playerCount;

    delete info.aiCount;

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
                    chip: user.chips,
                    nickname: user.nickname,
                    vipLv: user.vipLevel,
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
                chip: user.chips,
                nickname: user.nickname,
                vipLv: user.vipLevel,
                seat: i,
            });  
        }
    }

    return info;
}

// 从房间内移除
function room_remove(sock)
{
    if(undefined == sock.uid) return;
    
    var room = roomManager[sock.rid];

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

// 机器人逻辑
function room_ai(room, dt)
{
    for(let i=0;i<room.players.length;++i)
    {
        let sock = room.players[i];

        if(sock && sock.isai) sock.time -= dt;
    }

    if(room.state == STATE_DOWN_BET && room.dt >= 2 && room.dt < 18)
    {
        // 随机下注

        for(let i=0;i<room.players.length;++i)
        {
            var sock = room.players[i];

            if(sock && sock.isai && random(0, 100) <= 75)
            {
                const user = userManager[sock.uid];

                if(sock.time < 0 && room.bets[sock.uid] == undefined)
                {
                    room_remove(sock);

                    continue;
                }

                if(sock.bets)
                {
                    if(sock.isbet) return;

                    sock.isbet = true; 

                    if(data.length)
                    {
                        down_bet(sock, {
                            data: sock.bets
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
                            chipsType: random(0, 100) < 30 ? 1 : 10,
                        };

                        // 只看不下
                        if(sock.logic.look) return;

                        // 和
                        if(random(0, 100) < 30) sock.logic.project.push(13);

                        // 庄闲随机取一个
                        random(0, 100) < 50 ? sock.logic.project.push(12) : sock.logic.project.push(14);

                        if(random(0, 1) == 1)
                        {
                            // 随机给几列

                            for(let i=0;i<column.length;++i)
                            {
                                if(random(0,100) < 50)
                                {
                                    for(let n=0;n<column[i].length;++n)
                                    {
                                        sock.logic.project.push(column[i][n])
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
                                        sock.logic.project.push(row[i][n])
                                    }
                                }
                            }
                        }
                    }

                    let data = [];

                    for(let i=0;i<sock.logic.project.length;++i)
                    {
                        if(random(0, 100) < 20) continue;

                        const idx = sock.logic.project[i];

                        if(idx == 13 && random(0, 100) > 45) continue;

                        if(user.chips < sock.logic.chipsTyp) break;

                        data.push(
                            {
                                index: idx,
                                chips: sock.logic.chipsType
                            }
                        );
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

// 进入房间
function join_room (sock, args)
{
    const {uid, token} = args;

    crpc.checkToken({
        uid: uid,
        token: token
    }, async (err, result) => 
    {
        if(err || result.code != 10000) return logger.error(err || result.message);

        sock.rid = 0;

        sock.uid = uid;      

        let room = room_find(sock);

        // if(room.aiCount == 0 && room.playerCount == 0 /*&& random(0, 100) <= 80*/) await addRobot(room);

        ++room.playerCount;

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

    if(room.state != STATE_DOWN_BET || room.dt >= 20)
    {
        console.log(APP_NAME, "非下注状态");
        
        return;
    }

    var chipsCount = 0;

    for (const iter of args.data) 
    {
        const {index, chips} = iter;

        if(index == undefined || chips == undefined) return logger.error("下注参数不对");

        chipsCount += chips;
    }

    ++room.lock;

    if(sock.isai)
    {
        for (const iter of args.data) 
        {
            const {index, chips} = iter;
    
            if(room.bets[uid] == undefined) room.bets[uid] = {};
        
            if(room.bets[uid][index] == undefined) room.bets[uid][index] = chips;
            
            else room.bets[uid][index] += chips;

            room.bets[uid].isai = sock.isai;
        }

        user.chips -= chipsCount;

        notify(room, {
            method: "down.bet.notify",
            data: args.data,
            uid: uid,
            seat: sock.seat,
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
        }, (err, result)=>{
    
            --room.lock;
            
            if(err || result.code != 10000) return;
    
            for (const iter of args.data) 
            {
                const {index, chips} = iter;
        
                if(room.bets[uid] == undefined) room.bets[uid] = {};
            
                if(room.bets[uid][index] == undefined) room.bets[uid][index] = chips;
                
                else room.bets[uid][index] += chips;
    
                room.bets[uid].isai = sock.isai;
            }
    
            if(sock.uid == undefined) return; // 判断是否还再房间
    
            user.chips -= chipsCount;
    
            notify(room, {
                method: "down.bet.notify",
                data: args.data,
                uid: uid,
                seat: sock.seat,
                seatMoney: user.chips
            });
        });
    }
}

// 清除下注
function clear_bet (sock, args)
{
    // const {uid, room} = session;

    // uid = 10000;

    // var room = roomManager[session.room];

    // if((room.state == STATE_DOWN_BET || room.dt >= 22) && room.bets[sock])
    // {
    //     var bets = room.bets[uid];
    
    //     if(bets)
    //     {
    //         var chips = 0;
    
    //         for (const iter of bets) chips += iter;

    //         ++room.lock;

    //         crpc.addChipsArgs({
    //             aid: APP_PORT,
    //             uid: uid,
    //             chips: chips,
    //             comment: "清除下注"
    //         },(err, result) => {

    //             --room.lock;
    
    //             if(err || result.code != 10000) return;

    //             sock.sendText(JSON.stringify({
    //                 method: "down.bet.clear.res",
    //                 chips: chips,
    //                 bets: bets,
    //                 uid: uid,
    //             }));

    //             delete room.bets[uid];   
    //         });
    //     }
    // }
}

// 改变状态[开奖](room)
function change_state_result(room)
{
    console.log(1111);

    var result = {
        spItem : 0,
        bIdx : 0,
        sIdx : 0,
    }

    var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var exist = false;

    for (const uid in room.bets) 
    {
        exist = true;

        var bets = room.bets[uid];

        if(bets.isai == undefined)
        {
            for(const key in bets)
            {
                const index = Number(key);
    
                count[index] += bets[index] * room.odds[index];
            }
        }
    }

    if(exist)
    {
        result.spItem = 9;

        var data = [];

        var bidChips = -1;

        var sidChips = -1;

        for(let i=0;i<count.length;++i)
        {
            if(i < 12)
            {
                if(bidChips == -1 || bidChips > count[i])
                {
                    bidChips = count[i];

                    result.bIdx = i;
                }
            }
            else
            {
                if(sidChips == -1 || sidChips > count[i])
                {
                    sidChips = count[i];

                    result.sIdx = i;
                }
            }
        }

        // 随机 均衡点
        if(count[12] == 0 && count[13] == 0 && count[14] == 0) result.sIdx = randomZxh();

        // 普通奖
        if(result.spItem == 9)
        {
            const o0 = room.odds[result.bIdx];

            const o1 = room.odds[result.sIdx];
    
            for (let uid in room.bets) 
            {
                let chips = 0;
    
                const bets = room.bets[uid];
    
                const b0 = bets[result.bIdx];
    
                const b1 = bets[result.sIdx];
    
                if(b0) chips += b0 * o0;
    
                if(b1) chips += b1 * o1;
    
                data.push({uid:uid, chips:chips});
            }
        }
        // 大三元
        else if(result.spItem >= 0 && result.spItem <= 3)
        {
            let i0,i1,i2;

            switch(result.spItem)
            {
                case 0:
                {
                    i0 = 9;
                    i1 = 10;
                    i2 = 11;
                    break;
                }
                case 1:
                {
                    i0 = 6;
                    i1 = 7;
                    i2 = 8;
                    break;
                }
                case 2:
                {
                    i0 = 3;
                    i1 = 4;
                    i2 = 5;
                    break;
                }
                case 3:
                {
                    i0 = 0;
                    i1 = 1;
                    i2 = 2;
                    break;
                }
            }

            const o0 = room.odds[i0];

            const o1 = room.odds[i1];

            const o2 = room.odds[i2];
    
            for (let uid in room.bets) 
            {
                let chips = 0;
    
                const bets = room.bets[uid];
    
                const b0 = bets[i0];
    
                const b1 = bets[i1];
                    
                const b2 = bets[i2];
    
                if(b0) chips += b0 * o0;
    
                if(b1) chips += b1 * o1;
    
                if(b2) chips += b2 * o2;          
    
                data.push({uid:uid, chips:chips});
            }
        }
        // 大四喜
        else if(result.spItem >= 4 && result.spItem <= 6)
        {
            let i0,i1,i2,i3;

            switch(result.spItem)
            {
                case 4:
                {
                    i0 = 0;
                    i1 = 3;
                    i2 = 6;
                    i3 = 9;
                    break;
                }
                case 5:
                {
                    i0 = 1;
                    i1 = 4;
                    i2 = 7;
                    i3 = 10;
                    break;
                }
                case 6:
                {
                    i0 = 2;
                    i1 = 5;
                    i2 = 8;
                    i3 = 11;
                    break;
                }
            }

            const o0 = room.odds[i0];

            const o1 = room.odds[i1];

            const o2 = room.odds[i2];

            const o3 = room.odds[i3];
    
            for (let uid in room.bets) 
            {
                let chips = 0;
    
                const bets = room.bets[uid];
    
                const b0 = bets[i0];
    
                const b1 = bets[i1];
                    
                const b2 = bets[i2];
    
                const b3 = bets[i3];
    
                if(b0) chips += b0 * o0;
    
                if(b1) chips += b1 * o1;
    
                if(b2) chips += b2 * o2;
    
                if(b3) chips += b3 * o3;               
    
                data.push({uid:uid, chips:chips});
            }
        }

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

                    let user = userManager[uid];

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

                room.state = STATE_RESULT
    
                room.dt = 0;
    
                notify(room, {
                    method: "change.state",
                    state: STATE_RESULT,
                    result: result,
                    value: value,
                    dt: 0
                });
            }); 

            return;
        }
    }
    else
    {
        const r = random(0, 100);

        // if(r >= 90)
        // {
            result.spItem = random(0, 6);
            result.bIdx = 0;
            result.sIdx = randomZxh();
        // }
        // else
        // {
        //     result.spItem = 9;
        //     result.bIdx = random(0, 11);
        //     result.sIdx = randomZxh();
        // }

        console.log("不存在下注 随机开奖", room.bets);
    }

    room.state = STATE_RESULT

    room.dt = 0;

    notify(room, {
        method: "change.state",
        state: STATE_RESULT,
        result: result,
        value: [0, 0, 0, 0, 0, 0],
        dt: 0
    });
}

// 改变状态[结束](room)
function change_state_over (room)
{
    room.state = STATE_OVER

    room.dt = 0;

    // 保留机器人上次投注 方便续压
    
    for(let i=0;i<room.players.length;++i)
    {
        let sock = room.players[i];

        if(sock && sock.isai)
        {
            delete sock.bets;

            delete sock.logic;

            delete sock.isbet;

            if(random(0, 3) == 0) sock.bets = room.bets[sock.uid];
        }
    }

    if(room.sync)
    {
        crpc.changeSync({
            players: room.sync
        }, (err, result) => {
        
            if(err || result.code != 10000) return logger.error(err || result.message);

            delete room.sync;

            notify(room, {
                method: "change.state",
                state: STATE_OVER,
                dt: 0
            });

        });

        return;
    }

    notify(room, {
        method: "change.state",
        state: STATE_OVER,
        dt: 0
    });
}

// 改变状态[开始下注](room)
function change_state_start (room)
{
    room.state = STATE_DOWN_BET

    room.dt = 0;

    room.bets = {};

    for(let i=0;i<12;++i)
    {
        if(room.odds[i] == 0 || random(0, 10) >= 5)
        {
            if(i <= 2) room.odds[i] = random(55, 77);
            else if(i <= 5) room.odds[i] = random(25, 45);
            else if(i <= 8) room.odds[i] = random(7, 21);
            else if(i <= 11) room.odds[i] = random(4, 6);
        }
    }

    notify(room, {
        method: "change.state",
        state: STATE_DOWN_BET,
        dt: 0,
        odds: room.odds
    });
}   

/*public method*/

function method()
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
    room_remove(sock);
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

        if(room.state == STATE_DOWN_BET && room.dt >= 22 && room.lock == 0) change_state_result(room);
        else if(room.state == STATE_RESULT && room.dt >= 28 && room.lock == 0) change_state_over(room);
        else if(room.state == STATE_OVER && room.dt >= 1 && room.lock == 0) change_state_start(room);

        room_ai(room, dt);
    }
}

/*public method*/

module.exports = {
    id: "method",
    func: method
};

