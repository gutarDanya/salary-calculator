import React, { useEffect } from "react";
import styles from './EmployeePage.module.css';
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { getCurrentEmployee } from "../../services/slices/EmployeeSlice";

const EmployeePage = () => {

    const dispatch = useAppDispatch();

    const { id } = useParams();

    const arr = id?.split(':')

    dispatch(getCurrentEmployee(Number(arr?.[1])))

    const employee = useAppSelector((state) => state.EmployeeSlice.currentEmployee);

    console.log(employee)

    useEffect(() => {
        dispatch(getCurrentEmployee(Number(arr?.[1])))
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.bioContaienr}>
                    <img className={styles.avatar} src={employee.avatar} alt={employee.name} />
                    <h3 className={styles.name}>{employee.name}</h3>
                </div>
                <div className={styles.infoContainer}>
                    <p className={styles.text}>Возраст: {employee.age}</p>
                    <p className={styles.text}>Ставка: {employee.salary}</p>
                    <p className={styles.text}>должность: {employee.status}</p>
                    <p className={styles.text}>email: {employee.login}</p>
                    <p className={styles.text}>номер: {employee.tel}</p>
                </div>
            </div>
        </div>
    )
}

export default EmployeePage;