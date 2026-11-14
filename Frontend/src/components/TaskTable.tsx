import type { TaskEntity } from "../entities/task.entity"
import { EmptyTask } from "./EmptyTask"
import { Task } from "./Task"

interface TaskTableInterface {
    loadingTasks: boolean,
    tasks: TaskEntity[]
    getAllTasks: () => void
}
export const TaskTable = ({ tasks, getAllTasks, loadingTasks }: TaskTableInterface) => {


    return (
        <div className="w-full font-geist">
            {loadingTasks &&
                <div className="flex justify-center items-center border p-5 text-lg text-gray-500 border-gray-300 ">
                    Cargando... ⌛
                </div>
            }
            {tasks.map(task =>
                (<Task key={task.id} name={task.name} isDone={task.isDone} category={task.category} id={task.id} te={() => getAllTasks()} />)
            )}
            {tasks.length == 0 &&
                <EmptyTask />
            }

        </div>
    )
}