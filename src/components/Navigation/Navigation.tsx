import React from 'react';
import {ReactComponent as SettingsIcon} from '../../assets/icons/settings.svg';
import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg';
import {ReactComponent as ListIcon} from '../../assets/icons/list.svg';
import {ReactComponent as NotificationIcon} from '../../assets/icons/notification.svg';
import styles from './Navigation.module.css';

interface NavigationProps {
  theme: 'light' | 'dark'
}

const Navigation: ({theme}: NavigationProps ) => JSX.Element = 
  ({theme}) => {
  
    return(
      <nav>
        <ul className={styles.list}>
          <li className={styles[`item_${theme}`]}>
            <NotificationIcon className={styles[`icon_${theme}`]} />
          </li>
          <li className={styles[`item_${theme}`]}>
            <ListIcon className={styles[`icon_${theme}`]} />
          </li>
          <li className={styles[`item_${theme}`]}>
            <SearchIcon className={styles[`icon_${theme}`]} />
          </li>
          <li className={styles[`item_${theme}_active`]}>
            <SettingsIcon className={styles[`icon_${theme}`] }/>
          </li>
        </ul>
      
      </nav>
    )
}

export default Navigation;
