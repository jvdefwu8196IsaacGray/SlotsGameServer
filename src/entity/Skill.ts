import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, Index } from 'typeorm';
import { Player } from './Player';


/**
 * 技能实体类
 */
@Entity()
@Index(['playerId', 'cfgId'], { unique: true })
export class Skill extends BaseEntity {
    /**
     * 主键id
     */
    @PrimaryGeneratedColumn()
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
     * 技能等级
     */
    @Column('tinyint')
    level: number = 1;
}
