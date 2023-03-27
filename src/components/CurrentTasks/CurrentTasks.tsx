import React from 'react';
import styles from './CurrentTasks.module.css';
import { TaskSpaceType, ThemeType } from '../../features/types';
import { useDate } from '../../hooks/useDate';
import Task from '../Task/Task';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useTranslation } from 'react-i18next';
import { idText } from 'typescript';

interface CurrentTasksProps {
  theme: ThemeType
  classSpace: TaskSpaceType
  date: Date
}

const CurrentTasks: ({theme, classSpace, date}: CurrentTasksProps ) => JSX.Element = 
  ({theme, classSpace, date}) => {
    const tasks = useSelector((state: RootState) => state.app.tasks)
    const {changeDateFormat} = useDate()
    const {t} = useTranslation()

    const currentTasks = () => {
      const toDoTasks = tasks.filter((task) => 
        task.date === changeDateFormat(date) && task.status !== 'done')
      const doneTasks = tasks.filter((task) => 
        task.date === changeDateFormat(date) && task.status === 'done')
      return classSpace === 'modal'
      ? [...toDoTasks, ...doneTasks]
      : toDoTasks
    }

    const currentDayTasksList = () => 
      classSpace === 'calendar' && currentTasks().length > 2
        ? currentTasks().slice(0, 2)
        : currentTasks()
      

    const contentTile = () => currentDayTasksList().map((task) => 
      <li key={task.id}>
        <Task 
          theme={theme} 
          classSpace={classSpace} 
          task={task} 
        />
      </li>
    )

    return(   
      currentTasks().length
        ? <ul className={styles[`list_${classSpace}`]}>
            {contentTile()}
            {(classSpace === 'calendar' && currentTasks().length > 2) &&
              <p className={styles[`task_${theme}_more`]}>{t("MORE")}</p>
            }
          </ul>
        : <></>
    )
}

export default CurrentTasks;
