import React, {memo} from 'react';
import DayTemperature from '../DayTemperature';
import styles from './Day.module.css';

const Day = ({dayInfo}) => {
    const {day, icon, desc, temp} = dayInfo;
    return (
        <div className={styles.dayBlock}>
            <div className={styles.dayInfo}>
                <span>{day}</span> <DayTemperature temperature={temp}/>
            </div>

            <div className={styles.dayIcon}>
               <span>
                    <img src={`http://openweathermap.org/img/wn/${icon}.png`} width="50" />
                </span> 
                <span>{desc}</span>
            </div>
        </div>
    )
}

export default memo(Day);