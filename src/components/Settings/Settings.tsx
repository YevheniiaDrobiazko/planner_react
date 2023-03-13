import React from 'react';
import { useFirebase } from '../../hooks/useFirebase';
import styles from './Settings.module.css';

interface SettingsProps {
  theme: 'light' | 'dark';
}

const Settings: ({theme}: SettingsProps ) => JSX.Element = 
  ({theme}) => {
    const {setTheme, setLanguage} = useFirebase()
  
    return(
      <ul className={styles[`settings_${theme}`]}>
        <li className={styles.item}>
          <p className={styles.title}>
            Theme:
          </p>
          <div className={styles.theme_choice}>
            <p>dark</p>
            <div className={styles[`switch_${theme}`]}>
              <input type="checkbox" id='theme' />
              <label htmlFor='theme'><i></i></label>
            </div>
            <p>light</p>
          </div>
        </li>
        <li className={styles.item}>
          <p className={styles.title}>
            Language:
          </p>
          <ul className={styles.languages_list}>
            <li 
              className={styles[`radio_${theme}`]} 
              onClick={() => setLanguage('english')}
            >
              <input type='radio' id="en" name="language" value="english" />
              <label htmlFor="en">english</label>
            </li>
            <li 
              className={styles[`radio_${theme}`]} 
              onClick={() => setLanguage('ukrainian')}
            >
              <input type='radio' id="ua" name="language" value="ukrainian" />
              <label htmlFor="ua">ukrainian</label>
            </li>
          </ul>
        </li>
      </ul>
    )
}

export default Settings;
