import React from "react";
import styles from './LoadingComponent.module.css';
import LoadingGif from '../../utils/images/loadingGif.gif'

const LoadingComponent = () => {
    return (
        <div className={styles.container}>
            <img src={LoadingGif} className={styles.gif} />
            <p className={styles.text}>Загрузка...</p>
        </div>
    )
}

export default LoadingComponent