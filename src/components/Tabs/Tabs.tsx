import React from 'react';
import { ThemeType } from '../../features/types';
import styles from './Tabs.module.css';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { activeDoneTab, activeToDoTab } from '../../features/appSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';


interface TabsProps {
  theme: ThemeType;
}

const Tabs: ({theme}: TabsProps ) => JSX.Element = 
  ({theme}) => {
    const tabs = useSelector((state: RootState) => state.app.tabs) 
    const dispatch = useDispatch()
    const {t} = useTranslation()

    const classTab = (value: boolean) => value
      ? styles[`tab_${theme}_active`]
      : styles[`tab_${theme}`]
  
    return(
      <div className={styles[`tabs_${theme}`]}>
        <p 
          className={classTab(tabs.toDo)}
          onClick={() => dispatch(activeToDoTab())}
        >
          {t('TAB.TO_DO')}
        </p>
        <p 
          className={classTab(tabs.done)}
          onClick={() => dispatch(activeDoneTab())}
        >
          {t('TAB.DONE')}
        </p>
      </div>
    )
}

export default Tabs;
