require('./const.js');
require("../../../publics/rpc-client");
const bearcat = require('bearcat');
const {random} = require("../../../publics/global");

var STATE_DOWN_BET = 2;
var STATE_RESULT = 3;
var STATE_OVER = 4;

const running =  [
    {
        milestone: [
            {
                speed: 38.31934796084131,
                track: 0
            },
            {
                speed: 34.40921041381669,
                track: 7
            },
            {
                speed: 37.92833420613885,
                track: 11
            },
            {
                speed: 29.71704535738714,
                track: 28
            },
            {
                speed: 29.32603160268468,
                track: 42
            },
            {
                speed: 30.10805911208960,
                track: 58
            }
        ],
        time: 731,
        track: 0
    },
    {
        milestone: [
            {
                speed: 34.94037647842552,
                track: 0
            },
            {
                speed: 30.12101420553924,
                track: 7
            },
            {
                speed: 34.5387629556850,
                track: 21
            },
            {
                speed: 33.73553591020395,
                track: 23
            },
            {
                speed: 30.12101420553924,
                track: 38
            },
            {
                speed: 34.13714943294448,
                track: 58
            }
        ],
        time: 737,
        track: 1
    },
    {
        milestone: [
            {
                speed: 31.57794333764343,
                track: 0
            },
            {
                speed: 34.00701590207754,
                track: 5
            },
            {
                speed: 32.79247961986049,
                track: 31
            },
            {
                speed: 34.41186132948322,
                track: 34
            },
            {
                speed: 30.36340705542638,
                track: 46
            },
            {
                speed: 32.79247961986049,
                track: 58
            }
        ],
        time: 719,
        track: 2
    },
    {
        milestone: [
            {
                speed: 33.39221734987235,
                track: 0
            },
            {
                speed: 33.78506696575320,
                track: 7
            },
            {
                speed: 32.99936773399150,
                track: 13
            },
            {
                speed: 30.64227003870639,
                track: 27
            },
            {
                speed: 31.82081888634895,
                track: 30
            },
            {
                speed: 33.39221734987235,
                track: 58
            }
        ],
        time: 713,
        track: 3
    },
    {
        milestone: [
            {
                speed: 30.60706305075154,
                track: 0
            },
            {
                speed: 32.19704035208928,
                track: 5
            },
            {
                speed: 32.59453467742371,
                track: 7
            },
            {
                speed: 29.81207440008266,
                track: 26
            },
            {
                speed: 34.18451197876146,
                track: 35
            },
            {
                speed: 32.59453467742371,
                track: 58
            }
        ],
        time: 723,
        track: 4
    },
    {
        milestone: [
            {
                speed: 32.29939432894246,
                track: 0
            },
            {
                speed: 37.02613496244624,
                track: 17
            },
            {
                speed: 31.51160422335850,
                track: 32
            },
            {
                speed: 29.54212895939859,
                track: 50
            },
            {
                speed: 30.72381411777454,
                track: 57
            },
            {
                speed: 32.29939432894246,
                track: 58
            }
        ],
        time: 712,
        track: 5
    }
]

function getRunning(mainIndex, childIndex)
{
    --mainIndex;

    --childIndex;

    var ret = [];

    for(let i=0;i<6;++i)
    {
        if(i == 3)
        {
            var data = running[mainIndex];

            data.track = i;

            ret.push(data);
        }
        else if(i == 5)
        {
            var data = running[childIndex];

            data.track = i;

            ret.push(data);
        }
        else if(i == mainIndex)
        {
            var data = running[3];

            data.track = mainIndex;

            ret.push(data);
        }
        else if(i == childIndex)
        {
            var data = running[5];

            data.track = childIndex;

            ret.push(data);
        }
        else
        {
            var data = running[i];

            ret.push(data);
        }
    }

    return ret;
}

// 进入房间
function join_room (conn, args)
{
    room.players.push({conn: sockManager.length});

    sockManager.push(conn);

    conn.sendText(JSON.stringify({
        method: "join.room.res",
        data: room
    }));
}

// 下注
function down_bet (conn, args)
{
    const {uid, room} = session;

    uid = 10000;

    if(room == undefined || uid == undefined)
    {
        console.log(APP_NAME, "未登入房间");
        
        return;
    }

    if(room.state != STATE_DOWN_BET)
    {
        console.log(APP_NAME, "非下注状态");
        
        return;
    }

    for (const iter of args.data) 
    {
        const {index, chips} = iter;

        console.log(iter);

        if(index == undefined || chips == undefined)
        {
            console.log("下注 参数不对");

            return;
        }

        if(room.bets[uid] == undefined) room.bets[uid] = {};
    
        if(room.bets[uid][index] == undefined) room.bets[uid][index] = chips;
        
        else room.bets[uid][index] += chips;
    }

    conn.sendText(JSON.stringify({
        method: "down.bet.notify",
        data: args.data,
        uid: uid
    }));
}

// 清除下注
function down_bet (conn, args)
{
    const {uid, room} = session;

    uid = 10000;

    if(room == undefined || uid == undefined)``
    {
        console.log(APP_NAME, "未登入房间");
        
        return;
    }

    var room = roomManager[session.room];

    if(room.state == STATE_DOWN_BET && room.bets[conn])
    {
        room.bets[conn] = {};
    }
}

// 删除玩家
function remove_player(conn, aegs)
{
    if(conn.uid)
    {
        const buf = JSON.stringify({
            method: "down.bet.notify",
            data: args.data,
            uid: uid
        });

        for (const player of conn.room.players)
        {
            if(player && player.uid != conn.uid)
            {
                var conn = sockManager[player.conn];

                conn.sendText(buf);
            }
        }

        delete conn.room.players[conn.seat];

        delete conn.seat;

        delete conn.room;

        delete conn.uid;

        delete sockManager[conn.uid];
    }
}

// 改变状态[开奖](room)
function change_state_result(room)
{
    console.log("开奖");

    room.state = STATE_RESULT

    room.dt = 0;

    var result = JSON.stringify(
        {
            method: "change.state",
            state: STATE_RESULT,
            raceData: {
                running: [...getRunning(1, 5)]
            },
            stageTime: 33000
        }
    );
    
    for(player of room.players)
    {
        if(player.conn) sockManager[player.conn].sendText(result);

        console.log(player.conn)
    }
}

// 改变状态[结束](room)
function change_state_over (room)
{
    console.log("结束");

    room.state = STATE_OVER

    room.dt = 0;

    var result = JSON.stringify({
        method: "change.state",
        state: STATE_OVER,
        awardDatas: [
            {
                award: 860,
                betMap: 15
            }
        ],
        shoeInfos: [],
        stageTime: 12000
    });
    
    for(player of room.players)
    {
        if(player.conn) sockManager[player.conn].sendText(result);
    }
}

// 改变状态[开始下注](room)
function change_state_over (room)
{
    console.log("开始下注");

    room.state = STATE_DOWN_BET

    room.dt = 0;

    var result = JSON.stringify(
        {
            method: "change.state",
            state: STATE_DOWN_BET,
            betRate: {
                couple: [
                    157.40,
                    50.40,
                    43.50,
                    37.70,
                    27.30,
                    35.0,
                    30.20,
                    26.20,
                    19.0,
                    9.699999999999999,
                    8.50,
                    6.10,
                    7.30,
                    5.30,
                    4.60
                ],
                single: [
                    20.40,
                    14.30,
                    4.90,
                    4.30,
                    3.80,
                    2.90
                ]
            },
            horseInfos: [
                {
                    history: [
                        6,
                        6,
                        5,
                        6,
                        6
                    ],
                    lv: 5,
                    name: '龍之星',
                    track: 0
                },
                {
                    history: [
                        6,
                        4,
                        5,
                        1,
                        6
                    ],
                    lv: 5,
                    name: '傳奇',
                    track: 1
                },
                {
                    history: [
                        5,
                        5,
                        3,
                        2,
                        6
                    ],
                    lv: 2,
                    name: '川河尊駒',
                    track: 2
                },
                {
                    history: [
                        5,
                        4,
                        5,
                        3,
                        1
                    ],
                    lv: 4,
                    name: '中華之光',
                    track: 3
                },
                {
                    history: [
                        5,
                        1,
                        5,
                        1,
                        4
                    ],
                    lv: 3,
                    name: '彩福',
                    track: 4
                },
                {
                    history: [
                        1,
                        4,
                        4,
                        2,
                        4
                    ],
                    lv: 1,
                    name: '勝得威',
                    track: 5
                }
            ],
            stageTime: 25000
        }
    );
    
    for(player of room.players)
    {
        if(player.conn) sockManager[player.conn].sendText(result);
    }
}   

let method = function()
{       

}

method.prototype.message = (conn, msg)=>
{
    const json = JSON.parse(msg);

    if(json)
    {
        switch(json.method)
        {
            case "join.room.req" : { join_room(conn, json); break; }
            case "down.bet.req": { down_bet(conn, json); break; }
            case "clear.bet.req": { clear_bet(conn, json); break; }
            default: break;
        }
    }
}

method.prototype.close = (conn)=>
{
    remove_player(conn);
}

method.prototype.error = (conn)=>
{
    remove_player(conn);
}

method.prototype.frame = (dt)=>
{   
    room.dt += dt;

    if(room.state == STATE_DOWN_BET && room.dt >= 25) change_state_result(room);
    else if(room.state == STATE_RESULT && room.dt >= 45) change_state_over(room);
    else if(room.state == STATE_OVER && room.dt >= 12) change_state_start(room);
}

/*public method*/

module.exports = {
    id: "method",
    func: method
};