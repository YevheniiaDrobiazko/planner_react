import React from 'react';
import { ThemeType } from '../../features/types';
import styles from './Search.module.css';

interface SearchProps {
  theme: ThemeType;
}

const Search: ({theme}: SearchProps ) => JSX.Element = 
  ({theme}) => {
  
    return(
      <div>Search</div>
    )
}

export default Search;
