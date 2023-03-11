import React from 'react';
import styles from './Settings.module.css';

interface SettingsProps {
  theme: 'light' | 'dark';
}

const Settings: ({theme}: SettingsProps ) => JSX.Element = 
  ({theme}) => {
  
    return(
      <ul className={styles.settings}>
        <li>
          <p>Theme:</p>
        </li>
      </ul>
    )
}

export default Settings;
