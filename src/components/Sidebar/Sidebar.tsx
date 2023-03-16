import React from 'react';
import Settings from '../Settings/Settings';
import Button from '../Button/Button';
import styles from './Sidebar.module.css';
import { SidebarViewType, ThemeType } from '../../features/types';
import { useTranslation } from 'react-i18next';
import Search from '../Search/Search';
import List from '../List/List';
import Notification from '../Notification/Notification';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../../features/appSlice';

interface SidebarProps {
  theme: ThemeType;
  contentVisibility: SidebarViewType;
  // visibility: boolean
}

const Sidebar: ({theme, contentVisibility}: SidebarProps ) => JSX.Element = 
  ({theme, contentVisibility}) => {
    const dispatch = useDispatch()
    const {t} = useTranslation()
  
    return(
      <div className={styles[`wrapper_${theme}`]}>
        <div className={
          // visibility 
          // ? styles[`sidebar_${theme}`] +  ' ' + styles.sidebar_active
          styles[`sidebar_${theme}`]}
        >
          <div className={styles.content}>
            {contentVisibility.settings && 
              <Settings theme={theme} />
            }
            {contentVisibility.search &&
              <Search theme={theme} />
            }
            {contentVisibility.list &&
              <List theme={theme} />
            }
            {contentVisibility.notification &&
              <Notification theme={theme} />
            }
          </div>
          <div className={styles.button} >
            <Button 
              theme={theme} 
              text={t('BUTTON.CANCEL')}
              classSpace='sidebar'
              handleClick={() => dispatch(closeSidebar())}
            />
          </div>
        </div>
      </div>
    )
}

export default Sidebar;
