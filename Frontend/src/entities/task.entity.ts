import type { categoryTypes } from "../types/categoryTypes";

export interface TaskEntity {
    id: string,
    name: string,
    category: categoryTypes,
    isDone: boolean
}