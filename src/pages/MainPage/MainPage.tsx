import React from "react";
import styles from './MainPage.module.css';
import { plan } from "../../utils/utilsData";
import { employeesData } from "../../utils/utilsData";
import { useLocation, useNavigate } from "react-router-dom";

export const MainPage: React.FC<Props> = ({title}) => {

    const location = useLocation()
    const navigate = useNavigate()

    const currentKPI = plan.needenPlan <= plan.total ? 0.07 : 0.05;

    const addEmploye = () => {
        navigate('/add-employe', {state: {background: location}})
    }

    const totalSxpenses = employeesData.reduce((acc, item) => {

        const totalKPI = item.hours.reduce((acc2, item2) => {
            return acc2 + item2.revenue * currentKPI
        }, 0)

        return (
            acc + (item.salary * item.hours.length + totalKPI)
        )
    }, 0)

    console.log(totalSxpenses)
    
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.employeeContainer}>
                {employeesData && employeesData.length > 0 && employeesData.map((employee) => {
                    const totalKPI = employee.hours.reduce((acc, item) => {
                        return acc + item.revenue * currentKPI
                    }, 0)
                    return (
                        <div className={styles.cart}>
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