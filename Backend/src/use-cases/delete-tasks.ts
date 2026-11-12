import { Request, Response } from "express";
import { db } from "../database/db";
import { Task } from "../entities/task";
export const deleteTask = async (req: Request, res: Response) => {
    const id = req.params.id as string

    try {
        const task = await db.findOneBy(Task, { id: id })
        await db.delete(Task, task)
        res.json("Tarea eliminada con éxito")
    } catch (e) {
        res.json("Error al eliminar la tarea")
    }
}