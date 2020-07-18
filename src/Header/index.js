import React, {useContext} from 'react';
import storeContext from '../storeManegement/storeContext';
import TimeBlock from './TimeBlock';
import ProgressBar from '../ProgressBar'
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
                <div className={styles.textXlarge}> 
                    { todayWeatherTemp && `${todayWeatherTemp}°`}
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


export default Header;
