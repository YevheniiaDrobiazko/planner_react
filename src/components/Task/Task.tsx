import React from 'react';
import styles from './Task.module.css';
import { TaskSpaceType, TaskType, ThemeType } from '../../features/types';
import { sliceString } from '../../helpers/sliceString';
import TaskButtons from '../TaskButtons/TaskButtons';



interface TaskProps {
  theme: ThemeType
  classSpace: TaskSpaceType
  task: TaskType
}

const Task: ({theme, classSpace, task}: TaskProps ) => JSX.Element = 
  ({theme, classSpace, task}) => {
  
  return (
    <div 
      className={task.status === 'done'
        ? styles[`task_${theme}_${classSpace}_done`]
        : styles[`task_${theme}_${classSpace}`]
      }
    >
      <p>
        {classSpace === 'calendar' ? sliceString(task.text) : task.text}
      </p>
      {classSpace === 'modal' &&
        <TaskButtons 
          theme={theme}
          classSpace={classSpace}
          task={task}
        />
      }
    </div>
  )
}

export default Task;
