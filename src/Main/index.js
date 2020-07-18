import React from 'react';
import Header from '../Header';
import Day from '../Day';
import styles from './Main.module.css';

const Main = () => {
    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.days}>
                <Day/>
            </div>

        </div>
      );
}

export default Main;