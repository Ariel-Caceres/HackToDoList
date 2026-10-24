import { Task } from "../components/Task"
import type { TaskProps } from "../components/Task"
import { CATEGORY_TYPES } from "../types/categoryTypes"
export const Home = () => {
    const tasks: TaskProps[] = [
        {
            name: "Comprar ingredientes para la cena",
            category: CATEGORY_TYPES.FOOD,
            isDone: false,
        },
        {
            name: "Revisar capitulo 4 de algoritmos",
            category: CATEGORY_TYPES.STUDY,
            isDone: false,
        },
        {
            name: "Enviar reporte mensual de métricas",
            category: CATEGORY_TYPES.WORK,
            isDone: false,
        },
        {
            name: "Preparar almuerzo saludable",
            category: CATEGORY_TYPES.FOOD,
            isDone: true,
        },
        {
            name: "Lectura 30 minutos de arquitectura",
            category: CATEGORY_TYPES.STUDY,
            isDone: true,
        },


    ]

    return (
        <div className="w-full flex items-center  flex-col    bg-gray-100 h-full relative">
            <div className="w-5xl  flex justify-center flex-col mt-10 p-10 border rounded-2xl border-gray-200 bg-white ">
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

                    {tasks.map(task =>
                        (<Task key={task.name} name={task.name} isDone={task.isDone} category={task.category} />)
                    )}

                </div>

                <footer className="font-jet flex justify-between pt-10 text-gray-400">
                    <span>
                        Presiona Enter para agregar
                    </span>
                    <span>
                        MVP Hackathon v1.0
                    </span>
                </footer>

            </div>
        </div >
    )
}