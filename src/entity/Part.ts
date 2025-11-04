import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';

/**
 * 部位实体类
 */
@Entity()
@Index(['playerId'])
@Index(['playerId', 'partIndex'], { unique: true })
export class Part extends BaseEntity {
    /**
     * 主键id
    */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 物品id
     */
    @Column({ type: 'bigint' })
    itemId: number = 0;

    /**
     * 类型
     */
    @Column({ type: 'tinyint' })
    partIndex: number = 0;

    /**
     * 强化
     */
    @Column({ type: 'tinyint' })
    strength: number = 0;

    /**
     * 强化幸运值
     */
    @Column({ type: 'tinyint' })
    lucky: number = 0;

    @Column()
    playerId: number;
}
