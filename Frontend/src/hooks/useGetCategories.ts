import { useEffect, useState } from "react";
import type { Category } from "../entities/category.entitie";

export const useGetCategories = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const getAll = async () => {

            setLoading(true)
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL + "/api/categories"}`)
                const categoriesRaw = await res.json()
                setCategories(categoriesRaw)
            } catch (e) {
                console.log("Error al traer las categorías", e);
            } finally {
                setLoading(false)
            }
        }
        getAll()
    }, [])

    return { categories, loading }
}


