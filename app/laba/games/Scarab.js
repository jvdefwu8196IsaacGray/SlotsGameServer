require('../const.js');

require("../../../publics/rpc-client");

const bearcat = require('bearcat');

const { random } = require("../../../publics/global");

const KIND_ID = 1005;

// ANKH                = 0, --生命之符
// HORUS               = 1, --赫魯斯之眼
// PHARAOH             = 2, --法老頭
// ANUBIS              = 3, --阿努比斯
// SNAKE               = 4, --蛇像
// LIFE_SCEPTER        = 5, --生命權杖
// A                   = 6,
// K                   = 7,
// Q                   = 8,
// J                   = 9,
// TEN                 = 10,
// LONG_GOF            = 11, --長財神
// SPECIAL_INGOTS      = 12, --元寶/框
// WILD                = 13,
// BONUS               = 14,
// JP                  = 15,

const resultManager = {
    [0]: [],
    [10]: [],
    [50]: [],
    [100]: [],
    [200]: [],
    [300]: [],
    [400]: [],
    [500]: [],
};

const resultFreeManager = {
    [5]: {
        [0]: [],
        [10]: [],
        [50]: [],
        [100]: [],
    },
    [7]: {
        [0]: [],
        [10]: [],
        [50]: [],
        [100]: [],
    },
    [9]: {
        [0]: [],
        [10]: [],
        [50]: [],
        [100]: [],
    },
};

// 生成一条开奖数据
// 需要修改玩家金钱[playerICoins] 和 本局赢钱[awardData.prize] 根据赔率和下注金额计算

const Result = {

    specialGridVec: [],

    enableSpecial: false,

    peilv: [
        [0, 25, 75, 200],
        [0, 25, 75, 200],
        [0, 20, 50, 150],
        [0, 20, 50, 150],
        [0, 20, 50, 150],
        [0, 20, 50, 150],
        [0, 10, 30, 100],
        [0, 10, 30, 100],
        [0, 5, 20, 75],
        [0, 5, 20, 75],
        [0, 5, 20, 75],
        [5, 40, 100, 400],
        [0, 0, 0, 0],
        [10, 50, 125, 500],
        [10, 50, 125, 500]
    ],

    line: [
        [ 1, 5, 9, 13, 17 ],  //1
        [ 1, 5, 10, 13, 17 ],
        [ 1, 6, 10, 14, 17 ],
        [ 1, 6, 11, 14, 17 ],
        [ 1, 6, 9, 14, 17 ],
        [ 1, 5, 9, 14, 17 ],
        [ 1, 6, 9, 13, 17 ],
        [ 1, 5, 10, 14, 17 ],
        [ 1, 6, 10, 13, 17 ],
        [ 1, 5, 11, 13, 17 ], //10
        [ 1, 5, 11, 14, 17 ],
        [ 1, 6, 11, 13, 17 ],
        [ 2, 6, 10, 14, 18 ],
        [ 2, 6, 11, 14, 18 ],
        [ 2, 6, 9, 14, 18 ],
        [ 2, 7, 11, 15, 18 ],
        [ 2, 5, 9, 13, 18 ],
        [ 2, 7, 10, 15, 18 ],
        [ 2, 5, 10, 13, 18 ],
        [ 2, 6, 10, 15, 18 ], //20
        [ 2, 6, 10, 13, 18 ],
        [ 2, 7, 10, 14, 18 ],
        [ 2, 5, 10, 14, 18 ],
        [ 2, 7, 9, 15, 18 ],
        [ 2, 5, 11, 13, 18 ],
        [ 3, 7, 11, 15, 19 ],
        [ 3, 7, 12, 15, 19 ],
        [ 3, 7, 10, 15, 19 ],
        [ 3, 8, 12, 16, 19 ],
        [ 3, 6, 10, 14, 19 ], //30
        [ 3, 8, 11, 16, 19 ],
        [ 3, 6, 11, 14, 19 ],
        [ 3, 7, 11, 16, 19 ],
        [ 3, 7, 11, 14, 19 ],
        [ 3, 8, 11, 15, 19 ],
        [ 3, 6, 11, 15, 19 ],
        [ 3, 8, 10, 16, 19 ],
        [ 3, 6, 12, 14, 19 ],
        [ 4, 8, 12, 16, 20 ],
        [ 4, 8, 11, 16, 20 ], //40
        [ 4, 7, 11, 15, 20 ],
        [ 4, 7, 10, 15, 20 ],
        [ 4, 7, 12, 15, 20 ],
        [ 4, 8, 12, 15, 20 ],
        [ 4, 7, 12, 16, 20 ],
        [ 4, 8, 11, 15, 20 ],
        [ 4, 7, 11, 16, 20 ],
        [ 4, 8, 10, 16, 20 ],
        [ 4, 8, 10, 15, 20 ],
        [ 4, 7, 10, 16, 20 ] //50
    ],

    colums: [
        [0, 5, 10, 15],
        [1, 6, 11, 16],
        [2, 7, 12, 17],
        [3, 8, 13, 18],
        [4, 9, 14, 19],
    ],

    plateValue(plate, index)
    {
        if(this.enableSpecial)
        {
            for(let i=0;i<this.specialGridVec.length;++i)
            {
                if(this.specialGridVec[i] == index) return 13;
            }
        }

        return plate[--index];
    },

    checkHitLine(plate, icon, lineId) {

        if(icon == 12 || icon == 14 || icon == 15) return;

        var count = 1;

        const line = this.line[lineId];

        for (let i = 1; i < 5; ++i) 
        {
            var v = this.plateValue(plate, line[i]);

            if (icon == 13 || v == 13 || v == icon) ++count;

            else break;

            if (icon == 13) icon = v;
        }

        return {
            icon: icon,
            count: count
        };

    },

    generate(freegame, round, pSpecialGridVec) {

        var plate = [];

        var peilv = 0;

        var scatter = 0;

        var lineAwardDataVec = [];

        this.enableSpecial = freegame || round == 10;

        this.specialGridVec = freegame ? pSpecialGridVec : [];

        for (let i=0; i<20; ++i) {
            var r = random(0, 100);
            if (r > 60) plate.push(random(0, 5));
            else if (r > 30) plate.push(random(6, 9));
            else if (r > 5) plate.push(10);
            else plate.push(11);
        }

        if(round == 10)
        {
            for(let i=0;i<pSpecialGridVec.length;++i)
            {
                let s = pSpecialGridVec[i];
                
                this.specialGridVec.push(s[0]);

                if(s[0] == 0) plate[s[0] - 1] = 12;
            }
        }
        else if(!freegame)
        {
            for(let i=0;i<pSpecialGridVec.length;++i)
            {
                if(random(0, 100) < 45)
                {
                    let s = pSpecialGridVec[i];

                    if(++s[1] < 2)
                    {
                        this.specialGridVec.push(s[0]);

                        plate[s[0] - 1] = 12;
                    }
                }
            }
        }

        for(let i=0;i<5;++i)
        {
            for(let n=1;n<4;++n)
            {
                let idx = i * 4 + n;

                if(plate[idx-1] == 11) plate[idx] = 11;
            }
        }

        if(!freegame)
        {
            for(let i=0;i<5;++i)
            {
                let r = random(0, 100);
    
                if(r < 20) break;
    
                var row = random(0, 3);
    
                plate[i * 4 + row] = 14;
    
                ++scatter;
            }
        }

        for (let i = 0; i < this.line.length; ++i) {  
            var one = this.plateValue(plate, this.line[i][0]);
            var result = this.checkHitLine(plate, one, i);
            if (result && result.count >= 2) {
                let p = this.peilv[result.icon][result.count - 2];
                if(p == 0) continue;
                peilv += p;
                lineAwardDataVec.push({
                    ["l"]: i + 1,
                    ["s"]: result.icon,
                    ["c"]: result.count
                });
            }
        }

        let flag = (peilv == 0 ? 0 : 0x1);

        if(scatter >= 3) flag |= 0x2;

        if(freegame)
        {
            return { 
                "peilv": peilv,
                "ackType": 0,
                "remainRound": 0,
                "plateData": {
                    "awardTypeFlag": flag,
                    "lineAwardDataVec":  lineAwardDataVec,
                    "plate": plate,
                    "specialGridVec": this.specialGridVec,
                    "winMoney": 0
                }
            };
        }
        else
        {
            return { 
                "peilv": peilv,
                "round": round, // 第几次
                "ackType": 0,   
                "bet": 0,
                "cardBonus": 0,
                "isSettle": round == 10,
                "jackpot": {
                    "money": 0,
                    "type": 0,
                    "won": false
                },
                "plateData": {
                    "awardTypeFlag": flag,
                    "lineAwardDataVec":  lineAwardDataVec,
                    "plate": plate,
                    "specialGridVec": this.specialGridVec,
                    "winMoney": 0
                }
            };
        }
    }

};

const ResultGroup = {

    generate()
    {
        var group = {peilv: 0, results: []};

        var specialGridVec = [];

        for(let i=5;i<=20;++i) if(random(0, 100) < 45) specialGridVec.push([i, 0]);
        
        for(let i=0;i<10;++i)
        {
            let result = Result.generate(false, i + 1, specialGridVec);
            group.peilv += result.peilv;
            group.results.push(result);
        }

        return group;
    }

}

function Scarab() {

}

// 请求进入房间
Scarab.prototype.join = (sock, args) => {

    sock.bonusGame = 0;

    sock.freeCount = 0;

    // db.connect(res, (conn)=>{
    //     const sql = "SELECT t1.chip,t2.freeGame,t2.bonusGame FROM dmg_users AS t1 LEFT JOIN dmg_laba AS t2 ON t1.id=t2.uid and t2.gid=10000 WHERE t1.id=10000";
    //     db.exec(res, conn, sql, [APP_PORT, USER_ID], (err, result)=>{
    //         if(err) return db.rollback(res, conn);
    //         conn.release();
    //         res.json({
    //             GameInfoAck: {
    //                 betChip: 100,
    //                 betVec: [100, 1000, 2000, 3000, 5000],
    //                 chip: result[0].chip,
    //                 freeGame: result[0].result ? result[0].freeGame : 0, 
    //                 bonusGame: result[0].bonusGame ? result[0].bonusGame : 0,
    //                 plate:[
    //                     [random(1, 12),random(1, 12),random(1, 12)],
    //                     [random(1, 12),random(1, 12),random(1, 12)],
    //                     [random(1, 12),random(1, 12),random(1, 12)],
    //                     [random(1, 12),random(1, 12),random(1, 12)],
    //                     [random(1, 12),random(1, 12),random(1, 12)]
    //                 ]
    //             }
    //         });
    //     });
    // });
}

// 请求下注
Scarab.prototype.spin = (sock, args) => 
{   
    const {betMoney, isFreeMode} = args;

    if(isFreeMode)
    {
        const model = resultFreeManager[9];

        const r = random(0, 100000);

        let gameResult;

        if(r <= 20000 && jackpool > betMoney * 100) gameResult = model[100][random(0, model[100].length - 1)];
        else if(r <= 40000 && jackpool > betMoney * 50) gameResult = model[50][random(0, model[50].length - 1)];
        else if(r <= 80000 && jackpool > betMoney * 10) gameResult = model[10][random(0, model[10].length - 1)];
        else gameResult = model[0][random(0, model[0].length - 1)];

        let ret = {
            method: "scarab.spin.res",
            ...gameResult
        };

        ret.remainRound = 0;

        delete ret.peilv;

        sock.sendText(JSON.stringify(ret));

        return;
    }
    
    if(sock.gameResult == undefined || sock.round == 10)
    {
        const model = resultManager;

        sock.round = 0;
        
        const r = random(0, 100000);

        if(r <= 2000 && jackpool > betMoney * 500) sock.gameResult = model[500][random(0, model[500].length - 1)];
        else if(r <= 5000 && jackpool > betMoney * 400) sock.gameResult = model[400][random(0, model[400].length - 1)];
        else if(r <= 8000 && jackpool > betMoney * 300) sock.gameResult = model[300][random(0, model[300].length - 1)];
        else if(r <= 10000 && jackpool > betMoney * 200) sock.gameResult = model[200][random(0, model[200].length - 1)];
        else if(r <= 20000 && jackpool > betMoney * 100) sock.gameResult = model[100][random(0, model[100].length - 1)];
        else if(r <= 40000 && jackpool > betMoney * 50) sock.gameResult = model[50][random(0, model[50].length - 1)];
        else if(r <= 80000 && jackpool > betMoney * 10) sock.gameResult = model[10][random(0, model[10].length - 1)];
        else sock.gameResult = model[0][random(0, model[0].length - 1)];
    }

    var gameResult = sock.gameResult;

    crpc.addChipsSync({
        kid: KIND_ID,
        uid: 0,
        chips: 100,
        comment: "spin",
    }, (err, result)=>{

        if(err || result.code != 10000) return logger.error(err || result.message);

        let ret = {
            method: "scarab.spin.res",
            ...gameResult.results[sock.round]
        };

        ++sock.round;

        ret.bet = 50;

        ret.plateData.winMoney = betMoney * ret.peilv;

        // if(ret.awardData.times > 0)
        // {
        //     sock.freeCount = ret.awardData.times;

        //     sock.frreCurrent = 0;
        // }

        // if(isFreeMode)
        // {
        //     ret.awardData.currTimes = ++sock.frreCurrent;

        //     ret.awardData.times = sock.freeCount;
        // }

        delete ret.peilv;

        sock.sendText(JSON.stringify(ret));

    });
}

// 请求免费转
Scarab.prototype.freeType = (sock, args) =>
{
    const {freeType} = args;

    const r = random(0, 100000);

    // var items = [];

    // const model = resultFreeManager[9];

    // const betMoney = 50;

    // for(let i=8;i>=0;--i)
    // {
    //     let gameResult;
    //     if(r <= 20000 && jackpool > betMoney * 100) gameResult = model[100][random(0, model[100].length - 1)];
    //     else if(r <= 40000 && jackpool > betMoney * 50) gameResult = model[50][random(0, model[50].length - 1)];
    //     else if(r <= 80000 && jackpool > betMoney * 10) gameResult = model[10][random(0, model[10].length - 1)];
    //     else gameResult = model[0][random(0, model[0].length - 1)];
    //     let ret = {...gameResult};
    //     ret.remainRound = i;
    //     let t = {
    //         ...gameResult
    //     };
    //     t.remainRound = i;
    //     delete t.peilv;
    //     items.push(t);
    // }

    sock.sendText(JSON.stringify({
        method: "scarab.free.type.res",
        ackType: 0,	
        bonusType: freeType,
        totalRound: 10,
        wildCount: 9,
        bonusCount: 0,
        totalWin: 0
        // items:items
    }));
}

(() => {
 
    console.log("开始生成普通转数据", KIND_ID);

    while(true)
    {
        var r = ResultGroup.generate();

        if(r.peilv == 0)
        {
            if(resultManager[0].length < 1000) resultManager[0].push(r);
        }
        else if(r.peilv >= 1 && r.peilv <= 10)
        {
            if(resultManager[10].length < 500) resultManager[10].push(r);
        }
        else if(r.peilv >= 11 && r.peilv <= 50)
        {
            if(resultManager[50].length < 200) resultManager[50].push(r);
        }
        else if(r.peilv >= 51 && r.peilv <= 100)
        {
            if(resultManager[100].length < 80) resultManager[100].push(r);
        }
        else if(r.peilv >= 101 && r.peilv <= 200)
        {
            if(resultManager[200].length < 50) resultManager[200].push(r);
        }
        else if(r.peilv >= 201 && r.peilv <= 300)
        {
            if(resultManager[300].length < 50) resultManager[300].push(r);
        }
        else if(r.peilv >= 301 && r.peilv <= 400)
        {
            if(resultManager[400].length < 50) resultManager[400].push(r);
        }
        else if(r.peilv >= 401 && r.peilv <= 500)
        {
            if(resultManager[500].length < 50) resultManager[500].push(r);
        }

        if(
            resultManager[0].length >= 1000 &&
            resultManager[10].length >= 500 &&
            resultManager[50].length >= 200 &&
            resultManager[100].length >= 80 &&
            resultManager[200].length >= 50 &&
            resultManager[300].length >= 50 &&
            resultManager[400].length >= 50 &&
            resultManager[500].length >= 50
        )
        {
            break;
        }
    }

    console.log("开始生成免费转数据");

    Object.keys(resultFreeManager).forEach(key => {

        while(true)
        {
            var num = Number(key);

            var specialGridVec = [
                5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
            ];

            while(specialGridVec.length != num)
            {
                let r = random(0, specialGridVec.length-1);

                specialGridVec.splice(r, 1);
            }
            
            var r = Result.generate(true, 0, specialGridVec);
    
            if(r.peilv == 0)
            {
                if(resultFreeManager[key][0].length < 1000) resultFreeManager[key][0].push(r);
            }
            else if(r.peilv >= 1 && r.peilv <= 10)
            {
                if(resultFreeManager[key][10].length < 500) resultFreeManager[key][10].push(r);
            }
            else if(r.peilv >= 11 && r.peilv <= 50)
            {
                if(resultFreeManager[key][50].length < 200) resultFreeManager[key][50].push(r);
            }
            else if(r.peilv >= 51 && r.peilv <= 100)
            {
                if(resultFreeManager[key][100].length < 80) resultFreeManager[key][100].push(r);
            }
    
            if(
                resultFreeManager[key][0].length >= 1000 &&
                resultFreeManager[key][10].length >= 500 &&
                resultFreeManager[key][50].length >= 200 &&
                resultFreeManager[key][100].length >= 80
            )
            {
                break;
            }
        }

    });

    console.log("数据生成完毕");

})()

module.exports = {
    id: "Scarab",
    func: Scarab
};