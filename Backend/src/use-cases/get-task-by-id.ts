import { Request, Response } from "express";
import { db } from "../database/db";
import { Task } from "../entities/task";

export const getTaskById = async (req: Request, res: Response) => {
    const id = req.params.id as string
    try {
        const taskRaw = await db.findOne(Task, { where: { id: id }, relations: { category: true } })
        const task = {
            id: taskRaw?.id,
            name: taskRaw?.name,
            isDone: taskRaw?.isDone,
            category: taskRaw?.category.id
        }
        if (!task) {
            res.json("No se encontró la tarea")
            return
        }
        res.json(task)

    } catch (e) {
        console.log(e);
    }
}