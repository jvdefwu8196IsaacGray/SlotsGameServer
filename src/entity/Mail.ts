import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, Index } from 'typeorm';
import { Player } from './Player';

/**
 * 邮件实体类
 */
@Entity()
@Index(['playerId'], { unique: false })
@Index(['id', 'receiveTime'], { unique: true })
export class Mail extends BaseEntity {
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
     * 类型
     */
    @Column({ type: 'tinyint'})
    type: number = 0;

    /**
     * 邮件标题
     */
    @Column()
    title: string;

    /**
     * 邮件内容
     */
    @Column()
    content: string;

    /**
     * 奖励内容，可能为空
     */
    @Column()
    rewards: string;

    /**
     * 发送时间
     */
    @Column('bigint')
    startTime: number = 0;

    /** 
     * 领取时间
    */
    @Column('bigint')
    receiveTime: number = 0;
}
