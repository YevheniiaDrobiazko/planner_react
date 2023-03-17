import React from 'react';
import {ReactComponent as SettingsIcon} from '../../assets/icons/settings.svg';
import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg';
import {ReactComponent as ListIcon} from '../../assets/icons/list.svg';
import {ReactComponent as NotificationIcon} from '../../assets/icons/notification.svg';
import { SidebarViewType, ThemeType } from '../../features/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useSidebar } from '../../hooks/useSidebar';
import styles from './Navigation.module.css';

interface NavigationProps {
  theme: ThemeType
}

const Navigation: ({theme}: NavigationProps ) => JSX.Element = 
  ({theme}) => {
    const sidebarView = useSelector((state: RootState) => state.app.sidebarView)
    const {changeContent} = useSidebar()

    const currentClassName = (key: keyof SidebarViewType) => sidebarView[key]
      ? styles[`item_${theme}_active`]
      : styles[`item_${theme}`]

    return(
      <nav>
        <ul className={styles.list}>
          <li 
            className={currentClassName('notification')}
            onClick={() => changeContent('notification')}
          >
            <NotificationIcon className={styles[`icon_${theme}`]} />
          </li>
          <li 
            className={currentClassName('list')}
            onClick={() => changeContent('list')}
          >
            <ListIcon className={styles[`icon_${theme}`]} />
          </li>
          <li 
            className={currentClassName('search')}
            onClick={() => changeContent('search')}
          >
            <SearchIcon className={styles[`icon_${theme}`]} />
          </li>
          <li 
            className={currentClassName('settings')}
            onClick={() => changeContent('settings')}
          >
            <SettingsIcon className={styles[`icon_${theme}`] }/>
          </li>
        </ul>
      
      </nav>
    )
}

export default Navigation;
