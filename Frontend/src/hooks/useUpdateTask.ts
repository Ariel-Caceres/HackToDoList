import type { TaskEntity } from "../entities/task.entity";

export const useUpdateTask = () => {

    const update = async (newTask: TaskEntity) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/task/${newTask.id}`, {
                method: "PUT",
                headers: { "Content-type": "Application/json" },
                body: JSON.stringify(newTask)
            })
            if (res.ok) {
                console.log("Existo la actualización ");

            }


        } catch (e) {
            console.log(e);

        }
    }

    return { update }
}