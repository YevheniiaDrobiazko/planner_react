import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  theme: 'light' | 'dark',
  text: string,
  classSpace: string,
  handleClick: () => void;
}

const Button: ({theme, text, classSpace, handleClick}: ButtonProps ) => JSX.Element = 
  ({theme, text, classSpace, handleClick}) => {
  
    return(
      <div 
        className={styles[`button_${classSpace}_${theme}`]}
        onClick={handleClick}
      >
        {text}
      </div>
    )
}

export default Button;
