import { useState } from "react";
import type { createTask } from "../pages/Home";

export const useCreateTask = () => {
    const [loadingCreateTask, setLoadingCreateTask] = useState<boolean>(false)

    const create = async (newTask: createTask) => {

        try {
            setLoadingCreateTask(true)
            const res = await fetch("http://localhost:4000/api/tasks/create", {
                method: "POST",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify(newTask)
            }
            )
            console.log("Tarea creada con éxito", res.status);
        } catch (e) {
            console.log("Error al crear la tarea", e);
        } finally {
            setLoadingCreateTask(false)
        }
    }
    return ({ loadingCreateTask, create })
}