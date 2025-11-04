require('./const.js');
require("../../publics/rpc-client");
const fs = require("fs");
const bearcat = require('bearcat');
const {random} = require("../../publics/global");

const KIND_ID = 1000;

const MORE_BEGIN = 0;
const MORE_LIST = 1;
const MORE_END = 2;

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

    server.connections.forEach((sock)=>{
       if(sock.uid) sock.sendText(buf); 
    });
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
        const robots = await getRobot(2);

        const rid = room.rid;
    
        for(let i=0;i<robots.length;++i)
        {
            if(room.aiCount + room.playerCount == 3) break;
    
            const uid = robots[i].uid;
    
            userManager[uid] = robots[i];

            // 构造个虚拟的sock
    
            room.players[i] = {
                isai: true,
                uid: uid,
                rid: rid,
                seat: i,
                bullets: {index: 0},
                time: random(15, 5000),
                aiConfig: {
                    look: random(0, 1) ? false : true,   // 允许射击
                    lookTime: random(150, 4500),
                    double: random(0, 1) ? false : true, // 允许炸弹
                    doubleTime:  random(150, 4500)
                }
            };
    
            ++room.aiCount;
        }
    }
    catch(err)
    {
        logger.error(err);
    }
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
        index: 1,
        lastKillBossFishId: -1,
        players: []
    };

    for(let i=0;i<3;++i)
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
                    bet: 10,
                    cannonIdx: 0,
                    maxBet: 10000,
                    useLock: true,
                    useSpeed: false
                });

                continue;
            }

            delete room.players[i];
        }

        if(sock.seat == undefined)
        {
            sock.seat = i;

            info.yourseat = i;

            room.players[i] = sock;

            userManager[user.uid] = user;

            info.players.push({
                accountId: user.uid,
                seatMoney: user.chips,
                nickname: user.nickname,
                vip: user.vipLevel,
                seat: i,
                bet: 10,
                cannonIdx: 0,
                maxBet: 10000,
                useLock: false,
                useSpeed: true,
            });  
        }
    }

    notify_not_self(room, sock, {
        "method": "join.room.notify",
        "player": {
            "accountId": sock.uid,
            "bet": 10,
            "cannonIdx": 0,
            "maxBet": 10000,
            "nickname": user.nickname,
            "seat": sock.seat,
            "seatMoney": user.chips,
            "useLock": true,
            "useSpeed": false,
            "vip": user.vipLevel
        }   
    });

    return info;
}

// 从房间内移除玩家[延迟]
function room_remove(sock)
{
    if(undefined == sock.uid || sock.remove) return;
    
    const room = roomManager[sock.rid];

    sock.remove = 10;
    
    notify(room, {
        method: "join.room.leave",
        seat: sock.seat
    })

    console.log("从房间内移除玩家");
}

//从房间删除玩家
function room_clear(room, dt)
{
    if(room.more) return;

    for(let i=0;i<3;++i)
    {
        let sock = room.players[i];

        if(sock && sock.remove && (sock.remove -= dt) <= 0)
        {
            sock.isai ? --room.aiCount : --room.playerCount;

            delete sock.seat;
        
            delete sock.uid;
        
            delete sock.rid;   
        
            delete sock.bets;
            
            delete sock.logic;
        
            delete sock.isbet;

            delete sock.bullets;

            delete room.players[i];

            console.log("删除玩家", i);
        }
    }
}

// 机器人逻辑
function room_ai(room, dt)
{
    for(let i=0;i<room.players.length;++i)
    {
        var sock = room.players[i];

        if(sock && sock.isai)
        {
            if(!sock.aiConfig.look)
            {
                for(let index in sock.bullets)
                {
                    const bullet = sock.bullets[index];

                    const fish = room.fishManager[bullet.fishId];

                    if(fish)
                    {
                        bullet_hit(sock, {
                            bulletId: bullet.bulletId,
                            fishId: bullet.fishId,
                            odds: fish.odds
                        })
                    }

                    delete sock.bullets[index];
                }

                if(sock.lockId == undefined || room.fishManager[sock.lockId] == undefined)
                {
                    delete sock.lockId;

                    var odds = 0;

                    for(let index in room.fishManager)
                    {
                        const fish = room.fishManager[index];

                        if(fish && fish.odds >= odds)
                        {
                            if(sock.lockId == undefined || random(0, 100) < 30) sock.lockId = fish.fishId;

                            odds = fish.odds;
                        }
                    }
                }

                if(sock.lockId)
                {
                    const user = userManager[sock.uid];

                    if(user && user.chips >= 10)
                    {
                        bullet_shoot(sock, {
                            isMultiBullet: false,
                            bet: 10,
                            angle: -1,
                            fishId: sock.lockId
                        });
                    }
                    else if(sock.time >= 60)
                    {
                        sock.time = random(15, 45);
                    }
                }
            }

            if((sock.aiConfig.doubleTime -= dt) <= 0)
            {
                sock.aiConfig.double = !sock.aiConfig.double;

                sock.aiConfig.lookTime = random(250, 600);
            }

            if((sock.aiConfig.lookTime -= dt) <= 0)
            {
                sock.aiConfig.look = !sock.aiConfig.look;

                sock.aiConfig.lookTime = random(250, 600);
            }

            if((sock.time -= dt) <= 0) room_remove(sock);
        }
    }
}

// 更新房间
function room_update(room, dt)
{
    const more = room.currentMore;

    if(more == undefined) return;

    more.dt += dt;

    if(more.state == MORE_BEGIN && more.dt >= 5)
    {
        bullet_hit_more(more.sock, {
            fishId: more.fishId,
            fishIds: []
        });
    }
    else if(more.state == MORE_LIST && more.dt >= more.wait)
    {
        const user = userManager[more.sock.uid];

        notify(room, {
            "method": "bullet.hit.more.end.notify",
            "accountId": user.uid,
            "dropItemNo":-1,
            "dropNum":0,
            "dropShowId":0,
            "dropType":0,
            "fishId": more.fish.fishId,
            "money": more.money,
            "mustDropAmount":0,
            "resume": 1,
            "seat": more.sock.seat,
            "seatMoney": user.chips
        });

        delete room.currentMore;
    }
}

// 进入房间
function join_room(sock, args)
{
    const {uid, token} = args;

    crpc.checkToken({
        uid: uid,
        token: token
    }, async (err, result) => {
        
        if(err || result.code != 10000) return logger.error(err || result.message);

        const room = room_find(sock);       

        sock.rid = room.rid;

        sock.uid = uid;    

        sock.bullets = {};

        if(room.aiCount == 0 && room.playerCount == 0 /*&& random(0, 100) <= 80*/) await addRobot(room);

        const user = {
            uid: uid,
            chips: result.chips,
            nickname: result.nickname,
            vipLevel: result.vipLevel
        };

        const info = JSON.stringify(room_add(sock, user, room));

        sock.sendText(info);

    });    
}

// 射击
function bullet_shoot(sock, args)
{
    const {bet, fishId, angle, bulletId, isMultiBullet} = args;

    if(sock.isai)
    {
        const room = roomManager[sock.rid];

        let bulletId = ++sock.bullets.index;
           
        let user = userManager[sock.uid];

        let chips = isMultiBullet ? bet * 2 : bet;

        if(!user || user.chips < chips || room.iswave) return;

        user.chips -= chips;

        sock.bullets[bulletId] = {
            chips: chips,
            fishId: fishId,
            bulletId: bulletId
        };
    
        notify_not_self(room, sock, {
            method: "bullet.shoot.notify",
            seat: sock.seat,
            bet: bet,
            fishId: fishId,
            angle: angle,
            seatMoney: user.chips
        });
    }
    else
    {
        if(undefined == sock.uid || undefined == bet || undefined == fishId || undefined == angle || undefined == bulletId || undefined == isMultiBullet) return;

        const room = roomManager[sock.rid];  

        var user = userManager[sock.uid];
    
        var chips = isMultiBullet ? bet * 2 : bet;
   
        if(!user || user.chips < chips || room.iswave) return;

        user.chips -= chips;

        sock.bullets[bulletId] = {
            chips: chips,
            fishId: fishId,
            bulletId: bulletId
        };
    
        notify_not_self(room, sock, {
            method: "bullet.shoot.notify",
            seat: sock.seat,
            bet: bet,
            fishId: fishId,
            angle: angle,
            seatMoney: user.chips
        });

        crpc.addChipsSync({
            kid: KIND_ID,
            uid: sock.uid,
            chips: -chips,
            comment: "射击",
        }, (err, result)=>{
    
            if(err || result.code != 10000)
            {
                user.chips += chips;
    
                return logger.error(err || result.message);
            }
        });
    }

    // if(!sock.energy) sock.energy = 0;

    // sock.sendText(JSON.stringify({
    //     method: "energy.notify",
    //     energy: sock.energy.toFixed(2),
    //     ratio: 56.250
    // }));

    // sock.energy += chips * 100;
}

function bullet_dod(sock, args)
{

}

 // 子弹命中
function bullet_hit(sock, args)
{
    const {fishId, bulletId, odds} = args;

    if(sock.isai == undefined && (undefined == sock.uid || undefined == fishId || undefined == bulletId || undefined == odds)) return;

    const bullet = sock.bullets[bulletId];

    if(undefined == bullet)
    {
        logger.error("子弹不存在");

        console.log(args);

        return;
    }

    const chips = bullet.chips;

    const room = roomManager[sock.rid];

    const fish = room.fishManager[fishId];

    delete sock.bullets[bulletId];

    if(!fish || fish.odds != odds) return;

    var user = userManager[sock.uid];

    var showoff = false;

    // 普通中奖
    var money = 0;

    // 预支奖池
    var overdraw = 0;

    // 是否JP
    var isJp = false;

    // 中奖类型
    var type = 1;

    // 暴击赔率 1或5倍
    var floatedRate = 1;

    kline = Math.max(0.8, kline - 0.001);

    switch(odds)
    {
        // 霸王鱿鱼 黄金鲨
        case 600:
        case 900:
        {
            isJp = true;

            type = 3;

            showoff = true;

            if(random(0, 100) < lucky[0] && odds * chips <= jackpool)
            {
                const min = odds / 2;

                money = Math.min(chips * random(min, odds), jackpool);

                jackpool -= money;

                if(lucky[0] == 100) lucky[0] = 1;

                else lucky[0] -= 20;

                lucky[0] = Math.min(lucky[0], 1);

                break;
            }   

            ++lucky[0];
            
            jackpool += chips * kline;

            return;
        }
        // 龙龟
        case 888:
        {
            isJp = true;

            type = 3;

            showoff = true;

            const min = 168;

            if(random(0, 100) < lucky[1] && min * chips <= jackpool)
            {
                money = Math.min(chips * random(min, odds), jackpool);

                jackpool -= money;

                if(lucky[1] == 100) lucky[1] = 1;
                
                else lucky[1] -= 20;

                lucky[1] = Math.min(lucky[1], 1);

                break;
            }     

            ++lucky[1];
            
            jackpool += chips * kline;

            return;
        }
        // 雷霆 炸弹
        case 330:
        case 360:
        {
            type = 2;

            overdraw = chips * 30;

            if(room.more == undefined && random(0, 100) < lucky[2] && (odds * chips + overdraw) <= jackpool)
            {
                const min = odds /3;

                money = Math.min(chips * random(min, odds), jackpool);

                jackpool -= (money + overdraw);

                if(lucky[2] == 100) lucky[2] = 1;
                
                else lucky[2] -= 20;

                lucky[2] = Math.min(lucky[2], 1);

                break;
            }   

            ++lucky[2];
            
            jackpool += chips * kline;

            return;
        }
        // 旋风
        case 400:
        {
            type = 2;

            overdraw = chips * 50;

            if(room.more == undefined && random(0, 100) < lucky[2] && (odds * chips + overdraw) <= jackpool)
            {
                const min = 200;

                money = Math.min(chips * random(min, odds), jackpool);

                jackpool -= (money + overdraw);

                if(lucky[3] == 100) lucky[3] = 1;
                
                else lucky[3] -= 20;

                lucky[3] = Math.min(lucky[3], 1);

                break;
            }   

            ++lucky[3];
            
            jackpool += chips * kline;

            return;
        }
        // 彩金鱼
        case 168:
        {
            isJp = true;

            type = 1;

            money = chips * 168;

            if(random(0, 100) < lucky[4] && money <= jackpool)
            {
                jackpool -= money;

                if(lucky[4] == 100) lucky[4] = 1;
                
                else lucky[4] -= 20;

                lucky[4] = Math.min(lucky[4], 1);

                break;
            }   

            ++lucky[4];

            jackpool += chips * kline;

            return;
        }
        // 彩金龙
        case 1888: 
        {
            isJp = true;

            type = 1;

            showoff = true;

            const min = 888;

            if(random(0, 500) < lucky[5] && min * chips <= jackpool)
            {
                money = Math.min(chips * random(min, odds), jackpool);

                jackpool -= money;

                if(lucky[5] == 100) lucky[5] = 1;
                
                else lucky[5] -= 20;

                lucky[5] = Math.min(lucky[5], 1);

                break;
            }   

            ++lucky[5];

            jackpool += chips * kline;

            return;
        }
        // 普通鱼
        default:
        {
            type = 1;

            if(random(0, Math.max(odds, 30)) < lucky[6])
            {
                if(fish.id == 14 || fish.id == 15 || fish.id == 16)
                {
                    money = odds * chips;
    
                    if(money / 5 <= jackpool)
                    {
                        if(random(0, 100) <= 95 || money > jackpool) money /= 5;
    
                        else floatedRate = 5; // 爆5倍
    
                        jackpool -= money;
                                
                        if(lucky[6] == 100) lucky[6] = 1;
                
                        else lucky[6] -= 20;

                        lucky[6] = Math.min(lucky[6], 1);
        
                        break;
                    }
                }
                else
                {
                    money = odds * chips;
    
                    if(money <= jackpool)
                    {
                        jackpool -= money;
        
                        if(lucky[6] == 100) lucky[6] = 1;
                
                        else lucky[6] -= 20;

                        lucky[6] = Math.min(lucky[6], 1);

                        break;
                    }
                }
            }   

            lucky[6] += 5;

            jackpool += chips * kline;

            return;
        }
    }

    switch(type)
    {
        case 1:
        {
            delete room.fishManager[fishId];

            break;
        }
        case 2:
        {
            notify(room, {
                "method": "bullet.hit.more.notify",
                "fishId": fishId,
                "seat": sock.seat,
                "floatedRate": floatedRate,
                "timeline": room.currentDt
            });

            room.currentMore = {
                sock: sock,
                fish: fish,
                state: MORE_BEGIN,
                money: money,
                overdraw: overdraw,
                chips: chips,
                wait: odds == 360 ? 2 : 4,
                dt: 0,
            };

            delete room.fishManager[fishId];
    
            return;
        }
        default:
        {           
            break;
        }
    }

    money = Math.floor(money);

    if(sock.isai)
    {
        user.chips += money;
    
        if(showoff)
        {
            // 全服
            ser_notify({
                "method": "showoff.notify",
                "fishType": fish.id,
                "jpType": -1,
                "nickname": user.nickname,
                "resultMoney": money,
                "vip": user.vipLevel
            });
        }

        // 通知颁奖
        if(type == 1)
        {
            notify(room, {
                "method": "bullet.hit.notify",
                "delaytype":0,
                "dropItemNo":-1,
                "dropNum":0,
                "dropShowId":0,
                "dropType":0,
                "fishId": fishId,
                "floatedRate":floatedRate,
                "money":money,
                "mustDropAmount":0,
                "seat": sock.seat,
                "seatMoney":user.chips,
                "weaponType":0
            });
        }
        else
        {
            notify(room, {
                "method": "bullet.hit.eternal.notify",
                "dropItemNo":-1,
                "dropNum":0,
                "dropShowId":0,
                "dropType":0,
                "fishId":fishId,
                "money":money,
                "mustDropAmount":0,
                "seat": sock.seat,
                "seatMoney":user.chips
            });
        }

        if(isJp)
        {
            // JP中奖
            var jpMoney = 0;

            // JP中奖类型
            var jpType = -1;

            var r = random(0, 100);
    
            if(jackpool >= chips * 5000 && r <= 1)
            {
                var jpMoney = chips * random(1200, 1500);
    
                jackpool -= jpMoney;
    
                jpType = 0;
            }
            else if(jackpool >= chips * 4000 && r <= 2)
            {
                var jpMoney = chips * random(800, 1200);
    
                jackpool -= jpMoney;
    
                jpType = 1;
            }
            else if(jackpool >= chips * 3000 && r <= 5)
            {
                var jpMoney = chips * random(300, 800);
    
                jackpool -= jpMoney;
    
                jpType = 2;
            }

            user.chips += jpMoney;
                
            if(jpType != -1)
            {
                notify(room, {
                    "method": "jp.notify",
                    "seat": sock.seat,
                    "resultMoney": jpMoney,
                    "pool": jpType
                });
    
                // 全服
                ser_notify({
                    "method": "showoff.notify",
                    "fishType": -1,
                    "jpType": jpType,
                    "nickname": user.nickname,
                    "resultMoney": jpMoney,
                    "vip": user.vipLevel
                });
            }
        }
    }
    else
    {
        crpc.addChipsSync({
            kid: KIND_ID,
            uid: sock.uid,
            chips: money,
            comment: `杀死`,
        }, (err, result)=>{
    
            if(err || result.code != 10000) return logger.error(err || result.message);
    
            if(undefined == sock.uid) return; // 判断是否离开房间
    
            user.chips += money;
    
            if(showoff)
            {
                // 全服
                ser_notify({
                    "method": "showoff.notify",
                    "fishType": fish.id,
                    "jpType": -1,
                    "nickname": user.nickname,
                    "resultMoney": money,
                    "vip": user.vipLevel
                });
            }
    
            // 通知颁奖
        
            if(type == 1)
            {
                notify(room, {
                    "method": "bullet.hit.notify",
                    "delaytype":0,
                    "dropItemNo":-1,
                    "dropNum":0,
                    "dropShowId":0,
                    "dropType":0,
                    "fishId": fishId,
                    "floatedRate":floatedRate,
                    "money":money,
                    "mustDropAmount":0,
                    "seat": sock.seat,
                    "seatMoney":user.chips,
                    "weaponType":0
                });
            }
            else
            {
                notify(room, {
                    "method": "bullet.hit.eternal.notify",
                    "dropItemNo":-1,
                    "dropNum":0,
                    "dropShowId":0,
                    "dropType":0,
                    "fishId":fishId,
                    "money":money,
                    "mustDropAmount":0,
                    "seat": sock.seat,
                    "seatMoney":user.chips
                });
            }
    
            if(isJp)
            {
                // JP中奖
                var jpMoney = 0;
    
                // JP中奖类型
                var jpType = -1;
    
                var r = random(0, 100);
        
                if(jackpool >= chips * 5000 && r <= 1) 
                {
                    var jpMoney = chips * random(1200, 1500);
        
                    jackpool -= jpMoney;
        
                    jpType = 0;
                }
                else if(jackpool >= chips * 4000 && r <= 2)
                {
                    var jpMoney = chips * random(800, 1200);
        
                    jackpool -= jpMoney;
        
                    jpType = 1;
                }
                else if(jackpool >= chips * 3000 && r <= 5)
                {
                    var jpMoney = chips * random(300, 800);
        
                    jackpool -= jpMoney;
        
                    jpType = 2;
                }
    
                crpc.addChipsSync({
                    kid: KIND_ID,
                    uid: sock.uid,
                    chips: money,
                    comment: `获得奖池`,
                }, (err, res)=>{
    
                    if(err || result.code != 10000) return logger.error(err || result.message);
    
                    user.chips += jpMoney;
                    
                    if(jpType != -1)
                    {
                        notify(room, {
                            "method": "jp.notify",
                            "seat": sock.seat,
                            "resultMoney": jpMoney,
                            "pool": jpType
                        });
            
                        // 全服
                        ser_notify({
                            "method": "showoff.notify",
                            "fishType": -1,
                            "jpType": jpType,
                            "nickname": user.nickname,
                            "resultMoney": jpMoney,
                            "vip": user.vipLevel
                        });
                    }   
                });
            }
        });
    }
}

// 子弹命中
function bullet_hit_more(sock, args)
{
    const {fishId, fishIds} = args;

    if(fishId == undefined || fishIds == undefined) return;

    const room = roomManager[sock.rid];

    const more = room.currentMore;

    if(more == undefined) return;

    if(more.state == MORE_BEGIN && more.sock.uid == sock.uid && more.fish.fishId == fishId)
    {
        more.state = MORE_LIST;

        var chips = 0;

        var list = [];

        fishIds.forEach(fishId =>{

            let fish = room.fishManager[fishId];

            if(fish && fish.odds * more.chips <= more.overdraw) 
            {
                more.money += fish.odds * more.chips;

                more.overdraw -= fish.odds * more.chips;

                list.push(fishId);

                delete room.fishManager[fishId];
            }

        });

        notify(room, {
            "method": "bullet.hit.more.list.notify",
            "fishId": fishId,
            "fishIds": list,
            "seat": sock.seat
        });

        return;
    }
}

// 使用能量
function energy_use(sock, args)
{
    if(undefined == sock.uid) return;

    const room = roomManager[sock.rid];

    notify(room, {
        "method": "energy.use.notify",
        "fishIds": args.fishIds,
        "money":2000,
        "seat": sock.seat
    });
}

// 开关
function card_use(sock, args)
{
    const {turnOn, cardId} = args;

    if(undefined == sock.uid || undefined == turnOn || undefined == cardId) return;

    const room = roomManager[sock.rid];

    sock.sendText(JSON.stringify(
    {
        "method": "card.use.nodeify",
        "cardId": cardId,
        "turnOn": turnOn,
        "seat": sock.seat,
        "timeline": room.currentDt * 1000
    }))
}

// 使用表情
function emotions_use(sock, args)
{
    if(undefined == sock.uid) return;
    
    const {index,seat} = args;

    if(index == undefined) return;

    const room = roomManager[sock.rid];

    notify_not_self(room, sock,{
        "method": "emotions.nodeify",
        "cardId": index,
        "seat": sock.seat
    });
}

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
            case "bullet.shoot.req": { sock.uid && bullet_shoot(sock, json); break; }
            case "bullet.dod.req": { sock.uid && bullet_dod(sock, json); break; }
            case "bullet.hit.req": { sock.uid && bullet_hit(sock, json); break; }
            case "bullet.hit.more.list": { sock.uid && bullet_hit_more(sock, json); break; }
            case "energy.use.req": { sock.uid && energy_use(sock, json); break; }
            case "card.use.req": { sock.uid && card_use(sock, json); break; }
            case "emotions.use.req": { sock.uid && emotions_use(sock, json); break; }
            default: break;
        }
    }
}

method.prototype.close = (sock)=>
{
    if(undefined == sock.uid) return;

    room_remove(sock);
}

method.prototype.error = (sock)=>
{


}

method.prototype.frame = (dt)=>
{   
    jacktime += dt;

    if(jacktime >= 10)
    {
        jacktime = 0;

        virtualJack[0] += virtualJack[0] < 100000 ? random(1000, 2000) : - random(1000, 2000);

        virtualJack[1] += virtualJack[1] < 1000000 ? random(3000, 5000) : - random(3000, 5000);

        virtualJack[2] += virtualJack[2] < 500000 ? random(2000, 3000) : - random(2000, 3000);

        ser_notify({
            "method": "jp.update.notify",
            "res":1,
            "Amount": [
                Math.ceil(virtualJack[1] + jackpool),
                Math.ceil(virtualJack[2] + jackpool),
                Math.ceil(virtualJack[0] + jackpool),
            ]
        });
    }

    for(let room of roomManager)
    {
        const script = linetimeManager[room.currentLineTime];

        room.iswave = (script.wavesTime > 0 && room.currentDt >= script.wavesTime);

        room.currentDt += room.iswave ? (dt * 7.5) : dt;

        const start = room.currentDt;

        for(let fishId in room.fishManager)
        {
            const fish = room.fishManager[fishId];

            if(start >= fish.endTime) delete room.fishManager[fishId];
        }

        for(let n=room.currentProgress;n<script.lineTime.length;++n)
        {      
            const s = script.lineTime[n];
           
            if(start >= s.startTime)
            {                
                room.currentProgress = n + 1;

                if(room.currentDt <= s.endTime) room.fishManager[s.fishId] = s;

                continue;
            }
    
            break;
        }
    
        if(room.currentDt >= script.nextTime)
        {
            const s = script.lineTime[script.lineTime.length-1];

            room.fishManager = {};
    
            room.currentDt = 0;
        
            room.currentProgress = 0;
    
            if(++room.currentLineTime >= linetimeManager.length) room.currentLineTime = 0;
            
            continue;
        }

        if((room.syncTime += dt) >= 3)
        {
            room.syncTime = 0;

            notify(room, {
                method: "frame.sync.notify",
                mainIndex: script.mainIndex,
                subIndex: script.subIndex,
                dt: room.currentDt
            });
        }

        if(!room.iswave) room_ai(room, dt);

        room_update(room, dt);

        room_clear(room, dt);
    }
}

module.exports = {
    id: "method",
    func: method
};

