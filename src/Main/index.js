import React, {useContext} from 'react';
import Header from '../Header';
import Day from '../Day';
import storeContext from '../storeManegement/storeContext'; 
import styles from './Main.module.css';

const Main = () => {
    const {fiveDaysWeatherInfo} = useContext(storeContext);
    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.days}>
                {fiveDaysWeatherInfo.map((dayInfo, i) => (<Day dayInfo={dayInfo} key={i}/>))}
            </div>

        </div>
      );
}

export default Main;