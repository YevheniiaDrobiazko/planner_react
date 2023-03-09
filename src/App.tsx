import React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.css';

function App() {
  // const theme = 'light'
  const theme = 'dark'

  return (
    <div 
      className={styles[`page_${theme}`]}
    >
      <Header theme={theme} />
      <main></main>
    </div>
  );
}

export default App;
