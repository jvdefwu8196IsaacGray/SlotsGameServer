require('../const.js');

require("../../../publics/rpc-client");

const bearcat = require('bearcat');

const {random} = require("../../../publics/global");

const KIND_ID = 1004;

const freeGameBase = [
    [2, 3, 5],
    [3, 5, 8],
    [5, 8, 10],
    [8, 10, 15],
    [10, 15, 30],
]

const resultManager = {
    [0] : [],
    [10] : [],
    [50] : [],
    [100] : [],
    [200] : [],
    [300] : [],
    [400] : [],
    [500] : [],
};

const resultFreeManager = {
    [0] : [],
    [10] : [],
    [50] : [],
    [100] : [],
    [200] : [],
    [300] : [],
    [400] : [],
    [500] : [],
};

// 生成一条开奖数据
// 需要修改玩家金钱[playerICoins] 和 本局赢钱[awardData.prize] 根据赔率和下注金额计算

const Result = {

	peilv: [
		[5, 10, 100],
		[5, 15, 100],
		[10, 15, 100],
		[10, 15, 100],
		[10, 20, 200],
		[10, 30, 200],
		[15, 35, 300],
		[20, 50, 300],
		[30, 100, 800],
        [35, 100, 800],
        [50, 100, 1000],
        [0, 0, 0],
        [5, 10, 50],
	],

	line: [
		[5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4],
		[10, 11, 12, 13, 14],
		[0, 6, 12, 8, 4],
		[10, 6, 2, 8, 14],
		[5, 1, 2, 3, 9],
		[5, 11, 12, 13, 9],
		[0, 1, 7, 13, 14],
		[10, 11, 7, 3, 4],
		[5, 11, 7, 3, 9],
		[5, 1, 7, 13, 9],
		[0, 6, 7, 8, 4],
		[10, 6, 7, 8, 14],
		[0, 6, 2, 8, 4],
		[10, 6, 12, 8, 14],
		[5, 6, 2, 8, 9],
		[5, 6, 12, 8, 9],
		[0, 1, 12, 3, 4],
		[10, 11, 2, 13, 14],
		[0, 11, 12, 13, 4],
		[10, 1, 2, 3, 14],
		[5, 11, 2, 13, 9],
		[5, 1, 12, 3, 9],
		[0, 11, 2, 13, 4],
		[10, 1, 12, 3, 14],
		[10, 1, 7, 13, 4],
		[0, 11, 7, 3, 14],
		[0, 11, 7, 13, 14],
		[0, 1, 7, 3, 14],
		[10, 6, 2, 3, 9],
    ],
    
    colums:[
        [0, 5, 10],
        [1, 6, 11],
        [2, 7, 12],
        [3, 8, 13],
        [4, 9, 14],
    ],

	checkHitLine(awardDataVec, out, one, lineId) {
		if(one == 12) return 0;
		var l = this.line[lineId];
        var count = 1;
        var iW = false;
		for (let i = 1; i < 5; ++i) {
			const p = l[i];
            const v = out[p];
            if(v == 12) break;
            if(one != v && v != 11) break;
            if(v == 11) iW = true;
			++count;
		}
        if (count >= 3) {
            var p = this.peilv[one][count - 3];
            if(p == 0) return 0;
            var aGV = [];
            for(let n=0;n<count;n++) aGV.push(this.convertCR(this.line[lineId][n]));        
            awardDataVec.push({"iL": true, "aGV": aGV, "aCt": aGV.length,"aCb": 1, "aS": one, "iL": true, "iW": iW});
            return p;
        }
        return 0;
	},

    convertCR(id)
    {
        switch (id)
        {
            case 0:{return {c:0, r:0};}
            case 1:{return {c:1, r:0};}
            case 2:{return {c:2, r:0};}
            case 3:{return {c:3, r:0};}
            case 4:{return {c:4, r:0};}
            case 5:{return {c:0, r:1};}
            case 6:{return {c:1, r:1};}
            case 7:{return {c:2, r:1};}
            case 8:{return {c:3, r:1};}
            case 9:{return {c:4, r:1};}
            case 10:{return {c:0, r:2};}
            case 11:{return {c:1, r:2};}
            case 12:{return {c:2, r:2};}
            case 13:{return {c:3, r:2};}
            case 14:{return {c:4, r:2};}
        }
    },

    generate(freegame) 
    {       
        var plate = [];

        var peilv = 0;

        var awardDataVec = [];

        var scatter = {aCb: 1, aCt: 0,  aM: 0, aGV: [], aS: 12, iL: true, iW: false, last: - 1}

        for(let i=0;i<15;++i)
        {
            var r = random(0, 100);

            if(r > 10) plate.push(random(0, 9));

            else plate.push(10);
        }

        var wild = random(0, 3)

        var wildCount = 0;

        if(wild > 0)
        {
            for(let i=1;i<4;++i) {
                for(let n=0;n<3;++n) {
                    if(wild > 0 && random(0, 100) > 80) {
                        plate[this.colums[i][n]] = 11;
                        ++wildCount;
                        --wild;
                    }
                }
                if (wild == 0) break;
            }
        }

        if(!freegame)
        {
            for(let i=0;i<5;++i)
            {
                var r = random(0, 100);
    
                if(r >= 10)
                {
                    var row = random(0, 2);
    
                    plate[this.colums[i][row]] = 12;
    
                    if(scatter.last + 1 == i)
                    {
                        scatter.aGV.push({c: i, r: row});
    
                        scatter.last = i;
                    }
                }
            }
            
            if(scatter.aGV.length >= 3)
            {
                delete scatter.last;
    
                scatter.aCt = scatter.aGV.length;
    
                awardDataVec.push(scatter);
            }
        }

        for (let i = 0; i < this.line.length; ++i) 
        {
            var one = plate[this.line[i][0]];
            
			peilv += this.checkHitLine(awardDataVec, plate, one, i);
        }

        let flag = (peilv == 0 ? 0 : 0x1);

        if(scatter.aGV.length >= 3) flag |= freegame ? (0x8 | 0x2) : (0x4);

        return {
            ["peilv"]: peilv,
            ["scatter"]: scatter.aGV.length,                                // 癞子个数
            ["SpinAck"]: {
                ["ackType"]: 0,                                             // 0 成功 1.钱不够 2.金额异常: 0
                ["plateData"]: {
                    ["plate"]: [
                        [plate[0], plate[5], plate[10]],
                        [plate[1], plate[6], plate[11]],
                        [plate[2], plate[7], plate[12]],
                        [plate[3], plate[8], plate[13]],
                        [plate[4], plate[9], plate[14]],
                    ],
                    ["awardDataVec"]: awardDataVec,
                    ["freeCount"]: 0,                                        // 剩余免费转次数
                    ["freeTotalAward"]:  0,                                  // 免费转赢的筹码
                    ["awardTypeFlag"]: flag,                                 // 类型
                    ["winMoney"]: 0                                          // 本局赢的钱
                }
            }
        };
	},
};

function FiveLion()
{       

}

// 请求进入房间
FiveLion.prototype.join = (sock, args) =>
{
    sock.bonusGame = 0;

    sock.freeCount = 10;

    console.log(2222);

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
FiveLion.prototype.spin = (sock, args) =>
{
    const {betMoney, columnCount, totalBet} = args;

    if(betMoney == undefined || totalBet == undefined || columnCount != 6 || betMoney != totalBet / 30 || (sock.freeCount > 0 && betMoney != 0 && totalBet != 0)) return;

    const mode = sock.freeCount > 0;

    const model = mode ? resultFreeManager : resultManager;

    var gameResult;

    const r = random(0, 100000);

    if(r <= 2000 && jackpool > betMoney * 500) gameResult = model[500][random(0, model[500].length - 1)];
    else if(r <= 3000 && jackpool > betMoney * 400) gameResult = model[400][random(0, model[400].length - 1)];
    else if(r <= 5000 && jackpool > betMoney * 300) gameResult = model[300][random(0, model[300].length - 1)];
    else if(r <= 8000 && jackpool > betMoney * 200) gameResult = model[200][random(0, model[200].length - 1)];
    else if(r <= 10000 && jackpool > betMoney * 100) gameResult = model[100][random(0, model[100].length - 1)];
    else if(r <= 20000 && jackpool > betMoney * 50) gameResult = model[50][random(0, model[50].length - 1)];
    else if(r <= 30000 && jackpool > betMoney * 10) gameResult = model[10][random(0, model[10].length - 1)];
    else gameResult = model[0][random(0, model[0].length - 1)];

    crpc.addChipsSync({
        kid: KIND_ID,
        uid: 0,
        chips: 100,
        comment: "spin",
    }, (err, result)=>{

        if(err || result.code != 10000) return logger.error(err || result.message);

        var ret = {
            method: "fivelion.spin.res",
            ...gameResult
        };

        var winMoney = betMoney * ret.peilv;

        if(ret.scatter >= 3)
        {
            ++sock.bonusGame;

            const money = betMoney * 50 * ret.scatter;

            winMoney += money;

            ret.SpinAck.plateData.freeTotalAward += money;
        }

        if(sock.freeCount && --sock.freeCount == 0) ret.SpinAck.plateData.awardTypeFlag |= 0x10;
 
        ret.SpinAck.plateData.winMoney = winMoney;

        ret.SpinAck.plateData.freeCount = sock.freeCount || 0;

        console.log(ret.SpinAck);
     
        delete ret.peilv;

        delete ret.scatter;

        sock.sendText(JSON.stringify(ret));

    });
}

FiveLion.prototype.freeType = (sock, args) =>
{
    const {freeType} = args;

    var freeCount = 0;

    switch(freeType)
    {
        case 1:
        {freeCount = 25; break;}
        case 2:
        {freeCount = 20; break;}
        case 3:
        {freeCount = 15; break;}
        case 4:
        {freeCount = 13; break;}
        case 5:  
        {freeCount = 10; break;}
        default: return;
    }

    sock.freeType = freeType - 1;

    sock.freeCount = freeCount;

    sock.sendText(JSON.stringify({
        method: "fivelion.free.type.res",
        code: 10000
    }));
}

(()=>{
    
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
    id: "FiveLion",
    func: FiveLion
};
