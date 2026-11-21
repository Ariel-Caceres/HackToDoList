import { Request, Response } from "express";
import { db } from "../database/db";
import { Task } from "../entities/task";

export const updateIsDone = async (req: Request, res: Response) => {

    try {
        const { id } = req.body

        if (!id) {
            res.json("Datos insuficientes")
            return
        }
        const task = await db.findOneBy(Task, { id: id })

        if (!task) {
            res.json("Tare no encontrada")
            return
        }
        await db.update(Task, { id: id },
            {
                isDone: !task.isDone
            }
        )
        res.json("Tarea actualizada correctamente")
    } catch (e) {
        console.log(e);
        res.json("Error al actualizar la tarea")

    }

}