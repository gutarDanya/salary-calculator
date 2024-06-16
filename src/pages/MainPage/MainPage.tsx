import React, { useEffect } from "react";
import styles from './MainPage.module.css';
import { plan } from "../../utils/utilsData";
import { useLocation, useNavigate } from "react-router-dom";
import { Temployee } from "../../utils/Types";
import { useAppSelector } from "../../services/store";
import { baseTestUrl } from "../../utils/scripts";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";

export const MainPage: React.FC<Props> = ({title}) => {

    const location = useLocation();
    const navigate = useNavigate();

    let pageActive = false;

    const currentKPI = 0.05;

    const employees = useAppSelector(state => state.EmployeeSlice.employees);

    const shirmOpened = useAppSelector(state => state.AppSlice.shirmStatus);

    const addEmploye = () => {
        navigate('/add-employe', {state: {background: location}})
    }

    useEffect(() => {
        pageActive = true
    }, [])

    // const totalSxpenses = employees.reduce((acc: number, item: Temployee) => {

        
    // }, 0)

    
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.employeeContainer} style={shirmOpened ? {marginLeft: '260px', width: 'calc(100% - 260px)'} : {}}>
                {employees && employees.length > 0 && employees.map((employee: Temployee, i: number) => {
                    const totalKPI =employee.hours && employee.hours.length > 0 ? employee.hours.reduce((acc, item) => {
                        return acc + item.revenue * currentKPI
                    }, 0) : 0
                    return (
                        <EmployeeCard employee={employee} totalKPI={totalKPI} key={i}/>
                    )
                })}
            </div>
            <button type="button" className={styles.addEmploye} onClick={addEmploye}>Добавить сотрудника</button>
            <p className={styles.totalExpenses}>суммарные расходы: ₽</p>
        </div>
    )
}

type Props = {
    title?: string
}

type Tselector = {
    InputReducer: any
}