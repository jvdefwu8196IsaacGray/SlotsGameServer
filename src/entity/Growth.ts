import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, Index } from 'typeorm';
import { Player } from './Player';

/**
 * 部位实体类
 */
@Entity()
@Index(['playerId'], { unique: false })
@Index(['playerId', 'type', 'cfgId'], { unique: true })
export class Growth extends BaseEntity {
    /**
     * 主键id
     */
    @PrimaryGeneratedColumn()
    id: number;

    @Column('tinyint')
    cfgId: number;

    @Column('tinyint')
    type:number;

    @Column()
    playerId:number;
}
