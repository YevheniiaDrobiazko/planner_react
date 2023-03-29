import { useSelector } from "react-redux"
import { RootState } from "../store"
import { TaskType } from "../features/types"

type useTasksHook = {
  toDoTasks: (date: string) => TaskType[]
  doneTasks: (date: string) => TaskType[]
}

export const useTasks = (): useTasksHook => {
  const tasks = useSelector((state: RootState) => state.app.tasks)   
  
  const toDoTasks = (date: string) => tasks.filter((task) => 
        task.date === date && task.status !== 'done')
  
  const doneTasks =(date: string) => tasks.filter((task) => 
        task.date === date && task.status === 'done')

  return {
    toDoTasks,
    doneTasks
  };
}