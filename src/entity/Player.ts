import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, BaseEntity, Index, CreateDateColumn } from 'typeorm';
import { Item } from './Item';
import { User } from './User';
import { Part } from './Part';
import { TableCfgItem } from '../tables/TableCfgItem';
import { ItemTypes } from '../def';

/**
 * 玩家实体类
 */
@Entity()
@Index(['name'], { unique: true })
@Index(['id', 'name'], { unique: true })
export class Player extends BaseEntity {
    /** 玩家ID */
    @PrimaryGeneratedColumn()
    public id: number = 0;

    @Column()
    public userId: number;

    /** 玩家名称 */
    @Column({ length: 32 })
    public name: string = '';

    /** 背包最大容量 */
    @Column()
    public bagMax: number = 100;

    /** 战斗力 */
    @Column()
    public power: number = 0;

    /** 玩家金币 */
    @Column({ type: 'bigint', unsigned: true })
    public gold: number = 0;

    /** 玩家元宝 */
    @Column({ type: 'bigint', unsigned: true })
    public yuanbao: number = 0;

    /** 累计充值 */
    @Column({ type: 'bigint', unsigned: true })
    public totalRecharge: number = 0;

    /** 玩家职业 */
    @Column('tinyint')
    public job: number = 0;

    /** 等级 */
    @Column('tinyint')
    public level: number = 1;

    /** 玩家转生次数 */
    @Column('tinyint')
    public rebirth: number = 0;

    /** 上次签到时间 */
    @Column({ type: 'bigint', unsigned: true })
    public lastSignTime: number = 0;

    /** 签到进度 */
    @Column('tinyint')
    public signProgress: number = 0;

    /** 成长基金开通状态 */
    @Column('tinyint')
    public growthState1: number = 0;

    @Column('tinyint')
    public growthState2: number = 0;

    @CreateDateColumn()
    public createTime: Date;

    /** 物品数量(装备不记录) */
    public itemCounts: Map<number, number> = new Map<number, number>();

    public settings: Record<string, number>;

    public games: Record<string, number>;

    public bagCount: number = 0;

    public initCaches(settings: Record<string, string>, games: Record<string, string>) {
        this.games = {};
        this.settings = {};
        for (const k in games) {
            this.games[k] = parseInt(games[k]);
        }
        for (const k in settings) {
            this.settings[k] = parseInt(settings[k]);
        }
        delete this.games['loginDay'];
    }

    public initPackage(items: Item[], parts: Part[]) {
        this.bagCount = items.length;
        items.forEach((item) => {
            const cfg = TableCfgItem.getConfig(item.cfgId);
            if (cfg.type != ItemTypes.Equipment) {
                const count = (this.itemCounts.get(item.cfgId) || 0) + item.count;
                this.itemCounts.set(item.cfgId, count);
            }
        });
        parts.forEach((part) => {
            if (part.itemId != -1) {
                --this.bagCount;
            }
        });
    }
}
