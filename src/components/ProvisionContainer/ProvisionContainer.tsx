import React from "react";
import styles from './ProvisionContainer.module.css';

const ProvisionContainer: React.FC<Props> = ({name, count, minCount}) => {
    return (
        <div className={styles.container}>
            <p className={ count > minCount ? styles.text : styles.redText}>{name}</p>
            <p className={styles.count}>{count}</p>
        </div>
    )
}

type Props = {
    name: string;
    count: number;
    minCount: number
}

export default ProvisionContainer