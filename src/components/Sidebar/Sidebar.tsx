import React from 'react';
import Settings from '../Settings/Settings';
import Button from '../Button/Button';
import styles from './Sidebar.module.css';
import { ThemeType } from '../../features/types';
import { useTranslation } from 'react-i18next';
import Search from '../Search/Search';
import List from '../List/List';
import Notification from '../Notification/Notification';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../../features/appSlice';
import Wrapper from '../Wrapper/Wrapper';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface SidebarProps {
  theme: ThemeType;
  visible: boolean
}

const Sidebar: ({theme, visible}: SidebarProps ) => JSX.Element = 
  ({theme, visible}) => {
    const sidebarContent = useSelector((state: RootState) => state.app.sidebarContent)
    const dispatch = useDispatch()
    const {t} = useTranslation()
  
    return(
      <>
        <Wrapper theme={theme} visible={visible} />
        <div className={visible
          ? styles[`sidebar_${theme}_visible`]
          : styles[`sidebar_${theme}`]
        }>
          <div className={styles.content}>
            {sidebarContent === 'settings' && 
              <Settings theme={theme} />
            }
            {sidebarContent === 'search' &&
              <Search theme={theme} />
            }
            {sidebarContent === 'list' &&
              <List theme={theme} />
            }
            {sidebarContent === 'notification' &&
              <Notification theme={theme} />
            }
          </div>
          <div className={styles.button} >
            <Button 
              theme={theme} 
              text={t('BUTTON.CLOSE')}
              classSpace='sidebar'
              handleClick={() => dispatch(closeSidebar())}
            />
          </div>
        </div>
      </>
    )
}

export default Sidebar;
