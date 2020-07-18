import React from 'react';
import dayjs from 'dayjs';
import styles from './TimeBlock.module.css';


const TimeBlock = () => {
    return (
        <div className={styles.timeBlock}>
            <span className={styles.oval3}/>
            <span className={styles.oval2}/>
            <span className={styles.oval1}/>  
            <span className={styles.time}>{dayjs().format('HH:mm')} GMT</span>
            <span className={styles.oval3}/>
            <span className={styles.oval2}/>
            <span className={styles.oval1}/>  
        </div>
    )
}


export default TimeBlock;
