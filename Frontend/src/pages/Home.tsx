import { Pencil, Trash } from "lucide-react"

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
                <div className="w-full border p-3 flex items-center rounded-2xl border-gray-200 bg-gray-100 mt-5 justify-between px-3 font-geist">
                    <input type="text" placeholder="Escribe una nueva tarea..." className="outline-0 w-2/3 text-xl pl-3 placeholder:text-gray-500 text-black" />
                    <div className="flex gap-3">

                        <select name="" id="" className="border border-gray-200 bg-white cursor-pointer outline-0 rounded-xl p-3">
                            <option value="">Trabajo</option>
                            <option value="">Estudio</option>
                            <option value="">Comida</option>
                        </select>
                        <button className="bg-black py-3 px-5 rounded-xl text-white cursor-pointer flex gap-2 items-center">
                            <span className="text-2xl">
                                +

                            </span>
                            Agregar
                        </button>
                    </div>
                </div>

                <div className="flex justify-between text-md mt-10 text-lg w-full items-center border-b border-gray-200 pb-10">
                    <div className="bg-gray-100  w-2/5 flex justify-between  rounded-lg ">
                        <button className="flex gap-2 items-center text-gray-600 font-semibold hover:bg-white p-1 m-2  px-3 hover:text-black rounded-lg ">
                            <span>
                                Todas
                            </span>
                            <span className="text-gray-400">
                                5
                            </span>
                        </button>

                        <button className="flex gap-2 items-center text-gray-600 font-semibold hover:bg-white p-1 m-2  px-3  hover:text-black rounded-lg">
                            <span>
                                Pendientes
                            </span>
                            <span className="text-gray-400">
                                3
                            </span>
                        </button>

                        <button className="flex gap-2 items-center text-gray-600 font-semibold hover:bg-white p-1 m-2  px-3  hover:text-black rounded-lg">
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

                <div className="w-full font-geist">
                    <div className="flex w-full justify-between gap-5 p-5 items-center relative border-b border-gray-200 ">

                        <div className="flex w-5 h-5 rounded-md border justify-center  items-center   border-gray-400 overflow-hidden ">
                            <input type="checkbox" className="w-[21px] h-[21px] accent-gray-800 cursor-pointer  checked:appearance-auto shrink-0  appearance-none" />
                        </div>
                        <div className="items-center flex-1 text-xl font-semibold flex gap-5">
                            Nombre de la tarea
                            <div className="border border-yellow-200 text-orange-700 text-sm p-1 px-2 bg-yellow-50/50  rounded-lg">
                                <span>Comida</span>
                            </div>
                        </div>
                        <div className="flex gap-5 text-gray-400">
                            <div className="hover:text-black cursor-pointer">
                                <Pencil size={20} />
                            </div>
                            <div className="hover:text-black cursor-pointer">
                                <Trash size={20} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}