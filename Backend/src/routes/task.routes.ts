
import { Router } from "express";
import { create } from "../use-cases/create-task";
import { GetAll } from "../use-cases/get-tasks";
import { deleteTask } from "../use-cases/delete-tasks";

export const TaskRoutes = Router()

TaskRoutes.post("/create", create)
TaskRoutes.get("/", GetAll)
TaskRoutes.delete("/:id", deleteTask)