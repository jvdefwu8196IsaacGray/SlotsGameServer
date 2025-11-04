export enum GameCondition {
    /** 检查充值次数 */
    RECHARGE_TIMES,
    /** 检查充值金额 */
    RECHARGE_AMOUNT,
    /** 检查转生次数 */
    REBIRTH_TIMES,
    /** 检查等级达到 */
    LEVEL_ACHIEVED,
    /** 检查强化次数 */
    STRENGTH_TIMES,
    /** 检查金币消费 */
    GOLD_CONSUMPTION,
    /** 检查元宝消费 */
    YUAN_BAO_CONSUMPTION,
    /** 检查回收次数 */
    RECYCLE_TIMES,
    /** 检查强化等级 */
    STRENGTH_LEVEL,
    /** 检查全身强化等级 */
    FULL_STRENGTH_LEVEL,
    /** 检查最低穿戴装备等级 */
    LOWEST_EQUIPMENT_LEVEL,
    /** 检查最低穿戴装备品质 */
    LOWEST_EQUIPMENT_QUALITY,
    /** 检查金币大于等于 */
    GOLD_GREATER_THAN_OR_EQUAL,
    /** 检查仓库容量大于等于 */
    WAREHOUSE_CAPACITY_GREATER_THAN_OR_EQUAL,
    /** 检查完成指定类型任务 */
    COMPLETE_TASK_TYPE,
};

export enum CostType {
    GOLD,
    YUANBAO,
    OTHERS,
};

/** 品质 */
export enum ItemQuality {
    /** 普通 */
    Normal = 0,
    /** 优秀 */
    Excellent = 1,
    /** 稀有 */
    Rare = 2,
    /** 完美 */
    Historic = 3,
    /** 传说 */
    Legend = 4
};



/** 回收 */
export const RecycleType = {
    [ItemQuality.Normal]: "RecycleNormal",
    [ItemQuality.Excellent]: "RecycleExcellent",
    [ItemQuality.Rare]: "RecycleRare",
    [ItemQuality.Historic]: "RecycleHistoric",
    OtherJob: "RecycleOtherJob",
}

/** 品质回收加成 */
export const ItemQualityAdd = {
    [ItemQuality.Normal]: 1.0,
    [ItemQuality.Excellent]: 2.0,
    [ItemQuality.Rare]: 3.0,
    [ItemQuality.Historic]: 5.0,
    [ItemQuality.Legend]: 8.0
};

/** 职业 */
export enum JobTypes {
    /** 通用 */
    COMMON = 0,
    /** 战士 */
    WARRIOR = 1,
    /** 法师 */
    MAGE = 2,
    /** 道士 */
    Taoist = 3,
};

/** 道具类型 */
export enum ItemTypes {
    /** 装备 */
    Equipment = 0,
    /** 技能书 */
    SkillBook,
    /** 药水 */
    Potion,
    /** 传送 */
    Teleport,
    /** 事件类型 */
    Event,
    /** 材料 */
    Material,
};

/** 装备类型 */
export enum EquipTypes {
    /** 武器 */
    Weapon = 0,
    /** 头盔 */
    Helmet = 1,
    /** 衣服 */
    Armor = 2,
    /** 项链 */
    Necklace = 3,
    /** 手镯 */
    Bracelet = 4,
    /** 腰带 */
    Belt = 5,
    /** 戒指 */
    Ring = 6,
    /** 鞋子 */
    Boots = 7,
};

/** 装备部位 */
export const EquipPart = {
    /** 武器 */
    [EquipTypes.Weapon]: 0,
    /** 衣服 */
    [EquipTypes.Armor]: 1,
    /** 腰带 */
    [EquipTypes.Belt]: 2,
    /** 手镯 */
    [EquipTypes.Bracelet]: [3, 8],
    /** 戒指 */
    [EquipTypes.Ring]: [4, 9],
    /** 头盔 */
    [EquipTypes.Helmet]: 5,
    /** 项链 */
    [EquipTypes.Necklace]: 6,
    /** 鞋子 */
    [EquipTypes.Boots]: 7,
};