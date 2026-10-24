import type { EntityManager } from "typeorm";
import { AppDataSource } from "./data-source";

export let db: EntityManager;

export async function initDB() {
    const ds = await AppDataSource.initialize();
    db = ds.manager;
    console.log("DB Ready");
}
