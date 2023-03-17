import React from 'react';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';
import { ThemeType } from '../../features/types';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  theme: ThemeType;
}

const Header: ({theme}: HeaderProps ) => JSX.Element = 
  ({theme}) => {
    const {t} = useTranslation()
  
    return(
      <header className={styles[`header_${theme}`]}>
        <Button 
          theme={theme} 
          text={t('BUTTON.TODAY')}
          classSpace='header' 
          handleClick={() => console.log('today click')}
        />
        <div className={styles[`title_${theme}`]}>
          <h1>{t('TITLE')}</h1>
        </div>
        <Navigation theme={theme}/>
      </header>
    )
}

export default Header;
