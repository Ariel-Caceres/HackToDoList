
import { Router } from "express";
import { create } from "../use-cases/create-task";

export const TaskRoutes = Router()

TaskRoutes.post("/create", create) 