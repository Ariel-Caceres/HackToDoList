import { ListCheck, X } from "lucide-react"
import { useUpdateTask } from "../hooks/useUpdateTask"
import { useGetTaskById } from "../hooks/useGetTaskById"
import { useEffect, useState } from "react"
import { useGetCategories } from "../hooks/useGetCategories"
interface EditTaskModalProps {
    closeModal: () => void,
    id: string
    refetch: () => void
}

export interface EditTaskEntity {
    id: string,
    name: string,
    category: string,
    isDone: boolean
}

export const EditTaskModal = ({ closeModal, id, refetch }: EditTaskModalProps) => {
    const { categories } = useGetCategories()
    const { update } = useUpdateTask()
    const { getTaskById, loading } = useGetTaskById()
    const [task, setTask] = useState<EditTaskEntity>({
        name: "",
        isDone: false,
        category: "",
        id: ""
    })
    const handleChangeName = (name: string) => {
        setTask((prev) => ({ ...prev, name: name }))
    }

    const handleChangeIsDone = () => {
        setTask((prev) => ({ ...prev, isDone: !prev.isDone }))
    }

    const handleChangeCategory = (categoryId: string) => {
        setTask((prev) => ({ ...prev, category: categoryId }))
    }
    console.log(task.isDone);


    useEffect(() => {
        const fetch = async () => {
            const res = await getTaskById(id)
            console.log(res);
            setTask(res)
        }
        fetch()
    }, [id])

    const handleSubmit = async () => {
        await update(task)
        refetch()
    }

    if (loading) return
    if (!task) return
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
                        <input type="text" value={task.name} className="border outline-0 rounded-2xl border-gray-300 p-3 font-normal" onChange={(e) => handleChangeName(e.target.value)} />
                    </label>

                    <label htmlFor="" className="flex flex-col w-full gap-3 font-semibold">Categoría
                        <select name="" id="" value={task.category} className="w-full border border-gray-300 rounded-2xl p-3 font-normal" onChange={(e) => handleChangeCategory(e.target.value)}>
                            {categories.map(c =>
                                <option value={c.id} key={c.id}>
                                    {c.name}
                                </option>
                            )}

                        </select>
                    </label>
                    <div className="flex gap-3">
                        <div className="flex w-5 h-5 rounded-md border justify-center  items-center   border-gray-400 overflow-hidden ">
                            <input type="checkbox" checked={task.isDone} className="w-5.25 h-5.25 accent-gray-800 cursor-pointer  checked:appearance-auto shrink-0  appearance-none" onChange={() => handleChangeIsDone()} />
                        </div>
                        <span>
                            Marcar como completada
                        </span>
                    </div>

                </div>
                <div className="w-full flex justify-end gap-3 pt-10 ">
                    <button className="border border-gray-200 p-2 rounded-xl cursor-pointer px-4" onClick={closeModal}>Cancelar</button>
                    <button className="rounded-xl bg-black p-1 px-4 cursor-pointer text-white" onClick={() => handleSubmit()}>Guardar Cambios</button>
                </div>
            </div>
        </div>
    )
}