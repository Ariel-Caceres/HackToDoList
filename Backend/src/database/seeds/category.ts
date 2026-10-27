import { Category } from "../../entities/category";
import { AppDataSource } from "../data-source";


export const CATEGORY_SEEDS = async () => {
    const studyCategory = new Category()
    studyCategory.name = "Estudio"
    await AppDataSource.manager.save(studyCategory)
    const workCategory = new Category()
    workCategory.name = "Trabajo"
    await AppDataSource.manager.save(workCategory)
    const foodCategory = new Category()
    foodCategory.name = "Comida"
    await AppDataSource.manager.save(foodCategory)

}   