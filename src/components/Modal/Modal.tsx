import React from 'react';
import styles from './Modal.module.css';
import { ThemeType } from '../../features/types';
import { useDispatch } from 'react-redux';
import Wrapper from '../Wrapper/Wrapper';
import { closeModal } from '../../features/appSlice';
import {ReactComponent as CloseIcon} from '../../assets/icons/close.svg';
import iconStyles from '../Navigation/Navigation.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useDate } from '../../hooks/useDate';
import Button from '../Button/Button';
import { useFirebase } from '../../hooks/useFirebase';
import CurrentTasks from '../CurrentTasks/CurrentTasks';

interface ModalProps {
  theme: ThemeType;
  visible: boolean
}

const Modal: ({theme, visible}: ModalProps ) => JSX.Element = 
  ({theme, visible}) => {
    const date = useSelector((state: RootState) => state.app.date)
    const dispatch = useDispatch()
    const {selectedDateFormat, isPastTime} = useDate()
    const {setTask} = useFirebase()

    const addTask = () => {
      const task = window.prompt('Add task:', 'To do something')
      if(task) {
        setTask({
          id: new Date().getTime(),
          date: date,
          text: task,
          status:'toDo'
        })
      }
    }
  
    return(
      <>
        <Wrapper theme={theme} visible={visible} zIndex={3} />
        {visible &&
          <div className={styles[`modal_${theme}`]} >
            <div className={styles[`title_${theme}`]} >
              {selectedDateFormat(new Date(date))}
            </div>
            <CurrentTasks 
              theme={theme} 
              classSpace='modal' 
              date={new Date(date)}
            />
            <div>
              <Button 
                theme={theme}
                classSpace='sidebar'
                text='add task'
                handleClick={addTask}
                hidden={isPastTime(new Date(date))}
              />
            </div>
            <div 
              className={styles[`close_${theme}`]}
              onClick={() => dispatch(closeModal())}
            >
              <CloseIcon className={iconStyles[`icon_${theme}`] }/>
            </div>
          </div>
        }
      </>
    )
}

export default Modal;
