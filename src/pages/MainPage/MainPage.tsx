import React from "react";
import styles from './MainPage.module.css';
import { plan } from "../../utils/utilsData";
import { employeesData } from "../../utils/utilsData";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Temployee } from "../../utils/Types";

export const MainPage: React.FC<Props> = ({title}) => {

    const location = useLocation()
    const navigate = useNavigate()

    const currentKPI = plan.needenPlan <= plan.total ? 0.07 : 0.05;

    const employees = useSelector((state: Tselector) => state.InputReducer.employees);

    const some = useSelector((state: Tselector) => state.InputReducer)
    console.log(some)


    const addEmploye = () => {
        navigate('/add-employe', {state: {background: location}})
    }

    const totalSxpenses = employees.reduce((acc: number, item: Temployee) => {

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
                {employees && employees.length > 0 && employees.map((employee: Temployee) => {
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

type Tselector = {
    InputReducer: any
}