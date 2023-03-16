import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './App.module.css';
import { useFirebase } from './hooks/useFirebase';

function App() {
  const theme = 'light'
  // const theme = 'dark' 

  const {getSettings} = useFirebase()

  useEffect(() => {
    getSettings()
  });

  return (
    <div className={styles[`page_${theme}`]}>
      <Header theme={theme} />
      <Content theme={theme} />
      <Sidebar theme={theme} />
    </div>
  );
}

export default App;
