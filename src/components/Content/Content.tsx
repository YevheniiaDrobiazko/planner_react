import React, { useState } from 'react';
import Calendar from 'react-calendar';
import changeDateFormat from '../../helpers/ChangeDateFormat';
import styles from './Content.module.css';
import Task from '../Task/Task';
import { LanguageType, ThemeType } from '../../features/types';

interface ContentProps {
  theme: ThemeType
  language: LanguageType
}

const Content: ({theme, language}: ContentProps ) => JSX.Element = 
  ({theme, language}) => {
    const today = new Date()

    const contentTile = (date: Date) => {
      return changeDateFormat(date) === changeDateFormat(today) 
        ? <Task theme={theme} /> 
        : null
    }

    return(
      <main className={styles.content}>
        <Calendar 
          className={theme}
          calendarType={language === 'en' ? 'US' : 'ISO 8601'}
          locale={language === 'en' ? 'en-US' : 'uk-UA'}
          tileContent={({date}) => contentTile(date)}
          // tileClassName={({date}) => 'className'}
          // onClickDay={(value) => setActiveDate(value)}
        />
      </main>
    )
}

export default Content;
