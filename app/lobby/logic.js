require('./const.js');
require("./rpc-server");
const db = require("./db.js");
const admin = require('./admin.js');
const { random } = require('../../publics/global.js');
const uuid = require('node-uuid').v1;

async function login(sock, args)
{    
    const {username, password} = args;

    var conn;

    try 
    {
        conn = await db.getConn();

        let result = await db.query(conn, `select * from dmg_users where username=${conn.escape(username)} limit 1`);

        await db.release(conn);

        if(result.length != 1)
        {
            return sock.sendText(JSON.stringify(
                {
                    method: "login.res",
                    code: 10001,
                    message: "登录失败, 该账号不存在..."
                }
            ));
        }

        const user = result[0];

        if(user.password == password)
        {
            user.token = uuid();

            sock.uid = user.id;

            sockManager[user.id] = sock;

            userManager[user.id] = user;

            console.log(user.id)

            let temp = {...user};

            delete temp.password;

            sock.sendText(JSON.stringify(
                {
                    method: "login.res",
                    code: 10000,
                    message: "登录成功...",
                    user: temp
                }
            ));
        }
        else
        {
            return conn.sendText(JSON.stringify(
                {
                    method: "login.res",
                    code: 10001,
                    message: "登录失败, 您输入的密码错误..."
                }
            ));
        }
    } 
    catch (error) 
    {
        logger.error(error);

        await db.release(conn);

        return sock.sendText(JSON.stringify(
            {
                method: "login.res",
                code: 10001,
                message: "未知错误..."
            }
        ));
    }
}

async function register(sock, args)
{ 
    const {username, password} = args;

    var conn;

    try {
        
        conn = await db.getConn();

        let result = await db.query(conn, `select * from dmg_users where username=${username} limit 1`);

        if(result.length == 1)
        {
            return sock.sendText(JSON.stringify(
                {
                    method: "register.res",
                    code: 10001,
                    message: "账号已存在..."
                }
            ));

            return;
        }

        await db.query(conn, `insert into dmg_users(username, password) value ('${username}', '${password}')`);

        await db.release(conn);
    } 
    catch (error) 
    {
        await db.release(conn);

        return sock.sendText(JSON.stringify(
            {
                method: "register.res",
                code: 10001,
                message: "未知错误..."
            }
        ));
    }

}

async function testuser()
{
    var conn = await db.getConn();

    for(let i=0;i<100;++i)
    {
        let username = "admin" + i;

        let password = "admin";

        let nickname = "测试机器" + i;

        await db.query(conn, `insert into dmg_users(username, password, nickname) value ('${username}', '${password}', '${nickname}')`);
    }

    await db.release(conn);
}

function sendCode(sock, args)
{ 

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
        console.log(json.method);

        switch(json.method)
        {
            // game
            case "login.req" : { login(sock, json); break; }
            case "register.req": { register(sock, json); break; }
            case "sendCode.req": { sendCode(sock, json); break; }
            default: return logger.error("not exits method...");
        }
    }
}

method.prototype.close = (sock)=>
{
    if(sock.uid) delete sockManager[sock.uid];
}

method.prototype.error = (conn)=>
{
    if(conn.uid) delete sockManager[conn.uid];
}

method.prototype.frame = (dt)=>
{   
    Object.keys(syncManager).forEach((uid) => {

        const sock = sockManager[uid];

        const user = userManager[uid];

        delete syncManager[uid];

        if(sock && user) sock.sendText(JSON.stringify({
            method: "chips.change.notify",
            chips: user.chips
        }));
        
    });

    // 随机公告

    const date = new Date();

    if(robotManager && robotManager.length > 0 && random(0, 100) >= 85 && random(0, 100) <= (date.getHours() * 2))
    {
        const nickname = robotManager[random(0, robotManager.length-1)].nickname;

        var buffer = {
            method: "marqueen",
            message: ""
        };
      
        const chips = Math.ceil(random(128, random(256, 1024)) * 100);
    
        let r = 0;

        const t = random(0, 10000);

        if(t < 500) r = random(1, 2);
        
        else if(t < 1000) r = random(3, 7);

        switch(r)
        {
            case 0: 
            {
                if(random(0, 1) == 0)
                {
                    let fish;

                    let t = random(0, 2);
    
                    switch(t)
                    {
                        case 0: {fish = "黄金鲨"; break;}
                        case 1: {fish = "聚宝盆"; break;}
                        case 2: {fish = "彩金龙"; break;}
                    }
    
                    buffer.message =  `恭喜! ${nickname} 在 彩金捕鱼 中捕获 ${fish} 获得 ${chips} 筹码`; break;
                }
                else
                {
                    let type;

                    let t = random(0, 2);
    
                    switch(t)
                    {
                        case 0: {type = "急速中奖"; break;}
                        case 1: {type = "幸运大奖"; break;}
                        case 2: {type = "吉利巨奖"; break;}
                    }
    
                    buffer.message =  `恭喜! ${nickname} 在 彩金捕鱼 获得 ${type} 彩金 共 ${chips} 筹码`; break;
                }

            }
            case 1: 
            {
                let type;

                let t = random(0, 4);
    
                switch(t)
                {
                    case 0: {type = "七十二变"; break;}
                    case 1: {type = "角色全中"; break;}
                    case 2: {type = "仙女散花"; break;}
                    case 3: {type = "纵横四海"; break;}
                    case 4: {type = "四大天王"; break;}
                }

                buffer.message =  `恭喜! ${nickname} 在 飞天西游 奇遇 ${type} 获得 ${chips} 筹码`; break;
            }
            case 2: 
            {
                let type;

                let t = random(0, 1);
    
                switch(t)
                {
                    case 0: {type = "大三元"; break;}
                    case 1: {type = "大四喜"; break;}
                }

                buffer.message =  `恭喜! ${nickname} 在 森林舞会 进入 ${type} 获得 ${chips} 筹码`; break;
            }
            case 3: {buffer.message =  `恭喜! ${nickname} 在 吉利财神 中 进入免费游戏 获得 ${chips} 筹码`; break;}
            case 4: {buffer.message =  `恭喜! ${nickname} 在 狮王争霸 中 进入免费游戏 获得 ${chips} 筹码`; break;}
            case 5: {buffer.message =  `恭喜! ${nickname} 在 包青天 中 进入免费游戏 获得 ${chips} 筹码`; break;}
            case 6: {buffer.message =  `恭喜! ${nickname} 在 埃及王 中 进入免费游戏 获得 ${chips} 筹码`; break;}
            case 7: {buffer.message =  `恭喜! ${nickname} 在 埃及艳后 中 进入免费游戏 获得 ${chips} 筹码`; break;}
        }

        var buf = JSON.stringify(buffer);

        server.connections.forEach((sock)=>{
            sock.sendText(buf); 
        });
    }
}

/*public method*/

module.exports = {
    id: "method",
    func: method
};

