import React from 'react';
import styles from './Header.module.css';


const Header = () => {
    return (
        <div className={styles.header}>
            <div>
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
            <div> 
                12°
            </div>
        </div>
    )
}


export default Header;
