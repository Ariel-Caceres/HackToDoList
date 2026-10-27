import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "../entities/category";
export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: false,
    entities: [Category],
});
