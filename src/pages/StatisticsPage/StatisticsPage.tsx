import React, { useEffect } from "react";
import styles from './StatisticsPage.module.css';
import { getDataOfPlan } from "../../services/actions/StatisticsAction";

const StatisticsPage = () => {
    getDataOfPlan();
    return (
        <div className={styles.page}>
            <h1 className={styles.headerText}>План</h1>
            <div className={styles.statisic}>
                <p className={styles.textOfPlan}>Выполненно</p>
            </div>
        </div>
    )
}

export default StatisticsPage;