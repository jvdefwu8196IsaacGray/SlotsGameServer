import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Item } from "./entity/Item"
import { Mail } from "./entity/Mail"
import { Player } from "./entity/Player"
import { Skill } from "./entity/Skill"
import { Task } from "./entity/Task"
import { Counts } from "./entity/Counts"
import { Growth } from "./entity/Growth"
import { Part } from "./entity/Part"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Junyu123",
    database: "game_cq",
    synchronize: true,
    logging: false,
    entities: [
        Counts, Growth, Item,
        Mail, Part, Player, Skill,
        Task, User
    ],
    migrations: [],
    subscribers: [],
    poolSize: 50,
})
