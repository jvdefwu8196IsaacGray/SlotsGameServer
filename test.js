// var express = require("express");

// var body = require('body-parser');

// var fs = require('fs');

// var app = express();

// app.use(body.json());

// app.use(body.urlencoded({ extended: true }));

// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Methods', '*');
//     res.header('Content-Type', 'application/json;charset=utf-8');
//     next();
// });

// app.listen(8080);

// app.get('/', function (req, res) 
// {
//     if(isQQ(req.headers["user-agent"]))
//     {
//         res.type('html');

//         res.send('<html><script type="text/javascript"> window.location.href="https://wwww.baidu.com" </script><html>');

//         console.log(111);

//         return;
//     }
//     else if(isBrowser(req.headers["user-agent"]))
//     {
//         res.redirect("http://www.baidu.com/");

//         return;
//     }

//     res.type('pdf');

//     res.status(200).end();
// });

// function isQQ(ua)
// {
//     if(ua.indexOf("QQ") != -1) return true;

//     return false;
// }

// function isBrowser(ua)
// {
//     if(ua.indexOf("MicroMessenger") != -1) return false;

//     else if(ua.indexOf("AlipayClient") != -1) return false;

//     return true;
// }

function test(fn)
{

}

test.prototype.then = function()
{

}

test();