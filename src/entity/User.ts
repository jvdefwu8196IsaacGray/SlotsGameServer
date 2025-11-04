import { BaseEntity, Column, CreateDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "./Player";

/**
 * 用户实体类
 */
@Entity()
@Index(['account'], { unique: true })
export class User extends BaseEntity {

    /** 用户ID */
    @PrimaryGeneratedColumn()
    public uid: number = 0;

    /** 账号 */
    @Column()
    public account: string;

    /** 密码 */
    @Column()
    public password: string;

    /** 邮件 */
    @Column()
    public email: string;

    @CreateDateColumn()
    public createTime: Date;

    /** 角色 */
    public player: Player[] = [];
}