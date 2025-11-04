if(global.rpc) return; global.rpc = true;

require("./const")

const db = require("./db.js");

const grpc = require('grpc');

const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
    "./rpc.proto",
    {
        keepCase: true,
        longs: Number,
        enums: String,
        defaults: true,
        oneofs: true
    }
);

//-----------------------------------RPC功能-----------------------------------
   
// 跑马灯
function sendMarqueen(rpc, cb)
{
    const {message} = rpc.request;

    for(sock of socketManager) conn.sendText(message);

    cb && cb(null, {code: 10000, message: "操作成功..."})
}

// 验证token登录
function checkToken(rpc, cb)
{
    const {uid, token} = rpc.request;

    const user = userManager[uid];

    if(user)
    {
        if(user.token == token) return cb(null, {
            code: 10000, message: "登录成功..",
            chips: user.chips,
            nickname: user.nickname,
            vipLevel: user.vipLevel,
        });

        else return cb(null, {code: 10001, message: "登录验证失败.."});
    }

    cb(null, {code: 10001, message: "登录失败, 该用户未登录大厅或不存在.."});
}

// 增加金钱[减钱为负] (适合拉霸
async function addChipsLaba(rpc, cb)
{
    const {uid, kid, chips, rechips, message} = rpc.request;

    const user = userManager[uid];

    if(chips < 0 && (user.chips + chips < 0)) return cb(null, {code: 10002, message: "金钱不足与扣除..."});

    var conn, rollback;

    try
    {
        conn = await db.getConn();

        rollback = await db.beginTransaction(conn);

        const money = chips + rechips;

        await db.query(conn, chips < 0 ? `update dmg_users set chips=chips+${money} where id=${uid} && chips+${money}>0` : `update dmg_users set chips=chips+${money} where id=${uid}`);
        await db.query(conn, `insert into dmg_historys(uid, kid, chips, comment) value(${uid}, ${kid}, ${chips}, '押注')`);
        if(rechips > 0) await db.query(conn, `insert into dmg_historys(uid, kid, chips, comment) value(${uid}, ${kid}, ${rechips}, '中奖')`);
        await db.commit(conn);
        await db.release(conn);

        let user = userManager[uid];

        if(user) user.chips += money;

        cb(null, {code: 10000})

        if(message) sendMarqueen(rpc);
    }
    catch(err)
    {
        logger.warn(err);
        cb(null, {code: 10002, message: "操作异常..."});
        await db.release(conn, rollback);
    }
}

// 增加金钱[减钱为负] （同步刷新
async function addChipsSync(rpc, cb)
{
    const {uid, kid, chips, comment, message} = rpc.request;
    
    const user = userManager[uid];

    if(chips < 0 && (user.chips + chips < 0)) return cb(null, {code: 10002, message: "金钱不足与扣除..."});

    var conn, rollback;

    try
    {
        conn = await db.getConn();

        rollback = await db.beginTransaction(conn);

        await db.query(conn, chips < 0 ? `update dmg_users set chips=chips+${chips} where id=${uid} && chips+${chips}>0` : `update dmg_users set chips=chips+${chips} where id=${uid}`);
        await db.query(conn, `insert into dmg_historys(uid, kid, chips, comment) value(${uid}, ${kid}, ${chips}, '${comment}')`);
        await db.commit(conn);
        await db.release(conn);

        syncManager[uid] = true;

        let user = userManager[uid];

        if(user) user.chips += chips;

        cb(null, {code: 10000})

        if(message) sendMarqueen(rpc);

    }
    catch(err)
    {
        logger.warn(err);
        cb(null, {code: 10002, message: "操作异常..."});
        await db.release(conn, rollback);
    }
}

// 增加金钱 (延迟刷新
async function addChipsDelay(rpc, cb)
{
    const {kid, data, comment} = rpc.request;

    var conn, rollback;

    try
    {
        conn = await db.getConn();

        rollback = await db.beginTransaction(conn);

        var values = [];

        for(let i=0;i<data.length;++i)
        {   
            const {uid, chips} = data[i];

            values.push([uid, kid, chips, comment]);
            
            await db.query(conn, `update dmg_users set chips=chips+${chips} where id=${uid}`);
        };
        
        await db.queryArray(conn, [values], `insert into dmg_historys(uid, kid, chips, comment) values ?`);

        await db.commit(conn);

        await db.release(conn);

        data.forEach((itor) => {
            const {uid, chips} = itor;
            if(changeManager[uid] == undefined) changeManager[uid] = [];
            changeManager[uid].push({
                kid: kid,
                chips: chips
            })
        });

        cb(null, {code: 10000})
    }
    catch(err)
    {
        logger.warn(err);
        cb(null, {code: 10002, message: "操作异常..."});
        await db.release(conn, rollback);
    }
}

// 同步所有玩家信息到客户端和RPC客户端
function changeSync(rpc, cb)
{
    const {players} = rpc.request;

    players.forEach((uid)=>
    {
        var user = userManager[uid];

        var changes = changeManager[uid];

        if(user && changes)
        {
            changes.forEach((v) => {
                user.chips += v.chips;
            });

            delete changeManager[uid];

            syncManager[uid] = true;
        }
    });

    cb(null, {code: 10000});
}

// 交换服务器数据
function serviceChange(call)
{
    const queue = [/*${uid}, ${kid}, ${chips}*/];

    call.on("data", (args) =>{

        const {appport, appname} = args;

        appManager[appname] = {
            appport: appport,
            appname: appname,
        };

    });
    
    setInterval(()=>{
        appManager = {};
        call.write({

        });
    }, 5000);

}

// 取出机器人
function popRobot(rpc, cb)
{
    var {count} = rpc.request;

    var result = [];

    while(robotManager.length > 0 && count > 0)
    {
        const robot = robotManager.shift();

        result.push(robot);

        --count;
    }

    cb(null, {code: 10000, robots: result});
}

// 返还机器人
function pushRobot(rpc, cb)
{
    const {robots} = rpc.request;

    for(let i=0;i<robots.length;++i) robotManager.push(robots.shift());

    cb(null, {code: 10000})
}

//-----------------------------------RPC功能-----------------------------------

(async function()
{
    var conn;

    try
    {
        conn = await db.getConn();

        var result = await db.query(conn, `select id,chips,vipLevel,nickname from dmg_users where auth=2`);

        for(let i=0;i<result.length;++i)
        {
            const user = {
                uid: result[i].id,
                chips: result[i].chips,
                vipLevel: result[i].vipLevel,
                nickname: result[i].nickname
            };

            robotManager.push(user);

            userManager[user.uid] = user;
        }
    
        await db.release(conn); 
    }
    catch(err)
    {
        await db.release(conn);
        
        logger.error("初始化AI系统错误...", err);
    }

    const proto = grpc.loadPackageDefinition(packageDefinition).rpc;

    const server = new grpc.Server();

    server.addService(proto.RouteGuide.service, {
        sendMarqueen: sendMarqueen,
        addChipsSync: addChipsSync,
        addChipsLaba: addChipsLaba,
        addChipsDelay: addChipsDelay,
        checkToken: checkToken,
        changeSync: changeSync,
        popRobot: popRobot,
        pushRobot: pushRobot
    });

    server.bind('0.0.0.0:5000', grpc.ServerCredentials.createInsecure());
    
    server.start();

})()