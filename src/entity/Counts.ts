import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, OneToOne, Index } from 'typeorm';
import { Player } from './Player';

/** 数据统计实体类 */
@Entity()
@Index(['playerId', 'type'], { unique: true })
export class Counts extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 所属玩家
     */
    @Column()
    playerId: number;

    /**
     * 类型
     */
    @Column({ type: 'tinyint'})
    type: number = 0;

    /** 充值次数 */
    @Column()
    rechargeTimes: number = 0;

    /** 充值金额 */
    @Column()
    rechargeAmount: number = 0;

    /** 强化次数 */
    @Column()
    strengthTimes: number = 0;

    /** 回收次数 */
    @Column()
    recycleTimes: number = 0;

    /** 元宝消费 */
    @Column()
    yuanbaoConsumption: number = 0;

    /** 金币消费 */
    @Column()
    goldConsumption: number = 0;

    /** 上次更新时间 */
    @Column()
    lastUpdateTime: number;
}
