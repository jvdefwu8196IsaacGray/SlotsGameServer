const random_seed = new Date().getTime();

enum GAME_TYPE
{
    PKN_NULL  = 0, // 不中
    PKN_HJTHS = 1, // 皇家同花顺
    PKN_WM = 2,    // 五梅
    PKN_THS = 3,   // 同花顺
    PKN_SM = 4,    // 四梅
    PKN_HL = 5,    // 葫芦
    PKN_SZ = 6,    // 顺子
    PKN_ST = 7,    // 三条
    PKN_LD = 8,    // 两对
    PKN_DZ = 9,    // 大一对(J以上)
}

enum GAME_SUIT
{
    PKK_SPADE   = 0,    // 黑桃
    PKK_HEART   = 1,    // 紅心
    PKK_DIAMOND = 2,    // 方塊
    PKK_CLUB    = 3,    // 梅花
    PKK_JOKER_MIN = 4,    // 小鬼
    PKK_JOKER_MAX = 5,    // 大鬼
}

enum GAME_RANK
{
    PKN_NULL    = 0,    
    PKN_ACE     = 1,             
    PKN_TWO     = 2,            
    PKN_THREE   = 3,          
    PKN_FOUR    = 4,           
    PKN_FIVE    = 5,         
    PKN_SIX     = 6,           
    PKN_SEVEN   = 7,          
    PKN_EIGHT   = 8,         
    PKN_NINE    = 9,          
    PKN_TEN     = 10,            
    PKN_JACK    = 11,           
    PKN_QUEEN   = 12,          
    PKN_KING    = 13, 
}

function random(min, max)
{
    return Math.round(Math.random() * (max - min)) + min;
}

// 计算牌类
export function calcCard(cards, isHold)
{
    const list = [...cards].sort((a, b) => {return a.rank - b.rank});

    // 大小王数量    
    var kind = 0;
    // 同花
    var th = [[], [], [], []];
    // 条子
    var tz = {};
    // 顺子
    var sz = [];

    /* 计算王的个数 */
    for(let i=0;i<5;++i) if(list[i].suit == 4 || list[i].suit == 5) ++kind;

    /* 检测同花 */
    for(let i=0;i<4;++i) for(let n=0;n<5;++n) if(list[n].suit == i || list[n].suit == 4 || list[n].suit == 5) th[i].push(list[n].index);

    /* 检测条子 */
    for(let i=0;i<5;++i) if(tz[list[i].rank] == undefined) tz[list[i].rank] = [list[i].index] else tz[list[i].rank].push(list[i].index);

    /* 检测顺子 */
    for(let i=0;i<3;++i)
    {
        var pSz = [i];

        var last = {...list[i]};

        // 转换为14计算
        if(last.rank == 1) last.rank = 14;

        for(let n=i+1;n<5;++n)
        {
            var isSz = list[n].rank - last == 10;

            if(isSz || list[n].suit == 4 || list[n].suit == 5) pSz.push(list[n].index);
        }

        if(pSz.length > 1) sz.push(pSz);
    }

    let maxTh = null;

    let maxTz = null;

    let maxSz = null;

    for(let i=0;i<4;++i) if(th[i].length > 0 && (maxTh == null || th[i].length > maxTh.length)) maxTh = th[i];

    for(let i=0;i<sz.length;++i) if(sz[i].length > 0 && (maxSz == null || sz[i].length > maxSz.length)) maxSz= sz[i];

    for(let item of tz) if(item.length > 0 && (maxTz == null || item.length > maxTz.length)) maxTz= item;

    let type = 0;

    let hold = undefined;

    // 皇家同花顺
    if(maxTh && maxSz && maxSz.length == 5 && maxTh.length == 5 && cards[maxTh[0]].rank == 10) type = GAME_TYPE.PKN_HJTHS;
    // 五梅
    else if(maxTz && maxTz.length == 5) type = GAME_TYPE.PKN_WM;
    // 同花顺
    else if(maxTh && maxSz && maxSz.length == 5 && maxTh.length == 5) type = GAME_TYPE.THS;
    // 四梅
    else if(maxTz && maxTz.length == 4) type = GAME_TYPE.SM;
    // 葫芦
    else if(th.length == 2 && ((th[0].length == 3 && th[1].length == 2) || (th[0].length == 2 && th[1].length == 3))) type = GAME_TYPE.HL;
    // 顺子
    else if(maxSz && maxSz.length == 5) type = GAME_TYPE.SZ;
    // 三梅
    else if(maxTz && maxTz.length == 3) type = GAME_TYPE.SM;
    // 两对
    else if(tz && tz.length == 2 && tz[0].length == 2 && tz[1].length == 2) type = GAME_TYPE.LD;
    // 大一对(J以上)
    else if(maxTz && maxTz.length == 2 && cards[maxTz[0]].rank >= 11) type = GAME_TYPE.DZ;

    // 自动留牌
    if(isHold)
    {
        if(type == 0)
        {
            if(maxTh && maxTh.length >= 3) hold = maxTh;

            if(maxSz && maxSz.length >= 3 && (hold == undefined || hold.length < maxSz.length)) hold = maxSz;

            if(maxTz) hold = maxTz;
        }
        else
        {
            if(type == GAME_TYPE.PKN_HJTHS || type == GAME_TYPE.THS || type == GAME_TYPE.SZ || type ==  GAME_TYPE.HL || type ==  GAME_TYPE.WM || type ==  GAME_TYPE.TH) hold = [0,1,2,3,4];
            
            else if(type == GAME_TYPE.SM || type == GAME_TYPE.DZ) hold = maxTz;

            else if(type == GAME_TYPE.LD) hold[tz[0][0], tz[0][1], tz[1][0], tz[1][1]];
        }
    }

    return {
        cards: cards,
        type: type,
        hold: hold
    };
}

// 生成扑克
export function generatePoker()
{
    var cards = [];

    for(let i=0;i<5;++i)
    {
        cards.push
        (        
            {
                rank: random(1, 13),

                suit: random(1, 6),

                index: i
            }
        );
    }

    var result = calcCard(cards, true);

    return result;
}

