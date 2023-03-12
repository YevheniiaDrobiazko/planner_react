import React from 'react';
import Settings from '../Settings/Settings';
import Button from '../Button/Button';
import styles from './Sidebar.module.css';

interface SidebarProps {
  theme: 'light' | 'dark';
}

const Sidebar: ({theme}: SidebarProps ) => JSX.Element = 
  ({theme}) => {
  
    return(
      <div className={styles[`wrapper_${theme}`]}>
        <div className={styles[`sidebar_${theme}`]}>
          <div className={styles.content}>
            <Settings theme={theme} />
          </div>
          <div className={styles.button} >
            <Button 
              theme={theme} 
              text='Cancel'
              classSpace='sidebar'
              handleClick={() => console.log('cancel click')}
            />
          </div>
        </div>
      </div>
    )
}

export default Sidebar;
