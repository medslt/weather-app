import React from 'react';

import styles from './ProgressBar.module.css';

const ProgressBar = ({width}) => {
 
    return (
        <div>    
            <div className= {[styles.progress, styles.progressMoved].join(' ')}>
                <div className={styles.progressBar} style={{width}}>
                </div>                       
            </div> 
        </div>
    )
}


export default ProgressBar;