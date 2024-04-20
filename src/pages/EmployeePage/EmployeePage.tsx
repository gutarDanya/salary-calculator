import React, { useEffect, useState } from "react";
import styles from './EmployeePage.module.css';
import { useAppDispatch, useAppSelector } from "../../services/store";
import { useParams } from "react-router-dom";
import { getCurrentEmployee } from "../../services/slices/EmployeeSlice";

const EmployeePage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getCurrentEmployee(Number(id)))
    })
    const employee = useAppSelector(state => state.EmployeeSlice.currentEmployee);
    const [hoursListOpened, setHoursListOpened] = useState(false);
    const shirmOpened = useAppSelector(state => state.InputReducer.shirmStatus);
    const [employeeData, setEmployeeData] = useState({
        age: employee.age,
        avatar: employee.avatar,
        hours: employee.hours,
        id: employee.id,
        login: employee.login,
        name: employee.name,
        password: employee.password,
        salary: employee.salary,
        status: employee.status,
        tel: employee.tel,
        worked: employee.worked
    })
    const totalKPI = employee.hours.reduce((acc, item) => {
        return (acc + employee.salary + item.revenue * 0.05)
    }, 0)


    return (
        <div className={styles.page} style={shirmOpened ? { marginLeft: "260px" } : {}}>
            <h1 className={styles.name}>{employeeData.name}</h1>
            <div className={styles.container}>
                {employee.avatar
                    ? <img className={styles.avatar} src={employeeData.avatar} alt='аватар' />
                    : <img className={styles.avatar} src='https://cdn-icons-png.flaticon.com/512/18/18601.png' />}
                <div className={styles.infoContaiener}>
                    <label className={styles.labalContainer}>
                        Возраст
                        <input name="age" className="input" type="number" value={employeeData.age} onChange={(e) => { setEmployeeData({ ...employeeData, age: Number(e.target.value) }) }} />
                    </label>
                    <label className={styles.labalContainer}>
                        ссылка на аватар
                        <input name="avatar" className="input" type="string" value={employeeData.avatar} onChange={(e) => {console.log(employeeData); setEmployeeData({ ...employeeData, avatar: e.target.value }) }} />
                    </label>
                    <label className={styles.labalContainer}>
                        логин/почта
                        <input name="login" className="input" type="email" value={employeeData.login} onChange={(e) => { setEmployeeData({ ...employeeData, login: e.target.value }) }} />
                    </label>
                    <label className={styles.labalContainer}>
                        Имя
                        <input name="name" className="input" type="name" value={employeeData.name} onChange={(e) => { setEmployeeData({ ...employeeData, name: e.target.value }) }} />
                    </label>
                    <label className={styles.labalContainer}>
                        пароль
                        <input name="paswword" className="input" type="text" value={employeeData.password} onChange={(e) => { setEmployeeData({ ...employeeData, password: e.target.value }) }} />
                    </label>
                    <label className={styles.labalContainer}>
                        ставка
                        <input name="salary" className="input" type="number" value={employeeData.salary} onChange={(e) => { setEmployeeData({ ...employeeData, salary: Number(e.target.value) }) }} />
                    </label>
                    <label className={styles.labalContainer}>
                        должность
                        <input name="status" className="input" type="text" value={employeeData.status} onChange={(e) => { setEmployeeData({ ...employeeData, status: e.target.value }) }} />
                    </label>
                    <label className={styles.labalContainer}>
                        телефон
                        <input name="tel" className="input" type="text" value={employeeData.tel} onChange={(e) => { setEmployeeData({ ...employeeData, tel: e.target.value }) }} />
                    </label>
                    <label className={styles.labalContainer}>
                        статус работы
                        <input name="worked" className="input" list="workedList" value={employeeData.worked ? "работает" : "чилит"} onChange={(e) => { setEmployeeData({ ...employeeData, worked: e.target.value === "работает" ? true : false }) }} />
                    </label>
                    <label className={styles.labalContainer}>
                        Id-сотрудника
                        <p className={`input ${styles.idOfEmployee}`}>{employeeData.id}</p>
                    </label>
                </div>
            </div>
            <button className={styles.hoursButton} type='button' onClick={() => { setHoursListOpened(!hoursListOpened) }}>список часов <p className={styles.icon}>{hoursListOpened ? "▼" : "▲"}</p></button>
            {hoursListOpened && (
                <div className={styles.hourContainer}>
                    {employee.hours && employee.hours.length > 0 && employee.hours.map((hour) => {
                        return (
                            <div className={styles.hourContainer}>
                                <p className={styles.hourText}>{hour.date}</p>
                                <p className={styles.hourText}>{hour.revenue}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default EmployeePage