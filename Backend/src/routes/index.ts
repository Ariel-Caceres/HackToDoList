import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { TaskRoutes } from "./task.routes";

export const routes = Router()

routes.use("/categories", categoryRoutes)
routes.use("/tasks", TaskRoutes)