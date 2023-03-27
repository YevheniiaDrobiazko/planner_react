import React from 'react';
import styles from './TaskButtons.module.css';
import { TaskSpaceType, TaskType, ThemeType } from '../../features/types';
import {ReactComponent as TrashIcon} from '../../assets/icons/trash.svg';
import {ReactComponent as EditIcon} from '../../assets/icons/pencil.svg';
import {ReactComponent as DoneIcon} from '../../assets/icons/check.svg';
import { useFirebase } from '../../hooks/useFirebase';
import { useTranslation } from 'react-i18next';

interface TaskButtonsProps {
  theme: ThemeType
  classSpace: TaskSpaceType
  task: TaskType
}

const TaskButtons: ({theme, classSpace, task}: TaskButtonsProps ) => JSX.Element = 
  ({theme, classSpace, task}) => {
    const {updateTask, updateTaskStatus, removeTask} = useFirebase()
    const {t} = useTranslation()

    const editTask = () => {
      const result = window.prompt('Edit task:', task.text)
      if(result) {
        updateTask({
          id: task.id,
          text: result,
        })
      }
    }

    const doneTask = () => updateTaskStatus({
      id: task.id,
      status: 'done',
    })

    const deleteTask = () => {
      if(task.status === 'done') {
        removeTask(task.id)
      } else {
        const result = window.confirm(t('REMOVE') + '"' + task.text + '" ?')
        if(result) {
          removeTask(task.id)
        }
      }
    }
  
  return (
    <ul className={styles.list_icons}>
      {task.status !== 'done' &&
        <li 
          className={styles.list_item}
          onClick={doneTask}
        >
          <DoneIcon className={styles[`icon_${theme}`]} />
        </li>
      }
      {task.status !== 'done' &&
        <li 
          className={styles.list_item}
          onClick={editTask}
        >
          <EditIcon className={styles[`icon_${theme}`]} />
        </li>
      }
      <li 
        className={styles.list_item}
        onClick={deleteTask}
      >
        <TrashIcon className={styles[`icon_${theme}`]} />
      </li>
    </ul>
  )
}

export default TaskButtons;
