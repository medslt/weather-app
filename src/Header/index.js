import React, {useContext} from 'react';
import storeContext from '../storeManegement/storeContext';
import TimeBlock from './TimeBlock';
import ProgressBar from '../ProgressBar'
import styles from './Header.module.css';


const Header = () => {
    const {todayWeatherTemp} = useContext(storeContext);
    
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
                <div className={styles.progressText}>
                    Reloading in 20s
                </div>
                <ProgressBar/>
            </div>

        </div>
    )
}


export default Header;
