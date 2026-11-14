import { Request, Response } from "express";
import { db } from "../database/db";
import { Task } from "../entities/task";
import { UUID } from "crypto";

export const GetAll = async (req: Request, res: Response) => {

    const category = req.query.category as string | undefined
    const isDone = req.query.isDone as unknown as boolean | undefined
    try {
        const tasksRaw = await db.find(Task, { relations: { category: true } })

        const tasksFilter = await db.find(Task, { where: { category: { id: category, }, isDone: isDone }, relations: { category: true } })
        console.log(category);

        const source = category ? tasksFilter : tasksRaw
        const tasks = source.map((task) => {
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