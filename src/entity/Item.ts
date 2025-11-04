import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, Index, CreateDateColumn, DeleteDateColumn } from 'typeorm';
import { Player } from './Player';

/**
 * ItemData实体类
 */
@Entity()
@Index(['id', 'playerId'], { unique: true })
@Index(['playerId', 'count'], { unique: false })
@Index(['playerId', 'cfgId'], { unique: false })
export class Item extends BaseEntity {
    /**
     * 主键id
     */
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    /**
     * 所属玩家
     */
    @Column()
    playerId: number;

    /**
    * 配置项id
    */
    @Column()
    cfgId: number;

    /**
     * 品质
     */
    @Column('tinyint')
    quality: number = 0;

    /**
     * 数量
     */
    @Column()
    count: number = 1;

    /**
     * 附加属性
     */
    @Column('text')
    attr: string = '';

    /**
    * 洗炼品质
    */
    @Column('tinyint')
    tempQuality: number = 0;

    /**
     * 洗炼属性
    */
    @Column('text')
    tempAttr: string = ''

    @Column()
    isLock: boolean = false;

    @CreateDateColumn()
    public createTime: Date;

}
