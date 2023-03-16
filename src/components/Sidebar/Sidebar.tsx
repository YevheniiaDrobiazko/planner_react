import React from 'react';
import Settings from '../Settings/Settings';
import Button from '../Button/Button';
import styles from './Sidebar.module.css';
import { ThemeType } from '../../features/types';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  theme: ThemeType;
}

const Sidebar: ({theme}: SidebarProps ) => JSX.Element = 
  ({theme}) => {
    const contentType = 'settings'
    const {t} = useTranslation()

    const content = (contentType: string) => {
      if(contentType === 'settings') {
        return <Settings theme={theme} />
      } else return <p></p>
    }
  
    return(
      <div className={styles[`wrapper_${theme}`]}>
        <div className={styles[`sidebar_${theme}`]}>
          <div className={styles.content}>
            {content(contentType)}
          </div>
          <div className={styles.button} >
            <Button 
              theme={theme} 
              text={t('BUTTON.CANCEL')}
              classSpace='sidebar'
              handleClick={() => console.log('cancel click')}
            />
          </div>
        </div>
      </div>
    )
}

export default Sidebar;
