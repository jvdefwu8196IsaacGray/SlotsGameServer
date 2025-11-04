require('../const.js');

require("../../../publics/rpc-client");

const bearcat = require('bearcat');

const { random } = require("../../../publics/global");

const KIND_ID = 1003;

//  0,    -- 法老寶藏
//  1,    -- 人面獅身
//  2,    -- 荷魯斯之眼
//  3,    -- 生命之符
//  4,    -- 生命權杖
//  5,    -- A
//  6,    -- K
//  7,    -- Q
//  8,    -- J
//  9,    -- 10
//  10,   -- Wild
//  11,   -- Sactter
//  12,   -- JP
//  13,   -- JP GRAND
//  14,   -- JP MAJOR
//  15,   -- JP MINOR
//  16,   -- JP MINI

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
    [0]: [],
    [10]: [],
    [50]: [],
    [100]: [],
    [200]: [],
    [300]: [],
    [400]: [],
    [500]: [],
};

// 生成一条开奖数据
// 需要修改玩家金钱[playerICoins] 和 本局赢钱[awardData.prize] 根据赔率和下注金额计算

const Result = {

    peilv: [
        [100, 500, 1000],
        [25, 200, 800],
        [20, 100, 500],
        [10, 80, 250],
        [10, 80, 250],
        [5, 25, 200],
        [5, 25, 200],
        [5, 20, 120],
        [5, 20, 120],
        [5, 10, 100],
        [0, 0, 5000],
    ],

    line: [
        [0, 1, 2, 3, 4],
        [0, 1, 7, 3, 4],
        [0, 6, 7, 8, 4],
        [0, 6, 12, 8, 4],
        [0, 6, 2, 8, 4],
        [0, 1, 2, 8, 4],
        [0, 6, 2, 3, 4],
        [0, 1, 7, 8, 4],
        [0, 6, 7, 3, 4],
        [0, 1, 12, 3, 4],
        [0, 1, 12, 8, 4],
        [0, 6, 12, 3, 4],
        [5, 6, 7, 8, 9],
        [5, 6, 12, 8, 9],
        [5, 6, 2, 8, 9],
        [5, 11, 12, 13, 9],
        [5, 1, 2, 3, 9],
        [5, 11, 7, 13, 9],
        [5, 1, 7, 3, 9],
        [5, 6, 7, 13, 9],
        [5, 6, 7, 3, 9],
        [5, 11, 7, 8, 9],
        [5, 1, 7, 8, 9],
        [5, 11, 2, 13, 9],
        [5, 1, 12, 3, 9],
        [10, 11, 12, 13, 14],
        [10, 11, 17, 13, 14],
        [10, 11, 7, 13, 14],
        [10, 16, 17, 18, 14],
        [10, 6, 7, 8, 14],
        [10, 16, 12, 18, 14],
        [10, 6, 12, 8, 14],
        [10, 11, 12, 18, 14],
        [10, 11, 12, 8, 14],
        [10, 16, 12, 13, 14],
        [10, 6, 12, 13, 14],
        [10, 16, 7, 18, 14],
        [10, 6, 17, 8, 14],
        [15, 16, 17, 18, 19],
        [15, 16, 12, 18, 19],
        [15, 11, 12, 13, 19],
        [15, 11, 7, 13, 19],
        [15, 11, 17, 13, 19],
        [15, 16, 17, 13, 19],
        [15, 11, 17, 18, 19],
        [15, 16, 12, 13, 19],
        [15, 11, 12, 18, 19],
        [15, 16, 7, 18, 19],
        [15, 16, 7, 13, 19],
        [15, 11, 7, 18, 19],
    ],

    colums: [
        [0, 5, 10, 15],
        [1, 6, 11, 16],
        [2, 7, 12, 17],
        [3, 8, 13, 18],
        [4, 9, 14, 19],
    ],

    checkHitLine(plate, icon, lineId) {

        if(icon == 11) return;

        var count = 1;

        var line = this.line[lineId];

        for (let i = 1; i < 5; ++i) {

            var v = plate[line[i]];

            if (icon == 10 || v == 10 || v == icon) ++count;

            else break;

            if (icon == 10) icon = v;

        }

        return {
            icon: icon,
            count: count
        };

    },

    generate(freegame) {

        var plate = [];

        var peilv = 0;

        var scatter = 0;

        var awardData = { "currTimes": 0, "extraBonus": 0, "otherExtraBonus": [], "prize": 0, "times": 0, "award": [] };

        for (let i = 0; i < 20; ++i) {
            var r = random(0, 100);

            if (r > 60) plate.push(random(0, 5));
            else plate.push(random(6, 9));
        }

        var wild = random(0, 3)

        if (wild > 0)
        {
            for (let i = 1; i < 4; ++i) {
                for (let n = 0; n < 4; ++n) {
                    if (wild > 0 && random(0, 100) > 95) {
                        plate[this.colums[i][n]] = 10;
                        --wild;
                        break;
                    }
                }
                if (wild == 0) break;
            }
        }

        if(freegame)
        {
            var exits = {};

            // 其它滚动数字

            awardData.extraBonus = random(1, 10);

            while(awardData.otherExtraBonus.length != 4)
            {
                let num = random(1, 10);
    
                if(awardData.extraBonus != num && exits[num] == undefined)
                {
                    awardData.otherExtraBonus.push(num);
    
                    exits[num] = true;
                }
            }
        }
        else
        {
            for(let i=0;i<5;++i)
            {
                let r = random(0, 100);
    
                if(r < 20) break;
    
                var row = random(0, 3);
    
                plate[this.colums[i][row]] = 11;
    
                if(i == scatter) ++scatter;
            }

            if(scatter >= 3)
            {
                let r = random(0, 2);

                if(r == 0) awardData.times = 5;
                else if(r == 1) awardData.times = 10;
                else awardData.times = 15;
            }
        }
         
        for (let i = 0; i < this.line.length; ++i) {  
            var one = plate[this.line[i][0]];
            if (one == undefined) console.log(one, 555, i, this.line[i][0], plate)
            var result = this.checkHitLine(plate, one, i);
            if (result && result.count >= 3) {
                let p = this.peilv[result.icon][result.count - 3];
                if(p == 0) continue;
                peilv += p;
                awardData.award.push({
                    ["i"]: i,
                    ["l"]: result.count,
                    ["s"]: result.icon
                });
            }
        }

        return { 
            "peilv": peilv,
            "awardData": awardData,
            "cardBonus": 0,
            "jackpot": {"money": 0, "type": 0, "won": false},
            "plate": plate,
            "playerICoins": 0
        };
    }

};

function Egypt() {

}

// 请求进入房间
Egypt.prototype.join = (sock, args) => {

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
Egypt.prototype.spin = (sock, args) => 
{   
    const {betMoney, isFreeMode} = args;

    const model = isFreeMode ? resultFreeManager : resultManager;

    var gameResult;

    const r = random(0, 100000);

    if(r <= 2000 && jackpool > betMoney * 500) gameResult = model[500][random(0, model[500].length - 1)];
    else if(r <= 3000 && jackpool > betMoney * 400) gameResult = model[400][random(0, model[400].length - 1)];
    else if(r <= 5000 && jackpool > betMoney * 300) gameResult = model[300][random(0, model[300].length - 1)];
    else if(r <= 8000 && jackpool > betMoney * 200) gameResult = model[200][random(0, model[200].length - 1)];
    else if(r <= 10000 && jackpool > betMoney * 100) gameResult = model[100][random(0, model[100].length - 1)];
    else if(r <= 20000 && jackpool > betMoney * 50) gameResult = model[50][random(0, model[50].length - 1)];
    else if(r <= 30000 && jackpool > betMoney * 10)gameResult = model[10][random(0, model[10].length - 1)];
    else gameResult = model[0][random(0, model[0].length - 1)];

    crpc.addChipsSync({
        kid: KIND_ID,
        uid: 0,
        chips: 100,
        comment: "spin",
    }, (err, result)=>{

        if(err || result.code != 10000) return logger.error(err || result.message);

        var ret = {
            method: "egypt.spin.res",
            ...gameResult
        };

        ret.awardData.prize = gameResult.peilv * betMoney;

        if(ret.awardData.times > 0)
        {
            sock.freeCount = ret.awardData.times;

            sock.frreCurrent = 0;
        }

        if(isFreeMode)
        {
            ret.awardData.currTimes = ++sock.frreCurrent;

            ret.awardData.times = sock.freeCount;
        }

        delete ret.peilv;

        sock.sendText(JSON.stringify(ret));

    });
}

(() => {
 
    console.log("开始生成普通转数据", KIND_ID);

    while(true)
    {
        var r = Result.generate(false);

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

    while(true)
    {
        var r = Result.generate(true);

        if(r.peilv == 0)
        {
            if(resultFreeManager[0].length < 1000) resultFreeManager[0].push(r);
        }
        else if(r.peilv >= 1 && r.peilv <= 10)
        {
            if(resultFreeManager[10].length < 500) resultFreeManager[10].push(r);
        }
        else if(r.peilv >= 11 && r.peilv <= 50)
        {
            if(resultFreeManager[50].length < 200) resultFreeManager[50].push(r);
        }
        else if(r.peilv >= 51 && r.peilv <= 100)
        {
            if(resultFreeManager[100].length < 80) resultFreeManager[100].push(r);
        }
        else if(r.peilv >= 101 && r.peilv <= 200)
        {
            if(resultFreeManager[200].length < 50) resultFreeManager[200].push(r);
        }
        else if(r.peilv >= 201 && r.peilv <= 300)
        {
            if(resultFreeManager[300].length < 50) resultFreeManager[300].push(r);
        }
        else if(r.peilv >= 301 && r.peilv <= 400)
        {
            if(resultFreeManager[400].length < 50) resultFreeManager[400].push(r);
        }
        else if(r.peilv >= 401 && r.peilv <= 500)
        {
            if(resultFreeManager[500].length < 50) resultFreeManager[500].push(r);
        }

        if(
            resultFreeManager[0].length >= 1000 &&
            resultFreeManager[10].length >= 500 &&
            resultFreeManager[50].length >= 200 &&
            resultFreeManager[100].length >= 80 &&
            resultFreeManager[200].length >= 50 &&
            resultFreeManager[300].length >= 50 &&
            resultFreeManager[400].length >= 50 &&
            resultFreeManager[500].length >= 50
        )
        {
            break;
        }
    }

    console.log("数据生成完毕");

})()

module.exports = {
    id: "Egypt",
    func: Egypt
};