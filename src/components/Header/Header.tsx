import React from 'react';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';

interface HeaderProps {
  theme: 'light' | 'dark';
}

const Header: ({theme}: HeaderProps ) => JSX.Element = 
  ({theme}) => {
  
    return(
      <header className={styles[`header_${theme}`]}>
        <Button 
          theme={theme} 
          text='today' 
          classSpace='header' 
          handleClick={() => console.log('today click')}
        />
        <div className={styles[`title_${theme}`]}>
          <h1>Planner</h1>
        </div>
        <Navigation theme={theme}/>
      </header>
    )
}

export default Header;
