require('../const.js');

require("../../../publics/rpc-client");

const bearcat = require('bearcat');

const {random} = require("../../../publics/global");

const KIND_ID = 1001;

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
        [ 5 , 6 , 7 , 8 , 9 ] ,	
        [ 0 , 1 , 2 , 3 , 4 ] ,	
        [ 10 , 11 , 12 , 13 , 14 ] ,	
        [ 0 , 6 , 12 , 8 , 4 ] ,	
        [ 10 , 6 , 2 , 8 , 14 ] ,	
        [ 0 , 1 , 7 , 3 , 4 ] ,	
        [ 10 , 11 , 7 , 13 , 14 ] ,	
        [ 5 , 11 , 12 , 13 , 9 ] ,	
        [ 5 , 1 , 2 , 3 , 9 ] ,	
        [ 0 , 6 , 7 , 8 , 4 ] ,	
        [ 10 , 6 , 7 , 8 , 14 ] ,	
        [ 0 , 6 , 2 , 8 , 4 ] ,	
        [ 10 , 6 , 12 , 8 , 14 ] ,	
        [ 5 , 1 , 7 , 3 , 9 ] ,	
        [ 5 , 11 , 7 , 13 , 9 ] ,	
        [ 5 , 6 , 2 , 8 , 9 ] ,	
        [ 5 , 6 , 12 , 8 , 9 ] ,	
        [ 0 , 11 , 2 , 13 , 4 ] ,	
        [ 10 , 1 , 12 , 3 , 14 ] ,	
        [ 5 , 1 , 12 , 3 , 9 ] ,	
        [ 5 , 11 , 2 , 13 , 9 ] ,	
        [ 0 , 1 , 12 , 3 , 4 ] ,	
        [ 10 , 11 , 2 , 13 , 14 ] ,	
        [ 0 , 11 , 12 , 13 , 4 ] ,	
        [ 10 , 1 , 2 , 3 , 14 ] 	
    ],
    
    colums:[
        [0, 5, 10],
        [1, 6, 11],
        [2, 7, 12],
        [3, 8, 13],
        [4, 9, 14],
    ],

    plateValue(plate0, plate1, id)
    {
        switch (id)
        {
            case 0:
            case 5:
            case 10:
            {
                if(plate0[0] == 11) return 11;

                return plate1[id];
            }
            case 1:
            case 6:
            case 11:
            {
                if(plate0[1] == 11) return 11;

                return plate1[id];
            }
            case 2:
            case 7:
            case 12:
            {
                if(plate0[2] == 11) return 11;

                return plate1[id];
            }
            case 3:
            case 8:
            case 13:
            {
                if(plate0[3] == 11) return 11;

                return plate1[id];
            }
            default:
            {
                if(plate0[4] == 11) return 11;

                return plate1[id];
            }                      
        }   
    },

	checkHitLine(plate0, plate1, icon, lineId) {

        var count = 1;

        var line = this.line[lineId];

        for(let i=1;i<5;++i)
        {
            var v = this.plateValue(plate0, plate1, line[i]);

            if(icon == 11 || v == 11 || v == icon) ++count;

            else break;

            if(icon == 11) icon = v;
        }

        return {
            icon: icon,
            count: count
        };
    },
    
    generate(freegame) 
    {       
        var plate0 = [];

        var plate1 = [];

        var peilv = 0;

        var awardData = {prize:0, times: 0, award: []};

        var scatter = 0;

        for(let i=0;i<5;++i)
        {
            let r = random(0, 100);

            let p = 17;                    // 空
            if(r < 5) p = 12;              // scatter
            else if(r < 10) p = 11;        // 宝剑

            if(p == 12 && i == scatter) ++scatter;

            plate0.push(p);
        }

        for(let i=0;i<15;++i)
        {
            var r = random(0, 100);

            if(r > 50) plate1.push(random(0, 5));
            else if(r > 5) plate1.push(random(6, 9));
            else plate1.push(10);
        }

        var wild = random(0, 3)

        if (wild > 0)
        {
            for(let i=1;i<4;++i) {
                for(let n=0;n<3;++n) {
                    if(wild > 0 && random(0, 100) > 95) {
                        plate1[this.colums[i][n]] = 11;
                        --wild;
                        break;
                    }
                }
                if (wild == 0) break;
            }
        }

        for (let i = 0; i < this.line.length; ++i) 
        {
            var one = this.plateValue(plate0, plate1, this.line[i][0]);
			var result = this.checkHitLine(plate0, plate1, one, i);
			if (result.count >= 3) {
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

        if(!freegame)
        {
            if(scatter == 3) awardData.times = 9;
            else if(scatter == 4) awardData.times = 11;
            else if(scatter == 5) awardData.times = 13;
        }

        return {
            ["peilv"]: peilv,
            ["freegame"]: freegame,
            ["awardData"]: awardData,
            ["plate0"]: plate0,
            ["plate1"]: plate1
        };
	}
};

function BaoBoonChin()
{       

}

// 请求进入房间
BaoBoonChin.prototype.join = (sock, args) =>
{
    sock.bonusGame = 0;

    sock.freeCount = 0;

    res.json({
        GameInfoAck: {
            betChip: 100,
            betVec: [100, 1000, 2000, 3000, 5000],
            chip: result[0].chip,
            freeGame: result[0].result ? result[0].freeGame : 0, 
            bonusGame: result[0].bonusGame ? result[0].bonusGame : 0,
            plate:[
                [random(1, 12),random(1, 12),random(1, 12)],
                [random(1, 12),random(1, 12),random(1, 12)],
                [random(1, 12),random(1, 12),random(1, 12)],
                [random(1, 12),random(1, 12),random(1, 12)],
                [random(1, 12),random(1, 12),random(1, 12)]
            ]
        }
    });

}

// 请求下注
BaoBoonChin.prototype.spin = (sock, args) =>
{
    const {betMoney, columnCount, totalBet} = args;

    if(betMoney == undefined || totalBet == undefined || columnCount != 6 || betMoney != totalBet / 30 || (sock.freeCount > 0 && betMoney != 0 && totalBet != 0)) return;

    const mode = sock.freeCount && sock.freeCount > 0;

    const base = mode ? freeGameBase[sock.freeType][2] : 1;

    const model = mode ? resultFreeManager : resultManager;

    var gameResult;

    const r = random(0, 100000);

    if(r <= 2000 && jackpool > betMoney * 500 * base) gameResult = model[500][random(0, model[500].length - 1)];
    else if(r <= 3000 && jackpool > betMoney * 400 * base) gameResult = model[400][random(0, model[400].length - 1)];
    else if(r <= 5000 && jackpool > betMoney * 300 * base) gameResult = model[300][random(0, model[300].length - 1)];
    else if(r <= 8000 && jackpool > betMoney * 200 * base) gameResult = model[200][random(0, model[200].length - 1)];
    else if(r <= 10000 && jackpool > betMoney * 100 * base) gameResult = model[100][random(0, model[100].length - 1)];
    else if(r <= 20000 && jackpool > betMoney * 50* base) gameResult = model[50][random(0, model[50].length - 1)];
    else if(r <= 30000 && jackpool > betMoney * 10* base)gameResult = model[10][random(0, model[10].length - 1)];
    else gameResult = model[0][random(0, model[0].length - 1)];

    crpc.addChipsSync({
        kid: KIND_ID,
        uid: 0,
        chips: 100,
        comment: "spin",
    }, (err, result)=>{

        if(err || result.code != 10000) return logger.error(err || result.message);

        var ret = {
            method: "baoboonchin.spin.res",
            ...gameResult
        };
     
        ret.awardData.prize = gameResult.peilv * betMoney;

        delete ret.peilv;

        delete ret.freegame;

        sock.sendText(JSON.stringify(ret));

    });
}

BaoBoonChin.prototype.freeType = (sock, args) =>
{
    sock.sendText(JSON.stringify({
        method: "baoboonchin.free.type.res",
        mX: 1,
        result: 0,
        times: 10,
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
    id: "BaoBoonChin",
    func: BaoBoonChin
};
