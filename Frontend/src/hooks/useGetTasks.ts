import { useEffect, useState } from "react"
import type { TaskEntity } from "../entities/task.entity"

export const useGetTasks = (data: string) => {
    const [loadingTasks, setLoadingTasks] = useState<boolean>(false)
    const [tasks, setTasks] = useState<TaskEntity[]>([])


    const getAllTasks = async () => {
        try {
            setLoadingTasks(true)
            const res = await fetch(`${import.meta.env.VITE_API_URL + "/api/tasks/"}${data}`)
            const tasksDb = await res.json()

            setTasks(tasksDb)
        } catch (e) {
            console.log(e);
        } finally {
            setLoadingTasks(false)
        }
    }
    useEffect(() => {
        const getDataAsync = async () => {
            getAllTasks()
        }
        getDataAsync()
    }, [data])

    return { tasks, loadingTasks, getAllTasks }
}   
