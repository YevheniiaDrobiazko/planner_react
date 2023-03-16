import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './App.module.css';
import { useFirebase } from './hooks/useFirebase';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import i18n from './i18n';

function App() {
  const theme = useSelector((state: RootState) => state.app.settings.theme)
  const language = useSelector((state: RootState) => state.app.settings.language)
  const {getSettings} = useFirebase()

  useEffect(() => {
    getSettings()
  });

  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className={styles[`page_${theme}`]}>
      <Header theme={theme} />
      <Content theme={theme} language={language} />
      <Sidebar theme={theme} />
    </div>
  );
}

export default App;
