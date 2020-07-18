import React from 'react';
import styles from './ProgressBar.module.css';



const ProgressBar = () => {
    return (
        <div className="container">    
            <div className= {[styles.progress, styles.progressMoved].join(' ')}>
                <div className={styles.progressBar} >
                </div>                       
            </div> 
        </div>
    )
}


export default ProgressBar;