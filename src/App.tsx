import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './App.module.css';
import { useFirebase } from './hooks/useFirebase';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
  // const appState = useSelector((state: RootState) => state.app)
  const theme = useSelector((state: RootState) => state.app.settings.theme)
  const {getSettings} = useFirebase()

  useEffect(() => {
    getSettings()
  });

  // React.useEffect(() => {
  //   getLanguage()
  //   i18n.changeLanguage(language);
  // }, [language]);

  return (
    <div className={styles[`page_${theme}`]}>
      <Header theme={theme} />
      <Content theme={theme} />
      <Sidebar theme={theme} />
    </div>
  );
}

export default App;
