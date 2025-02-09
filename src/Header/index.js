import React, {useContext, memo} from 'react';
import storeContext from '../storeManegement/storeContext';
import TimeBlock from './TimeBlock';
import ProgressBar from '../ProgressBar';
import DayTemperature from '../DayTemperature';
import styles from './Header.module.css';


const Header = () => {
    const {todayWeatherTemp, secondsToReload} = useContext(storeContext);
    const progressBarWidth = `${parseInt((60 - secondsToReload) * 10 / 6)}%` ;
        
    return (
        <div className={styles.header}>
            <div className={styles.headerInfo}>
                <div className={styles.textXlarge}>
                    LONDON
                </div>
                <TimeBlock/>
                <div className={styles.temp}> 
                    <DayTemperature temperature={todayWeatherTemp}/>
                </div>
            </div>
            <div className={styles.progressInfo}>
                <div className={styles.progressText} >
                    Reloading in {secondsToReload}s
                </div>
                <ProgressBar width={progressBarWidth}/>
            </div>

        </div>
    )
}


export default memo(Header);
