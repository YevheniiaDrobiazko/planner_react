import React from 'react';
import { TaskType, ThemeType } from '../../features/types';
import styles from './List.module.css';
import { useDate } from '../../hooks/useDate';
import Tabs from '../Tabs/Tabs';

interface ListProps {
  theme: ThemeType;
  tasks: TaskType[]
}

const List: ({theme, tasks}: ListProps ) => JSX.Element = 
  ({theme, tasks}) => {
    const {selectedDateFormat} = useDate()

    const datesList = () => {
      const arr: string[] = []
      tasks.map((task) => {
        if(!arr.includes(task.date)) {
          arr.push(task.date)
        }
        return arr
      })
      return arr.sort()
    }

    const dates = datesList().map((date: string) => 
      <li key={date}>
        <p>{selectedDateFormat(new Date(date))}</p>
        
      </li>
    )
  
    return(
      <div className={styles[`list_${theme}`]}>
        <Tabs theme={theme} />
        <ul>
          {dates}
        </ul>
      </div>
    )
}

export default List;
