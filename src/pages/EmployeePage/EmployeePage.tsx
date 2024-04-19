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

    return (
        <div className={styles.page}>
            <h1 className={styles.name}>{employee.name}</h1>
            <div className={styles.container}>
                {employee.avatar
                    ? <img className={styles.avatar} src={employee.avatar} alt='аватар' />
                    : <img className={styles.avatar} src='https://cdn-icons-png.flaticon.com/512/18/18601.png' />}
                <div className={styles.infoContaiener}>
                    <input type="number" value={employeeData.age} onChange={(e) => { setEmployeeData({ ...employeeData, age: Number(e.target.value) }) }} />
                    <input type="string" value={employeeData.avatar} onChange={(e) => { setEmployeeData({ ...employeeData, avatar: e.target.value }) }} />
                    <input type="email" value={employeeData.login} onChange={(e) => { setEmployeeData({ ...employeeData, login: e.target.value }) }} />
                    <input type="name" value={employeeData.name} onChange={(e) => { setEmployeeData({ ...employeeData, name: e.target.value }) }} />
                    <input type="text" value={employeeData.password} onChange={(e) => { setEmployeeData({ ...employeeData, password: e.target.value }) }} />
                    <input type="number" value={employeeData.salary} onChange={(e) => { setEmployeeData({ ...employeeData, salary: Number(e.target.value) }) }} />
                    <input type="text" value={employeeData.status} onChange={(e) => { setEmployeeData({ ...employeeData, status: e.target.value }) }} />
                    <input type="text" value={employeeData.tel} onChange={(e) => { setEmployeeData({ ...employeeData, tel: e.target.value }) }} />
                    <input list="workedList" value={employeeData.worked ? "работает" : "чилит"} onChange={(e) => { setEmployeeData({ ...employeeData, worked: e.target.value === "работает" ? true : false}) }} />
                    <select size={3} value={employeeData.worked ? "работает" : "чилит"} onChange={(e) => { setEmployeeData({...employeeData, worked: e.target.value == "работает" ? true : false})}}>
                        <option value="работает" >Работает</option>
                        <option value="чилит" >чилит</option>
                        <option value="что то" >что то</option>
                    </select>
                    <p className={styles.infoText}>{employeeData.id}</p>
                </div>
            </div>
        </div>
    )
}

export default EmployeePage