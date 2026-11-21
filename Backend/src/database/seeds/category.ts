import { Category } from "../../entities/category";
import { AppDataSource } from "../data-source";


export const CATEGORY_SEEDS = async () => {
    const studyCategory = new Category()
    studyCategory.name = "Estudio"
    studyCategory.id = "6c728111-ec47-4d3e-9df7-290acb276617"
    await AppDataSource.manager.save(studyCategory)
    const workCategory = new Category()
    workCategory.name = "Trabajo"
    workCategory.id = "e5c044c1-dfe2-4ccf-938f-c50efa816755"
    await AppDataSource.manager.save(workCategory)
    const foodCategory = new Category()
    foodCategory.name = "Comida"
    workCategory.id = "cd2f9b54-0fd7-4101-b6d7-86dd31e22639"
    await AppDataSource.manager.save(foodCategory)

}   