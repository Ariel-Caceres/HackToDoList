import { Request, Response } from "express";
import { db } from "../database/db";
import { Task } from "../entities/task";
import { UUID } from "crypto";

export const GetAll = async (req: Request, res: Response) => {

    const category = req.query.category as string | undefined
    const isDone = req.query.isDone as string | undefined

    try {

        const where = {
            ...(category && { category: { id: category } }),
            ...(isDone && { isDone: isDone == "true" ? true : false })
        }


        const tasksFilter = await db.find(Task, { where: where, relations: { category: true } })

        const tasks = tasksFilter.map((task) => {
            return {
                id: task.id,
                name: task.name,
                isDone: task.isDone,
                category: task.category.name
            }
        })

        res.json(tasks)
    } catch (e) {
        console.log("Error al buscar en la base de datos", e);
        res.status(500)
    }


}