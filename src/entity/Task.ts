import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, Index } from 'typeorm';
import { Player } from './Player';

/**
 * 任务实体类
 */
@Entity()
@Index(['playerId'], { unique: false })
@Index(['playerId', 'type', 'cfgId'], { unique: true })
export class Task extends BaseEntity {
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
	@Column({ type: 'tinyint' })
	type: number = 0;

	/**
	 * 配置项id
	 */
	@Column()
	cfgId: number;
}
