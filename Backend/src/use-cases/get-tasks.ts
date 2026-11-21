import { Request, Response } from "express";
import { db } from "../database/db";
import { Task } from "../entities/task";

export const GetAll = async (req: Request, res: Response) => {

    const category = req.query.category as string | undefined
    const isDone = req.query.isDone as string | undefined

    try {
        const where = {
            ...(category && { category: { id: category } }),
            ...(isDone && { isDone: isDone == "true" ? true : false })
        }
        const total = await db.count(Task, { where: { category: { id: category } } })
        const dones = await db.count(Task, { where: { isDone: true, category: { id: category } } })
        const pending = await db.count(Task, { where: { isDone: false, category: { id: category } } })
        const tasksFilter = await db.find(Task, { where: where, relations: { category: true } })

        const tasks = tasksFilter.map((task) => {
            return {
                id: task.id,
                name: task.name,
                isDone: task.isDone,
                category: task.category.name
            }
        })

        res.json({ tasks, total, dones, pending })
    } catch (e) {
        console.log("Error al buscar en la base de datos", e);
        res.status(500)
    }


}