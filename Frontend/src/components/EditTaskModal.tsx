import { ListCheck, X } from "lucide-react"
import { CATEGORY_TYPES } from "../types/categoryTypes"

interface EditTaskModalProps {
    closeModal: () => void,
}

export const EditTaskModal = ({ closeModal }: EditTaskModalProps) => {


    return (
        <div className="w-full h-full absolute backdrop-blur-xs bg-gray-500/60 top-0 left-0 flex justify-center items-center">
            <div className="flex top-1/2 left-1/2 -translate-x w-lg bg-white rounded-2xl flex-col p-8">
                <div className="flex gap-3 justify-between w-full  items-center pb-8">
                    <ListCheck size={18} />
                    <span className="grow font-geist font-semibold text-xl">Editar Tarea</span>
                    <X size={20} className="text-gray-500 cursor-pointer" onClick={closeModal} />
                </div>
                <div className="flex flex-col gap-5">
                    <label htmlFor="" className="flex flex-col gap-3 font-semibold">Titulo de la tarea
                        <input type="text" value={"tarea"} className="border outline-0 rounded-2xl border-gray-300 p-3 font-normal" />
                    </label>

                    <label htmlFor="" className="flex flex-col w-full gap-3 font-semibold">Categoría
                        <select name="" id="" className="w-full border border-gray-300 rounded-2xl p-3 font-normal" >
                            <option value={CATEGORY_TYPES.FOOD}>Comida</option>
                            <option value={CATEGORY_TYPES.WORK}>Trabajo</option>
                            <option value={CATEGORY_TYPES.STUDY}>Estudio</option>
                        </select>
                    </label>
                    <div className="flex gap-3">
                        <div className="flex w-5 h-5 rounded-md border justify-center  items-center   border-gray-400 overflow-hidden ">
                            <input type="checkbox" className="w-5.25 h-5.25 accent-gray-800 cursor-pointer  checked:appearance-auto shrink-0  appearance-none" />
                        </div>
                        <span>
                            Marcar como completada
                        </span>
                    </div>

                </div>
                <div className="w-full flex justify-end gap-3 pt-10 ">
                    <button className="border border-gray-200 p-2 rounded-xl cursor-pointer px-4" onClick={closeModal}>Cancelar</button>
                    <button className="rounded-xl bg-black p-1 px-4 cursor-pointer text-white">Guardar Cambios</button>
                </div>
            </div>
        </div>
    )
}