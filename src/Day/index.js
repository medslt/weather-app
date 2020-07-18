import React from 'react';
import styles from './Day.module.css';

const Day = () => {
    return (
        <div className={styles.dayBlock}>
            <div className={styles.dayInfo}>
                <span> Mon</span> <span>12°</span> 
            </div>

            <div className={styles.dayIcon}>
                <img src="http://openweathermap.org/img/wn/10d.png" />
            </div>
        </div>
    )
}

export default Day;