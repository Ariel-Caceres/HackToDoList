export const CATEGORY_TYPES = {
    FOOD: "Comida",
    WORK: "Trabajo",
    STUDY: "Estudio"
} as const

export type categoryTypes = (typeof CATEGORY_TYPES)[keyof typeof CATEGORY_TYPES]