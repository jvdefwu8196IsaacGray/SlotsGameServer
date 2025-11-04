// var express = require("express");

// var body = require('body-parser');

// var fs = require('fs');

// var moment = require('moment');

// var axios = require("axios");

// var app = express();

// var Alipay = require('alipay-sdk').default;

// var AlipayForm = require('alipay-sdk/lib/form').default;

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

// app.get('/api/test', function (req, res) {

//     const pay = new Alipay({
//         appport: "2016100302036022",
//         publicKey: fs.readFileSync("public.key", 'ascii'),　　// 公钥
//         privateKey: fs.readFileSync("private.key", 'ascii'),　　// 私钥
//         signType: 'RSA2',
//         charset: 'utf-8',
//     })

//     const formData = new AlipayForm();

//     formData.setMethod('get');

//     formData.addField('biz_content', {
//         subject: 'asdsadsad',
//         out_trade_no: "asdasd22131",　　// 订单号
//         total_amount: 1.00　　　　  // 支付金额
//     });

//     res.set("Content-Type",'text/plain');

//     pay.exec('alipay.trade.precreate', {}, { formData: formData, validateSign: false }).then(result => {
//         axios.get(result).then(result => {
//             console.log(result.data.alipay_trade_precreate_response)
//             res.send(result.data.alipay_trade_precreate_response.qr_code);
//         })
//         .catch(err => {
//             res.json({
//                 code: 10001,
//                 message: "获取二维码失败"
//             })
//             console.log(err);
//         });
//     })
//     .catch(err => {
//         res.json({
//             code: 10001,
//             message: "创建订单失败"
//         })
//     })

// })