import React from 'react';
import { useFirebase } from '../../hooks/useFirebase';
import styles from './Settings.module.css';
import { ThemeType } from '../../features/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useTranslation } from 'react-i18next';

interface SettingsProps {
  theme: ThemeType;
}

const Settings: ({theme}: SettingsProps ) => JSX.Element = 
  ({theme}) => {
    const language = useSelector((state: RootState) => state.app.settings.language)
    const {setTheme, setLanguage} = useFirebase()
    const {t} = useTranslation()

    const changeTheme = () => theme === 'dark'
      ? setTheme('light')
      : setTheme('dark')
  
    return(
      <ul className={styles[`settings_${theme}`]}>
        <li className={styles.item}>
          <p className={styles.title}>
            {t('THEME.TITLE') + ':'}
          </p>
          <div className={styles.theme_choice}>
            <p>{t('THEME.DARK')}</p>
            <div className={styles[`switch_${theme}`]}>
              <input 
                type="checkbox" 
                id='theme' 
                onChange={changeTheme} 
                checked={theme === 'light' ? true : false}
              />
              <label htmlFor='theme'><i></i></label>
            </div>
            <p>{t('THEME.LIGHT')}</p>
          </div>
        </li>
        <li className={styles.item}>
          <p className={styles.title}>
          {t('LANGUAGE.TITLE') + ':'}
          </p>
          <ul className={styles.languages_list}>
            <li className={styles[`radio_${theme}`]}>
              <input 
                type='radio' 
                id="en" 
                name="language" 
                value="english" 
                checked={language === 'en' ? true : false}
                onChange={() => setLanguage('en')}
              />
              <label htmlFor="en">{t('LANGUAGE.EN')}</label>
            </li>
            <li className={styles[`radio_${theme}`]}>
              <input 
                type='radio' 
                id="ua" 
                name="language" 
                value="ukrainian" 
                checked={language === 'ua' ? true : false}
                onChange={() => setLanguage('ua')}
              />
              <label htmlFor="ua">{t('LANGUAGE.UA')}</label>
            </li>
          </ul>
        </li>
      </ul>
    )
}

export default Settings;
