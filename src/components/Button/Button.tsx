import React from 'react';
import styles from './Button.module.css';
import { ButtonSpaceType, ThemeType } from '../../features/types';

interface ButtonProps {
  theme: ThemeType,
  text: string,
  classSpace: ButtonSpaceType,
  handleClick: () => void;
  hidden?: boolean
}

const Button: ({theme, text, classSpace, handleClick, hidden}: ButtonProps ) => JSX.Element = 
  ({theme, text, classSpace, handleClick, hidden}) => {
  
    return(
      <input 
      type='button'
        className={styles[`button_${classSpace}_${theme}`]}
        disabled={hidden ? true : false}
        onClick={handleClick}
        value={text}
      />
    )
}

export default Button;
