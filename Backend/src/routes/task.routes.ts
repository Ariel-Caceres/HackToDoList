
import { Router } from "express";
import { create } from "../use-cases/create-task";
import { GetAll } from "../use-cases/get-tasks";
import { deleteTask } from "../use-cases/delete-tasks";
import { updateTask } from "../use-cases/update-task";
import { getTaskById } from "../use-cases/get-task-by-id";

export const TaskRoutes = Router()

TaskRoutes.post("/create", create)
TaskRoutes.get("/", GetAll)
TaskRoutes.delete("/:id", deleteTask)
TaskRoutes.put("/:id", updateTask)
TaskRoutes.get("/:id", getTaskById)