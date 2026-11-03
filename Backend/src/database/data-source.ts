import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "../entities/category";
import { Task } from "../entities/task";
export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: false,
    entities: [Category, Task],
});
