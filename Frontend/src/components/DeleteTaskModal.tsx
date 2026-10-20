import { Trash } from "lucide-react"

export const DeleteTaskModal = () => {
    return (
        <div className="">
            <div className="brightness-50  w-screen h-screen absolute bg-white/50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <span className="w-full">.</span>
            </div>
            <div className="blur-2xl  w-screen h-screen absolute bg-white/50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <span className=" h-full bg-white">.</span>
            </div>
            <div className="brightness-100 absolute top-1/2 left-1/2 border-gray-50 rounded-2xl -translate-y-1/2 -translate-x-1/2 bg-white p-5 border  flex flex-row gap-5 w-md">
                <div className="rounded-4xl h-fit p-3 bg-red-50 text-red-600 ">
                    <Trash size={22} />
                </div>
                <div>
                    <span className="font-geist font-semibold">
                        ¿Eliminar tarea?
                    </span>
                    <div>
                        <span>
                            ¿Estas seguro de que deseas eliminar
                        </span>
                        {""}
                        <span> esta acción no se puede deshacer</span>
                    </div>
                    <div className="w-full flex pt-10 justify-end gap-5">
                        <button className="border border-gray-400 p-2 w-fit  rounded-2xl">
                            Cancelar
                        </button>
                        <button className="flex items-center gap-2 rounded-2xl border p-2 px-5 w-fit justify-center bg-red-600 text-white">
                            <Trash size={22} />
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}