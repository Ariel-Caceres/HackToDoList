import { Request, Response } from "express";
import { db } from "../database/db";
import { Task } from "../entities/task";
export const GetAll = async (req: Request, res: Response) => {

    try {
        const tasksRaw = await db.find(Task, { relations: { category: true } })

        const tasks = tasksRaw.map((task) => {
            return {
                id: task.id,
                name: task.name,
                isDone: task.isDone,
                category: task.category.name
            }
        })
        console.log(tasks);

        res.json(tasks)
    } catch (e) {
        console.log("Error al buscar en la base de datos", e);
        res.status(500)
    }


}