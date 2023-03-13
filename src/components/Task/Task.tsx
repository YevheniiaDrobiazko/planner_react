import React from 'react';
import styles from './Task.module.css';

interface TaskProps {
  theme: 'light' | 'dark';
}

const Task: ({theme}: TaskProps ) => JSX.Element = 
  ({theme}) => {
  
    return (
      <ul className={styles.list}>
        <li className={styles[`task_${theme}`]}>
          first task
        </li>
        <li className={styles[`task_${theme}`]}>
          second task
        </li>
        <li className={styles[`task_${theme}_more`]}>
          see more ...
        </li>
      </ul>
    )
}

export default Task;
