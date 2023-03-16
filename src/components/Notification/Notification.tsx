import React from 'react';
import { ThemeType } from '../../features/types';
import styles from './Notification.module.css';

interface NotificationProps {
  theme: ThemeType;
}

const Notification: ({theme}: NotificationProps ) => JSX.Element = 
  ({theme}) => {
  
    return(
      <div>Notification</div>
    )
}

export default Notification;
