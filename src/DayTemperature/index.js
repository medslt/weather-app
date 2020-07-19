import React, {useEffect, useRef, memo} from 'react';

import styles from './DayTemperature.module.css';

const DayTemperature = ({temperature}) => {
    const spanRef = useRef(null);

    useEffect(() => {
        if (spanRef.current) {
            spanRef.current.style.fontSize = 'small'
            setTimeout(() => {
                spanRef.current.style.fontSize = 'inherit'
            }, 300);
        }
    }, [temperature])

    return (
        <span ref={spanRef} className={styles.textAnimation}>
             { temperature && `${temperature}°`}
        </span>
    )
}


export default memo(DayTemperature);