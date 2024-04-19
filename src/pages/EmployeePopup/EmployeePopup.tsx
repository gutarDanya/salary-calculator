import React, { useEffect, useState } from "react";
import styles from './EmployeePopup.module.css';
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { getCurrentEmployee } from "../../services/slices/EmployeeSlice";

const EmployeePopup = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const [hoursListOpened, setHoursListOpened] = useState(false);
    const { id } = useParams();

    const employee = useAppSelector((state) => state.EmployeeSlice.currentEmployee);
    const totalKPI = employee.hours.reduce((acc, item) => {
        return acc + item.revenue
    }, 0)

    dispatch(getCurrentEmployee(Number(id)))

    useEffect(() => {
        dispatch(getCurrentEmployee(Number(id)))
    }, [])

    const changeUser = () => {
        navigate(`/change-employee/${Number(id)}`)
    }

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.bioContaienr}>
                {employee.avatar
                    ? <img className={styles.avatar} src={employee.avatar} alt='аватар' />
                    : <img className={styles.avatar} src='https://cdn-icons-png.flaticon.com/512/18/18601.png' />}
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
            <div className={styles.hoursInfo}>
                <button className={styles.hoursButton} type='button' onClick={() => {setHoursListOpened(!hoursListOpened)}}>список часов <p className={styles.icon}>{hoursListOpened ? "▼" : "▲"}</p></button>
                {hoursListOpened && (
                    <div className={styles.hoursContainer}>
                        {employee.hours && employee.hours.length > 0 && employee.hours.map((info, i) => {
                            return (
                                <div className={styles.hourContainer} key={i}>
                                    <p className={styles.hourText}>{info.date}</p>
                                    <p className={styles.hourText}>{info.revenue}</p>
                                </div>
                            )
                        })}
                        <p className={styles.totaKPI}>{totalKPI}</p>
                    </div>
                )}
            </div>
            <button type="submit" className={styles.submitButton} onClick={changeUser}>Изменить</button>
        </div>
    )
}

export default EmployeePopup;