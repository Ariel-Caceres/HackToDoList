import { useState } from "react";

export const useGetTaskById = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const getTaskById = async (id: string) => {

        try {
            setLoading(true)
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tasks/${id}`)
            const data = await res.json()

            return data
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false)
        }

    }
    return { loading, getTaskById }
}