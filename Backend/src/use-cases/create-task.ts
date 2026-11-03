import { Request, Response } from "express";
import { Task } from "../entities/task";
import { db } from "../database/db";

export const create = async (req: Request, res: Response) => {
    try {
        const { name, category } = req.body
        const newTask = new Task()
        newTask.name = name
        newTask.category = category
        newTask.isDone = false
        await db.save(Task, newTask)
        res.json("Tarea creada con éxito")
    } catch (e) {
        console.log("Exploto el server", e);
    }
}