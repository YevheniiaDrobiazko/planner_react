import React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.css';
import 'react-calendar/dist/Calendar.css';
import Content from './components/Content/Content';


function App() {
  // const theme = 'light'
  const theme = 'dark' 

  return (
    <div className={styles[`page_${theme}`]}>
      <Header theme={theme} />
      <Content theme={theme} />
    </div>
  );
}

export default App;
