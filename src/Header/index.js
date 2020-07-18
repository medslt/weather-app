import React, {useContext} from 'react';
import styles from './Header.module.css';
import storeContext from '../storeManegement/storeContext'; 
import ProgressBar from '../ProgressBar'



const Header = () => {
    const {todayWeatherTemp} = useContext(storeContext);
    return (
        <div className={styles.header}>
            <div className={styles.headerInfo}>
                <div className={styles.textXlarge}>
                    LONDON
                </div>
                <div className={styles.timeBlock}>
                    <span className={styles.oval3}/>
                    <span className={styles.oval2}/>
                    <span className={styles.oval1}/>  
                    <span className={styles.time}>18:36 GMT</span>
                    <span className={styles.oval3}/>
                    <span className={styles.oval2}/>
                    <span className={styles.oval1}/>  
                </div>
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
