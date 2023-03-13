import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './App.module.css';

function App() {
  const theme = 'light'
  // const theme = 'dark' 

  return (
    <div className={styles[`page_${theme}`]}>
      <Header theme={theme} />
      <Content theme={theme} />
      <Sidebar theme={theme} />
    </div>
  );
}

export default App;
