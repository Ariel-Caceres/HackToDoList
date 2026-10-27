import { Request, Response } from "express";
import { db } from "../database/db";
import { Category } from "../entities/category";

export const getAll = async (req: Request, res: Response) => {
    try {
        const categories = await db.find(Category)

        res.json(categories)
    } catch (e) {
        console.log("Error interno del servidor");

    }
}