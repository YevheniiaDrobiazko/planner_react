import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  theme: 'light' | 'dark',
  text: string,
  classSpace: string
}

const Button: ({theme, text, classSpace}: ButtonProps ) => JSX.Element = 
  ({theme, text, classSpace}) => {
  
    return(
      <div 
        className={styles[`button_${classSpace}_${theme}`]}
      >
        {text}
      </div>
    )
}

export default Button;
