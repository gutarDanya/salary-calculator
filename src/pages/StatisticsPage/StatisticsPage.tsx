import React, { useEffect } from "react";
import styles from './StatisticsPage.module.css';
import { getDataOfPlan } from "../../services/actions/StatisticsAction";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../services/store"; 
import { close, open } from "../../services/slices/ShirnSlice";
import { click, fetchTest } from "../../services/slices/TestSlice";

const StatisticsPage = () => {

    const dispatch = useAppDispatch();
    const somethink = useAppSelector(state => state.StatisticReducer.completedPlan);
    const data = useAppSelector(state => state.TestSlice.asyncData);
    const getinfo = () => {
        dispatch(fetchTest())
        console.log(data)
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