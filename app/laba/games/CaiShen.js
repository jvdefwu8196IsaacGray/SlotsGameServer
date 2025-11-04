require('../const.js');

require("../../../publics/rpc-client");

const bearcat = require('bearcat');

const {random} = require("../../../publics/global");

const KIND_ID = 1002;

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

    waldColManager : [false, false, false , false , false],

    peilv : [
        [0, 0, 2000],
        [0, 0, 2000],
        [20, 100, 500],
        [10, 40, 200],
        [7, 16, 80],
        [5, 12, 60],
        [3 ,8 ,40],
        [2, 6, 25],
        [1 ,4 ,15],
        [1, 3, 10],
    ],

    line: [
        [5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4],
        [10 ,11 ,12 ,13 ,14],
        [0, 6, 12, 8, 4],
        [10, 6, 2, 8, 14],
        [0, 1, 7, 3, 4],
        [10, 11, 7, 13, 14],
        [5, 11, 12, 13, 9],
        [5, 1, 2, 3, 9],
    ],
    
    // [1, 1, 0, 2]
    // [0, 1, 0, 2]
	
	checkLeftLine(plate, one, lineId)
    {
        var count = 1;

        var icon = one;

        if(one != 10)
        {
            var line = this.line[lineId];

            for(let i=1;i<5;++i)
            {
                var v = this.plateValue(plate, line[i]);
    
                if(v == 10) break;
                else if(one <= 1 || v <= 1 || v == one) ++count;
                else break;
    
                if(v > 1) one = v;
    
                if(v > icon) icon = v;
            }
        }

        return {
            icon: icon,
            count: count
        };
    },

    checkRightLine(plate, one, lineId)
    {      
        var count = 1;

        var icon = one;

        if(one != 10)
        {
            var line = this.line[lineId];

            for(let i=3;i>=0;--i)
            {
                var v = this.plateValue(plate, line[i]);
    
                if(v == 10) break;
                else if(one <= 1 || v <= 1 || v == one) ++count;
                else break;
    
                if(v > 1) one = v;
    
                if(v > icon) icon = v;
            }
        }

        return {
            icon: icon,
            count: count
        };
    },

    setWaldColum(col, plate)
    {
        switch(col)
        {
            case 0:
            {
                plate[0] = 0;
                plate[5] = 0;
                plate[10] = 0;
                break;
            }
            case 1:
            {
                plate[1] = 0;
                plate[6] = 0;
                plate[11] = 0;
                break;
            }
            case 2:
            {
                plate[2] = 0;
                plate[7] = 0;
                plate[12] = 0;
                break;
            }
            case 3:
            {
                plate[3] = 0;
                plate[8] = 0;
                plate[13] = 0;
                break;
            }
            default:
            {
                plate[4] = 0;
                plate[9] = 0;
                plate[14] = 0;
                break;
            }
        }
    },

    changeWaidColum(col, plate)
    {
        switch(col)
        {
            case 0:
            {
                plate[5] = random(1, 9);
                plate[10] = random(1, 9);
                break;
            }
            case 1:
            {
                plate[6] = random(1, 9);
                plate[11] = random(1, 9);
                break;
            }
            case 2:
            {
                plate[7] = random(1, 9);
                plate[12] = random(1, 9);
                break;
            }
            case 3:
            {
                plate[8] = random(1, 9);
                plate[13] = random(1, 9);
                break;
            }
            default:
            {
                plate[9] = random(1, 9);
                plate[14] = random(1, 9);
                break;
            }
        }
    },

    plateValue(plate, id)
    {
        switch (id)
        {
            case 0:
            case 5:
            case 10:
            {
                if(this.waldColManager[0]) return 0;

                return plate[id];
            }
            case 1:
            case 6:
            case 11:
            {
                if(this.waldColManager[1]) return 0;

                return plate[id];
            }
            case 2:
            case 7:
            case 12:
            {
                if(this.waldColManager[2]) return 0;

                return plate[id];
            }
            case 3:
            case 8:
            case 13:
            {
                if(this.waldColManager[3]) return 0;

                return plate[id];
            }
            default:
            {
                if(this.waldColManager[4]) return 0;

                return plate[id];
            }                      
        }   
    },

    generate(freegame)
    {
        this.waldColManager = [false, false, false , false , false];

        var waldColCount = 0;

        var plate = [];

        var awardData = { award: [], prize: 0, times: 0 };

        var peilv = 0;

        var scatter = 0;

        for(let i=0;i<15;++i)
        {
            var r = random(1, 100);

            if(i == 12)
            {
                plate.push(10);
                plate.push(10);
                plate.push(10);
                break;
            }
            else
            {
            
                if(r > 80) plate.push(random(0, 1));
                else if(r > 80 && !freegame) plate.push(10);
                else plate.push(random(2, 9));
            }
        }

        for(let i=0;i<5;++i)
        {
            if(plate[i] == 0)
            {
                ++waldColCount;

                this.waldColManager[i] = true;

                this.changeWaidColum(i, plate);    // 避免该列出现scatter
            }
        }

        if(freegame)
        {
            // 最多把1~3列变成wild 从第二列开始30%的概率

            var col = random(0, 4);

            this.waldColManager[col] = true;

            this.setWaldColum(col, plate);

            for(let i=0;i<5;++i) 
            {
                if(!this.waldColManager[col] && random(0, 100) <= 30)
                {
                    this.waldColManager[i] = true;

                    this.setWaldColum(i, plate);
                }
            }
        }
        else if(waldColCount < 2)
        {
            for(let i=0;i<5;++i)
            {
                this.waldColManager[i] = false;
            }
        }
        for(let i=0;i<15;++i)
        {
            if(plate[i] == 10)
            {
                if(++scatter >= 5) break;
            }
        }

        if(scatter == 5) awardData.times = 50;
        else if(scatter == 4) awardData.times = 20;
        else if(scatter == 3) awardData.times = 10;

        for(let i=0;i<this.line.length;++i)
        {
            var lpeilv = 0;

            var rpeilv = 0;

            var one = this.plateValue(plate, this.line[i][0]);

            var result = this.checkLeftLine(plate, one, i);

            if(result.count >= 3) lpeilv = this.peilv[result.icon][result.count - 3];

            if(result.count != 5)
            {
                var one_r = this.plateValue(plate, this.line[i][4]);

                var result_r = this.checkRightLine(plate, one_r, i);

                if(result_r.count >= 3) rpeilv = this.peilv[result_r.icon][result_r.count - 3];

                if(rpeilv > lpeilv) result = result_r;
            }

            if(lpeilv != 0 || rpeilv != 0)
            {
                awardData.award.push({
                    ["i"] : i,
                    ["l"] : result.count,
                    ["s"] : result.icon,
                    ["si"] : lpeilv > rpeilv ? 0 : 1,
                });
            }

            peilv += Math.max(lpeilv, rpeilv);
        }

        return {
            ["peilv"]: peilv,
            ["freegame"]: freegame,
            ["plate"]: plate,
            ["awardData"]: awardData
        };
    }

};

function CaiShen()
{       

}

// 请求进入房间
CaiShen.prototype.join = (sock, args) =>
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
CaiShen.prototype.spin = (sock, args) =>
{
    const {betMoney, columnCount, totalBet} = args;

    if(betMoney == undefined || totalBet == undefined || columnCount != 6 || betMoney != totalBet / 9 || (sock.freeCount > 0 && betMoney != 0 && totalBet != 0)) return;

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
            method: "caishen.spin.res",
            ...gameResult
        };

        ret.awardData.prize = gameResult.peilv * betMoney;

        delete ret.peilv;

        delete ret.freegame;

        sock.sendText(JSON.stringify(ret));

    });
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
    id: "CaiShen",
    func: CaiShen
};
