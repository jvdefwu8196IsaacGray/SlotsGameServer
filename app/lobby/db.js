const mysql = require("mysql");

// const db = mysql.createPool({
//     host     : 'rm-wz995i1zo270aa9h3.mysql.rds.aliyuncs.com',
//     user     : 'root',
//     password : 'Junyu123',
//     database : 'dmg',
//     connectionLimit: 5,
//     timezone: "08:00"
// });

const db = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'dmg',
    connectionLimit: 5,
    timezone: "08:00"
});

exports.getConn = function(conn, sql)
{
    return new Promise((resolve, reject)=>{

        db.getConnection((err, conn) => {
            if(err) return reject(err);
            resolve(conn);
        })

    });
}

exports.beginTransaction = function(conn)
{
    return new Promise((resolve, reject)=>{

        conn.beginTransaction((err)=>{

            if(err) return reject(err);

            resolve(true);
        })

    });
}

exports.query = function(conn, sql)
{
    return new Promise((resolve, reject)=>{

        conn.query(sql, (err, result)=>{

            if(err) return reject(err);

            resolve(result);
        })

    });
}

exports.queryArray = function(conn, ary, sql)
{
    return new Promise((resolve, reject)=>{

        conn.query(sql, ary, (err, result)=>{

            if(err) return reject(err);

            resolve(result);
        })

    });
}

exports.commit = function(conn)
{
    return new Promise((resolve, reject)=>{

        conn.beginTransaction((err)=>{

            if(err) return reject(err);

            resolve();
        })

    });
}

exports.release = function(conn, rollback)
{
    return new Promise((resolve, reject)=>{

        if(conn && rollback)
        {
            conn.rollback((err)=>{
                conn.release();
                err ? reject() : resolve(err);
            })
    
            return;
        }
    
        if(conn) conn.release();   

        resolve();
        
    });
}

