import React from 'react';
import { ThemeType } from '../../features/types';
import styles from './List.module.css';

interface ListProps {
  theme: ThemeType;
}

const List: ({theme}: ListProps ) => JSX.Element = 
  ({theme}) => {
  
    return(
      <div>List</div>
    )
}

export default List;
