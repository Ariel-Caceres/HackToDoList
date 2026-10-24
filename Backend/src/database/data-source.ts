import "reflect-metadata";
import { DataSource } from "typeorm";
import { Photo } from "../entities/photo";
export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: false,
    entities: [Photo],
});
