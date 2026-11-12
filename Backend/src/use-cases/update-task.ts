import { Request, Response } from "express"
import { db } from "../database/db";
import { Task } from "../entities/task";

export const updateTask = async (req: Request, res: Response) => {

    const { name, category, isDone, id } = req.body

    if (!name || !category || isDone == undefined || !id) {
        res.json("Datos insuficientes ")
        return
    }
    try {
        const task = await db.findOne(Task, { where: { id: id } })
        if (!task) {
            res.json("No se encontró la tarea")
            return
        }
        await db.update(Task, { id: id }, {
            id: id,
            category: category,
            isDone: isDone as boolean,
            name: name
        })


        res.json({ name, category, isDone, id })

    } catch (e) {
        console.log(e);
        res.json("Error al actualizar la tarea")
    }

}