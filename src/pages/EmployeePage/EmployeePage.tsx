import React, { useEffect } from "react";
import styles from './EmployeePage.module.css';
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../services/store";
import { getCurrentEmployee } from "../../services/slices/EmployeeSlice";

const EmployeePage = () => {

    const dispatch = useAppDispatch();

    const { id } = useParams();

    const arr = id?.split(':')

    dispatch(getCurrentEmployee(Number(arr?.[1])))

    useEffect(() => {
        dispatch(getCurrentEmployee(Number(arr?.[1])))
    }, [])

    return (
        <div className={styles.container}>
            <h3 className={styles.name}>{}</h3>
        </div>
    )
}

export default EmployeePage;