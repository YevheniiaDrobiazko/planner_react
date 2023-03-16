import React, { useState } from 'react';
import Calendar from 'react-calendar';
import changeDateFormat from '../../helpers/ChangeDateFormat';
import styles from './Content.module.css';
import Task from '../Task/Task';
import { ThemeType } from '../../features/types';

interface ContentProps {
  theme: ThemeType
}

const Content: ({theme}: ContentProps ) => JSX.Element = 
  ({theme}) => {
    const today = new Date()
    const [activeDate, setActiveDate] = useState<Date | null>(null)

    const contentTile = (date: Date) => {
      return changeDateFormat(date) === changeDateFormat(today) 
        ? <Task theme={theme} /> 
        : null
    }

    return(
      <main className={styles.content}>
        <Calendar 
          className={theme}
          calendarType='US' //'ISO 8601'
          locale='en-US' //'uk-UA'
          // tileClassName={({date}) => 'className'}
          tileContent={({date}) => contentTile(date)}
          onClickDay={(value) => setActiveDate(value)}
        />
      </main>
    )
}

export default Content;
