import { Router } from "express";
import { getAll } from "../use-cases/get-categories";

export const categoryRoutes = Router()

categoryRoutes.get("/", getAll)