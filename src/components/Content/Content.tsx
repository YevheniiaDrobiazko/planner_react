import React from 'react';
import Calendar from 'react-calendar';
import styles from './Content.module.css';
import { LanguageType, ThemeType } from '../../features/types';
import { useDispatch } from 'react-redux';
import { changeDate, openModal } from '../../features/appSlice';
import { useDate } from '../../hooks/useDate';
import CurrentTasks from '../CurrentTasks/CurrentTasks';

interface ContentProps {
  theme: ThemeType
  language: LanguageType
}

const Content: ({theme, language}: ContentProps ) => JSX.Element = 
  ({theme, language}) => {
    const dispatch = useDispatch()
    const {changeDateFormat} = useDate()

    return(
      <main className={styles.content}>
        <Calendar 
          className={theme}
          calendarType={language === 'en' ? 'US' : 'ISO 8601'}
          locale={language === 'en' ? 'en-US' : 'uk-UA'}
          tileContent={({date}) => 
            <CurrentTasks 
              theme={theme} 
              classSpace='calendar' 
              date={date}
            />
          }
          onClickDay={(value) => {
            dispatch(changeDate(changeDateFormat(value)))
            dispatch(openModal())
          }}
        />
      </main>
    )
}

export default Content;
