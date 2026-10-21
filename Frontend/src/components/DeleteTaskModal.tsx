import { Trash } from "lucide-react"

interface DeleteTaskModalProps {
    name: string,
    cancelDelete: () => void,
}
export const DeleteTaskModal = ({ name, cancelDelete }: DeleteTaskModalProps) => {
    return (
        <div className="">
            <div className=" backdrop-blur-xs  w-screen h-screen absolute bg-gray-500/60 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <span className="w-full">.</span>
            </div>

            <div className="brightness-100 absolute top-1/2 left-1/2 border-gray-50 rounded-2xl -translate-y-1/2 -translate-x-1/2 bg-white p-5 border  flex flex-row gap-5 w-lg">
                <div className="rounded-4xl h-fit p-3 bg-red-50 text-red-600 ">
                    <Trash size={22} />
                </div>
                <div className="">
                    <div className="pb-3">
                        <span className="font-geist font-semibold text-xl ">
                            ¿Eliminar tarea?
                        </span>
                    </div>
                    <div>
                        <span className="pr-1 text-gray-500">
                            ¿Estas seguro de que deseas eliminar
                        </span>
                        <span className="font-semibold">
                            "{name}"?
                        </span>
                        <span className="text-gray-500"> esta acción no se puede deshacer</span>
                    </div>
                    <div className="w-full flex pt-10 justify-end gap-5">
                        <button className="border border-gray-400 p-2 w-fit  rounded-2xl cursor-pointer" onClick={cancelDelete}>
                            Cancelar
                        </button>
                        <button className="flex items-center gap-2 rounded-2xl border p-2 px-5 w-fit justify-center bg-red-600 text-white cursor-pointer">
                            <Trash size={22} />
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}