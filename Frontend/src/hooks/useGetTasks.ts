import { useEffect, useState } from "react"
import type { TaskEntity } from "../entities/task.entity"


interface RequestTasks {
    tasks: TaskEntity[]
    dones: number,
    pending: number,
    total: number
}
export const useGetTasks = (filters: string) => {
    const [loadingTasks, setLoadingTasks] = useState<boolean>(false)
    const [data, setData] = useState<RequestTasks>({
        tasks: [],
        dones: 0,
        pending: 0,
        total: 0
    })


    const getAllTasks = async () => {
        try {
            setLoadingTasks(true)
            const res = await fetch(`${import.meta.env.VITE_API_URL + "/api/tasks/"}${filters}`)
            const tasksDb = await res.json()

            setData(tasksDb)
        } catch (e) {
            console.log(e);
        } finally {
            setLoadingTasks(false)
        }
    }
    useEffect(() => {
        const getDataAsync = async () => {
            await getAllTasks()
        }
        getDataAsync()
    }, [filters])

    return { data, loadingTasks, getAllTasks }
}   
