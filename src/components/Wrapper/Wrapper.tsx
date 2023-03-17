import React from 'react';
import styles from './Wrapper.module.css';
import { ThemeType } from '../../features/types';


interface WrapperProps {
  theme: ThemeType;
  visible: boolean;
  zIndex?: number;
}

const Wrapper: ({theme, visible, zIndex}: WrapperProps ) => JSX.Element = 
  ({theme, visible, zIndex}) => {

    return(
      <div 
        className={visible ? styles[`wrapper_${theme}`] : styles.wrapper}
        style={{ zIndex: zIndex ? `${zIndex}` : 'auto'}}
      ></div>
    )
}

export default Wrapper;
