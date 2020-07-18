import React from 'react';
import styles from './Header.module.css';
import ProgressBar from '../ProgressBar'



const Header = () => {
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
                    12°
                </div>
            </div>
            <div className={styles.progressInfo}>
                <div className={styles.progressText}>
                    Reloading in 20 seconds
                </div>
                <ProgressBar/>
            </div>

        </div>
    )
}


export default Header;
