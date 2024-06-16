import React, { useEffect } from "react";
import styles from './StatisticsPage.module.css';
import { getDataOfPlan } from "../../services/actions/StatisticsAction";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../services/store"; 
import { click, getDesserts } from "../../services/slices/TestSlice";


const StatisticsPage = () => {

    const dispatch = useAppDispatch();
    const somethink = useAppSelector(state => state.StatisticReducer.completedPlan);
    const getinfo = () => {

    }

    getDataOfPlan()
    return (
        <div className={styles.page}>
            <h1 className={styles.headerText}>План</h1>
            <button onClick={getinfo}>кнопочка</button>
            <div className={styles.statisic}>
                <p className={styles.textOfPlan}>{somethink}</p>
            </div>
        </div>
    )
}

export default StatisticsPage;