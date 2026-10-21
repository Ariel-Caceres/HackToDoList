import { Pencil, Trash } from "lucide-react"
import { CATEGORY_TYPES, type categoryTypes } from "../types/categoryTypes";
import { useState } from "react";
import { DeleteTaskModal } from "./DeleteTaskModal";
import { EditTaskModal } from "./EditTaskModal";
export interface TaskProps {
    name: string;
    category: categoryTypes;
    isDone: boolean;
}
export const Task = ({ name, category, isDone }: TaskProps) => {

    const [checked, setChecked] = useState<boolean>(isDone)
    const [showModalDelete, setShowModalDelete] = useState<boolean>(false)
    const [showModalEdit, setShowEditModal] = useState<boolean>(false)
    const categoryVariants: Record<categoryTypes, string> = {
        [CATEGORY_TYPES.FOOD]: "border-yellow-200 text-orange-700 text-sm p-1 px-2 bg-yellow-50/50",
        [CATEGORY_TYPES.WORK]: "border-violet-200 text-violet-700 text-sm p-1 px-2 bg-violet-50/50",
        [CATEGORY_TYPES.STUDY]: "border-indigo-200 text-indigo-700 text-sm p-1 px-2 bg-indigo-50/50",
    }

    const handleChecked = () => {
        setChecked(!checked)
    }

    return (
        <>
            < div className="flex w-full justify-between gap-5 p-5 items-center  border-b border-gray-200  " >

                <div className="flex w-5 h-5 rounded-md border justify-center  items-center   border-gray-400 overflow-hidden ">
                    <input type="checkbox" onChange={handleChecked} checked={checked} className="w-5.25 h-5.25 accent-gray-800 cursor-pointer  checked:appearance-auto shrink-0  appearance-none" />
                </div>
                <div className={`items-center flex-1 text-xl font-semibold flex gap-5`}>
                    <span className={`${checked ? "line-through text-gray-400" : ""}`}>
                        {name}
                    </span>
                    <div className={`border rounded-lg no-underline ${categoryVariants[category]}`}>
                        <span className="">{category}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className=" text-gray-400 cursor-pointer hover:bg-gray-200 hover:text-black p-3 rounded-2xl" onClick={() => setShowEditModal(true)}>
                        <Pencil size={20} className="" />
                    </div>
                    <div className="text-gray-400 cursor-pointer hover:bg-red-100 hover:text-red-600 p-3 rounded-2xl" onClick={() => setShowModalDelete(true)}>
                        <Trash size={20} />
                    </div>
                </div>

            </div >
            {showModalDelete ?
                <DeleteTaskModal name={name} cancelDelete={() => setShowModalDelete(false)} />
                : ""}

            {showModalEdit ? <EditTaskModal closeModal={() => setShowEditModal(false)} /> : ""}
        </>
    )

}