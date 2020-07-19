import React, {useEffect, useRef, memo, useContext} from 'react';
import storeContext from '../storeManegement/storeContext';

import styles from './DayTemperature.module.css';

const DayTemperature = ({temperature}) => {
    const spanRef = useRef(null);
    const { secondsToReload} = useContext(storeContext);

    useEffect(() => {
        if (secondsToReload === 0) {
            spanRef.current.style.fontSize = 'small'
            setTimeout(() => {
                spanRef.current.style.fontSize = 'inherit'
            }, 300);
        }
    }, [secondsToReload])

    return (
        <span ref={spanRef} className={styles.textAnimation}>
             { temperature && `${temperature}°`}
        </span>
    )
}


export default memo(DayTemperature);