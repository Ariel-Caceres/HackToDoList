import { Pencil } from "lucide-react"

export const Home = () => {
    return (
        <div className="w-full flex items-center  flex-col    bg-gray-100 h-screen">
            <div className="w-5xl  flex justify-center flex-col mt-10 p-10 border rounded-2xl border-gray-200 bg-white">
                <div className=" w-full flex items-center justify-between mb-5 border-b p-5 border-gray-200  font-geist font-bold">
                    <div className="w-2/3 flex gap-5 items-center">
                        <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-sm">
                            ✓
                        </div>
                        <div className="">
                            <span className="text-xl font-bold ">
                                HackList
                            </span>
                            <div className="text-gray-400 font-jet">
                                <p>MVP sprint - Tareas de hoy</p>
                            </div>
                        </div>
                    </div>
                    <div className="1/3 border rounded-2xl text-[14px] text-gray-500 px-3 py-1 bg-gray-100 border-gray-200 ">
                        <span> 3 pendientes </span>
                    </div>
                </div>
                <div className="w-full h-15 border flex items-center rounded-2xl border-gray-400 bg-gray-100 mt-5 justify-between px-3">
                    <input type="text" placeholder="Escribe una nueva tarea" className="outline-0 w-2/3 " />
                    <div className="flex gap-3">

                        <select name="" id="" className="border border-gray-200 bg-white p-2 cursor-pointer outline-0">
                            <option value="">Trabajo</option>
                            <option value="">Estudio</option>
                            <option value="">Comida</option>
                        </select>
                        <button className="bg-black py-2 px-5 rounded-xl text-white cursor-pointer">+ Agregar</button>
                    </div>
                </div>

                <div className="flex justify-between text-md mt-10 text-lg w-full items-center border-b border-gray-200 pb-10">
                    <div className="bg-gray-100  w-2/5 flex justify-between  rounded-lg ">
                        <button className="flex gap-2 items-center text-gray-600 font-semibold hover:bg-white p-2 m-1 px-3 hover:text-black rounded-lg ">
                            <span>
                                Todas
                            </span>
                            <span className="text-gray-400">
                                5
                            </span>
                        </button>

                        <button className="flex gap-2 items-center text-gray-600 font-semibold hover:bg-white p-2 m-1 px-3  hover:text-black rounded-lg">
                            <span>
                                Pendientes
                            </span>
                            <span className="text-gray-400">
                                3
                            </span>
                        </button>

                        <button className="flex gap-2 items-center text-gray-600 font-semibold hover:bg-white p-2 m-1 px-3  hover:text-black rounded-lg">
                            <span>
                                Hechas
                            </span>
                            <span className="text-gray-400">
                                2
                            </span>
                        </button>
                    </div>
                    <div className="w-2/5 flex justify-between font-semibold">
                        <span className="hover:text-black text-gray-500 cursor-pointer hover:bg-gray-100 p-1 px-3 rounded-lg">
                            Todas
                        </span>
                        <span className="hover:text-black text-gray-500 cursor-pointer hover:bg-gray-100 p-1 px-3 rounded-lg">
                            Trabajo
                        </span>
                        <span className="hover:text-black text-gray-500 cursor-pointer hover:bg-gray-100 p-1 px-3 rounded-lg">
                            Estudio
                        </span><span className="hover:text-black text-gray-500 cursor-pointer hover:bg-gray-100 p-1 px-3 rounded-lg">
                            Comida
                        </span>

                    </div>
                </div>

                <div className="w-full">
                    <div className="flex w-full justify-between gap-5">
                        <div>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="self-start flex-1">
                            nombre de la tarea
                        </div>
                        <div>
                            <Pencil />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}