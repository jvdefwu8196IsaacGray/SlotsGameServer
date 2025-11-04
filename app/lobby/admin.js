require('./const.js');

const db = require("./db.js")

const express = require("express");

const body = require('body-parser');

const session = require('express-session');

const app = express();

app.use(body.json());

app.use(body.urlencoded({ extended: true }));

app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:  60000 * 60,secure: false}
}));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.listen(8080);

function uncode_args(req)
{
    if(req.body.xxtea)
    {
        let buf1 = Buffer.from(req.body.xxtea, 'hex').toString('ascii');

        let buf2 = Buffer.from(buf1, 'base64').toString();

        return JSON.parse(buf2);
    }

    return {};
}

app.post('/api/login', async(req, res) =>
{ 
    const {username, password} = uncode_args(req);

    var conn;

    try
    {
        conn = await db.getConn();

        var result = await db.query(conn, `select * from dmg_users where username=${conn.escape(username)} limit 1`);

        await db.release(conn);

        if(result.length != 1)
        {
            res.json(
                {
                    code: 10001,
                    message: "登录失败, 该账号不存在..."
                }
            );
        }

        const user = result[0];

        user.auth = 2;

        // if(user.auth != 2)
        // {
        //     return res.json(
        //         {
        //             code: 10001,
        //             message: "该账号无后台权限..."
        //         }
        //     );
        // }

        if(user.password == password)
        {
            req.session.username = username;

            req.session.auth = true;

            res.json
            (
                {
                    code: 10000,
                    message: "登录成功..."
                }
            );
        }
        else
        {
            res.json
            (
                {
                    code: 10001,
                    message: "登录失败, 您输入的密码错误..."
                }
            );
        }
    }
    catch(err)
    {
        if(conn) await db.release(conn);

        logger.error(err);
        
        res.json
        ({
            code: 10001,
            
            message: "获取数据失败..."
        });
    }
});

app.post('/api/admin/index', async(req, res) =>
{ 
    var args = uncode_args(req);

    if(!req.session.auth)
    {
        return res.json
        ({
            code: 10004,
            message: "用户登录已过期,请重新登录...!"
        });
    }

    var conn;

    try
    {
        conn = await db.getConn();

        var result = await db.query(conn, `select count(id) as v1,sum(totalRecharge) as v3,sum(totalCash) as v4 from dmg_users where auth!=2`);

        var result2 = await db.query(conn, "select sum(score) as v5 from dmg_pays where to_days(time_pay) = to_days(now())");

        var result3 = await db.query(conn, "select sum(score) as v6 from dmg_cashs where to_days(time_cash) = to_days(now())");

        await db.release(conn);

        res.json
        ({
            code: 10000,
            
            v1: result[0].v1,

            v2: sockManager.length,

            v3: result[0].v3,

            v4: result[0].v4,

            v5: result2[0].v5 || 0,

            v6: result3[0].v6 || 0,

            message: "加载成功..."
        });
        
    }
    catch(err)
    {
        if(conn) await db.release(conn);

        logger.error(err);
        
        res.json
        ({
            code: 10001,
            
            message: "获取数据失败..."
        });
    }
});

app.post('/api/admin/users', async(req, res) =>
{ 
    var {page, size, order, uid ,like} = uncode_args(req);

    var conn;

    console.log(page, size, order, uid ,like);

    try
    {
        page = --page * size;

        conn = await db.getConn();

        var where = "";

        var key = "id,username,phone,nickname,chips,totalRecharge,totalCash,vipLevel,auth";

        if(uid || like.length)
        {
            where = "where ";

            if(uid)
            {
                uid = conn.escape(uid);

                where += like.length ?  `id=${uid} or` : `id=${uid}`;
            }

            if(like.length)
            {
                like = conn.escape("%" + like + "%");

                where += `username like ${like} or phone like ${like} or nickname like ${like}`;
            }
        }

        var result = await db.query(conn, `select count(id) as count from dmg_users ${where}`);

        var result2 = await db.query(conn, `select ${key} from dmg_users ${where} order by ${order} limit ${page},${size}`);

        await db.release(conn);

        res.json
        ({
            code: 10000,

            data: result2,

            total: result[0].count,

            message: "获取数据成功..."
        });
        
    }
    catch(err)
    {
        if(conn) await db.release(conn);

        logger.error(err);
        
        res.json
        ({
            code: 10001,
            
            message: "获取数据失败..."
        });
    }
})

app.post('/api/admin/pays', async(req, res) =>
{ 
    console.log(req.session.username)

    const {page, size, order, uid ,like} = uncode_args(req);

    var conn;

    try
    {
        page = --page * size;

        conn = await db.getConn();

        var key = "t2.id,uid,username,nickname,phone,score,order_pay,order_shop,time_create,time_pay,platform,status";

        if(uid.length || like.length)
        {
            var where = "where ";

            if(uid)
            {
                uid = conn.escape(uid);

                where += like.length ?  `t1.id=${uid} or` : `t1.id=${uid}`;
            }

            if(like.length)
            {
                like = conn.escape("%" + like + "%");

                where += `username like ${like} or phone like ${like} or nickname like ${like}`;
            }

            var result = await db.query(conn, `select count(t1.id) from dmg_users as t1 left join dmg_pays as t2 on t1.id=t2.uid ${where}`);

            var result2 = await db.query(conn, `select ${key} from dmg_users as t1 left join dmg_pays as t2 on t1.id=t2.uid ${where} order by ${order} limit ${page},${size}`);
    
            await db.release(conn);
    
            res.json
            ({
                code: 10000,
    
                data: result2,
    
                total: result[0].count,
    
                message: "获取数据成功..."
            });
        }
        else
        {
            var result = await db.query(conn, `select count(id) as count from dmg_pays`);

            var result2 = await db.query(conn, `select ${key} from dmg_pays as t2 left join dmg_users as t1 on t1.id=t2.uid order by ${order} limit ${page},${size}`);
    
            await db.release(conn);
    
            res.json
            ({
                code: 10000,
    
                data: result2,
    
                total: result[0].count,
    
                message: "获取数据成功..."
            });
        }
        
    }
    catch(err)
    {
        if(conn) await db.release(conn);

        logger.error(err);
        
        res.json
        ({
            code: 10001,
            
            message: "获取数据失败..."
        });
    }
})

app.post('/api/admin/cashs', async(req, res) =>
{ 
    const {page, size, order, uid ,like} = uncode_args(req);

    var conn;

    try
    {
        page = --page * size;

        conn = await db.getConn();

        var key = "t2.id,uid,username,nickname,phone,score,time_create,time_cash,status";

        if(uid.length || like.length)
        {
            var where = "where ";

            if(uid)
            {
                uid = conn.escape(uid);

                where += like.length ?  `id=${uid} or` : `id=${uid}`;
            }

            if(like.length)
            {
                like = conn.escape("%" + like + "%");

                where += `username like ${like} or phone like ${like} or nickname like ${like}`;
            }

            var result = await db.query(conn, `select count(t1.id) from dmg_users as t1 left join dmg_cashs as t2 on t1.id=t2.uid ${where}`);

            var result2 = await db.query(conn, `select ${key} from dmg_users as t1 left join dmg_cashs as t2 on t1.id=t2.uid ${where} order by ${order} limit ${page},${size}`);
    
            await db.release(conn);
    
            res.json
            ({
                code: 10000,
    
                data: result2,
    
                total: result[0].count,
    
                message: "获取数据成功..."
            });
        }
        else
        {
            var result = await db.query(conn, `select count(id) as count from dmg_cashs`);

            var result2 = await db.query(conn, `select ${key} from dmg_cashs as t2 left join dmg_users as t1 on t1.id=t2.uid order by ${order} limit ${page},${size}`);
    
            await db.release(conn);
    
            res.json
            ({
                code: 10000,
    
                data: result2,
    
                total: result[0].count,
    
                message: "获取数据成功..."
            });
        }
        
    }
    catch(err)
    {
        if(conn) await db.release(conn);

        logger.error(err);
        
        res.json
        ({
            code: 10001,
            
            message: "获取数据失败..."
        });
    }
})

app.post('/api/admin/historys', async(req, res) =>
{ 
    const {page, size, order, uid ,like} = uncode_args(req);

    var conn;

    try
    {
        page = --page * size;

        conn = await db.getConn();

        var key = "t2.id,uid,kid,chips,comment,time";

        if(uid || like.length)
        {
            var where = "where ";

            if(uid)
            {
                uid = conn.escape(uid);

                where += like.length ?  `id=${uid} or` : `id=${uid}`;
            }

            if(like.length)
            {
                like = conn.escape("%" + like + "%");

                where += `username like ${like} or phone like ${like} or nickname like ${like}`;
            }

            var result = await db.query(conn, `select count(t1.id) from dmg_users as t1 left join dmg_historys as t2 on t1.id=t2.uid ${where}`);

            var result2 = await db.query(conn, `select ${key} from dmg_users as t1 left join dmg_historys as t2 on t1.id=t2.uid ${where} order by ${order} limit ${page},${size}`);
    
            await db.release(conn);
    
            res.json
            ({
                code: 10000,
    
                data: result2,
    
                total: result[0].count,
    
                message: "获取数据成功..."
            });
        }
        else
        {
            var result = await db.query(conn, `select count(id) as count from dmg_historys`);

            var result2 = await db.query(conn, `select ${key} from dmg_historys order by ${order} limit ${page},${size}`);
  
            await db.release(conn);
    
            res.json
            ({
                code: 10000,
    
                data: result2,
    
                total: result[0].count,
    
                message: "获取数据成功..."
            });
        }
        
    }
    catch(err)
    {
        if(conn) await db.release(conn);

        logger.error(err);
        
        res.json
        ({
            code: 10001,
            
            message: "获取数据失败..."
        });
    }
})

app.post('/api/admin/results', async(req, res) =>
{ 
    const {page, size, order, uid ,like} = uncode_args(req);

    var conn;

    try
    {
        page = --page * size;

        conn = await db.getConn();

        if(uid.length || like.length)
        {
            var where = "where ";

            if(uid)
            {
                uid = conn.escape(uid);

                where += like.length ?  `id=${uid} or` : `id=${uid}`;
            }

            if(like.length)
            {
                like = conn.escape("%" + like + "%");

                where += `username like ${like} or phone like ${like} or nickname like ${like}`;
            }

            var result = await db.query(conn, `select count(t2.id) from dmg_users as t1 left join dmg_results_user as t3 on t1.id=t3.uid left join dmg_results as t2 on t3.rid=t2.id ${where}`);

            var result2 = await db.query(conn, `select t2.id,t2.kid,t2.result from dmg_users as t1 left join dmg_results_user as t3 on t1.id=t3.uid left join dmg_results as t2 on t3.rid=t2.id ${where} order by ${order} limit ${page},${size}`);
    
            await db.release(conn);
    
            res.json
            ({
                code: 10000,
    
                data: result2,
    
                total: result[0].count,
    
                message: "获取数据成功..."
            });
        }
        else
        {
            var result = await db.query(conn, `select count(id) as count from dmg_results`);

            var result2 = await db.query(conn, `select * from dmg_results as t2 order by ${order} limit ${page},${size}`);
    
            await db.release(conn);
    
            res.json
            ({
                code: 10000,
    
                data: result2,
    
                total: result[0].count,
    
                message: "获取数据成功..."
            });
        }
        
    }
    catch(err)
    {
        if(conn) await db.release(conn);

        logger.error(err);

        res.json
        ({
            code: 10001,

            message: "获取数据失败..."
        });
    }
})

app.post('/api/admin/errors', async(req, res) =>
{ 
    const {page, size, order, like} = uncode_args(req);

    var conn;

    try
    {
        page = --page * size;

        var where = "";

        if(like.length)
        {
            where = "where ";

            like = conn.escape("%" + like + "%");

            where += `username like ${like} or phone like ${like} or nickname like ${like}`;
        }

        conn = await db.getConn();

        var result = await db.query(conn, `select count(id) as count from dmg_errors ${where}`);

        var result2 = await db.query(conn, `select * from dmg_errors ${where} order by ${order} limit ${page},${size}`);

        await db.release(conn);

        res.json
        ({
            code: 10000,

            data: result2,

            total: result[0].count,

            message: "获取数据成功..."
        });
        
    }
    catch(err)
    {
        if(conn) await db.release(conn);

        logger.error(err);

        res.json
        ({
            code: 10001,
            
            message: "获取数据失败..."
        });
    }
})

app.post('/api/admin/user/lock', async(req, res) =>
{ 
    const args = uncode_args(req);

    const {uid, lock} = uncode_args(req);

    var conn;

    var auth = lock ? 1 : 0;

    try
    {
        conn = await db.getConn();

        var result = await db.query(conn, `update dmg_users set auth=${auth} where id=${uid} && auth != 2`);

        await db.release(conn);

        if(lock)
        {
            var conn = sockManager[uid];
            
            if(conn) conn.close();
        }

        res.json
        ({
            code: 10000,
            
            message: "操作成功..."
        });
    }
    catch(err)
    {
        if(conn) await db.release(conn);

        logger.error(err);
        
        res.json
        ({
            code: 10001,
            
            message: "获取数据失败..."
        });
    }
});

app.post('/api/admin/user/info', async(req, res) =>
{ 
    const args = uncode_args(req);

    const {uid} = uncode_args(req);

    try
    {
        conn = await db.getConn();

        const key = "id,username,phone,nickname,chips,cheat,totalRecharge,canCash,totalCash,pid,exp,vipLevel,vipTime,registerTime,registerIp,lastLoginTime,lastLoginIp,auth";    

        const result = await db.query(conn, `select ${key} from dmg_users where id=${uid}`);

        await db.release(conn);

        if(result.length == 0)
        {
            res.json
            ({
                code: 10001,

                message: "获取数据失败..."
            });

            return;
        }

        res.json
        ({
            code: 10000,

            data: result[0],

            message: "获取数据成功..."
        });
    }
    catch(err)
    {
        if(conn) await db.release(conn);

        logger.error(err);
        
        res.json
        ({
            code: 10001,
            
            message: "获取数据失败..."
        });
    }
});

app.post('/api/admin/user/score', async(req, res) =>
{ 
    const {uid, chips} = uncode_args(req);

    try
    {
        conn = await db.getConn();

        const result = await db.query(conn, `update dmg_users set chips=chips+${chips} where id=${uid}`);

        await db.release(conn);

        var user = userManager[uid];

        if(user)
        {
            user.chips += chips;

            var conn = sockManager[uid];
            
            if(conn)
            {
                conn.sendText(({
                    "method" : "chips.change.notify",
                    chips: user.chips
                }));
            }
        }

        res.json
        ({
            code: 10000,

            message: "操作成功..."
        });
    }
    catch(err)
    {
        if(conn) await db.release(conn);

        logger.error(err);
        
        res.json
        ({
            code: 10001,
            
            message: "获取数据失败..."
        });
    }
});

app.post('/api/admin/error/push', async(req, res) =>
{    
    var error = req.body.data;

    // if(error)
    // {
    //     var conn;

    //     try
    //     {
    //         conn = await db.getConn();

    //         error = conn.escape(Buffer.from(error, 'base64').toString());

    //         const result = await db.query(conn, `insert into dmg_errors(error) value(${error}) on DUPLICATE key update count=count+1`);

    //         await db.release(conn);

    //         res.end(200);
    //     }
    //     catch(err)
    //     {
    //         if(conn) await db.release(conn);

    //         res.end(200);
    //     }

    //     return;
    // }

    res.end();
});
