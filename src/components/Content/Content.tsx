import React, { useState } from 'react';
import Calendar from 'react-calendar';
import changeDateFormat from '../../helpers/ChangeDateFormat';
import styles from './Content.module.css';
import Task from '../Task/Task';

interface ContentProps {
  theme: 'light' | 'dark'
}

const Content: ({theme}: ContentProps ) => JSX.Element = 
  ({theme}) => {
    const today = new Date()
    const [activeDate, setActiveDate] = useState<Date | null>(null)

    const classTile = (date: Date) => {
      if(changeDateFormat(date) === changeDateFormat(activeDate)){
        return styles[`activeDay_${theme}`]
      } else if(changeDateFormat(date) === changeDateFormat(today)){
        return styles[`today_${theme}`] 
      } else return null
    }
    const contentTile = (date: Date) => {
      return changeDateFormat(date) === changeDateFormat(today) 
        ? <Task theme={theme} /> 
        : null
    }

    return(
      <main className={styles.content}>
        <Calendar 
          className={[styles[`calendar_${theme}`], `${theme}`]}
          calendarType='US' //'ISO 8601'
          locale='en-US' //'uk-UA'
          tileClassName={({date}) => classTile(date)}
          tileContent={({date}) => contentTile(date)}
          onClickDay={(value) => setActiveDate(value)}
        />
      </main>
    )
}

export default Content;
