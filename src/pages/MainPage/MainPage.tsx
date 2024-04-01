import React, { useEffect } from "react";
import styles from './MainPage.module.css';
import { plan } from "../../utils/utilsData";
import { useLocation, useNavigate } from "react-router-dom";
import { Temployee } from "../../utils/Types";
import { useAppSelector } from "../../services/store";

export const MainPage: React.FC<Props> = ({title}) => {

    const location = useLocation()
    const navigate = useNavigate()

    let pageActive = false;

    const currentKPI = plan.needenPlan <= plan.total ? 0.07 : 0.05;

    const employees = useAppSelector(state => state.InputReducer.employees);

    const shirmOpened = useAppSelector(state => state.InputReducer.shirmStatus);

    const addEmploye = () => {
        navigate('/add-employe', {state: {background: location}})
    }

    useEffect(() => {
        pageActive = true
    }, [])

    const totalSxpenses = employees.reduce((acc: number, item: Temployee) => {

        const totalKPI = item.hours.reduce((acc2, item2) => {
            return acc2 + item2.revenue * currentKPI
        }, 0)

        return (
            acc + (item.salary * item.hours.length + totalKPI)
        )
    }, 0)

    
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.employeeContainer} style={shirmOpened ? {marginLeft: '260px', width: 'calc(100% - 260px)'} : {}}>
                {employees && employees.length > 0 && employees.map((employee: Temployee, i: number) => {
                    const totalKPI = employee.hours.reduce((acc, item) => {
                        return acc + item.revenue * currentKPI
                    }, 0)
                    return (
                        <div className={styles.cart} key={employee.id}>
                            <div className={styles.bio}>
                            {employee.avatar
                             ? <img className={styles.avatar} src={employee.avatar} alt='аватар' /> 
                             : <img className={styles.avatar} src='https://cdn-icons-png.flaticon.com/512/18/18601.png' />}
                             <div className={employee.worked ? styles.working : styles.chilling} />
                            <p className={styles.employeeName}>{employee.name}</p>
                            </div>
                            <p className={styles.salary}>{employee.salary * employee.hours.length + totalKPI}</p>
                        </div>
                    )
                })}
            </div>
            <button type="button" className={styles.addEmploye} onClick={addEmploye}>Добавить сотрудника</button>
            <p className={styles.totalExpenses}>суммарные расходы: {totalSxpenses} ₽</p>
        </div>
    )
}

type Props = {
    title?: string
}

type Tselector = {
    InputReducer: any
}