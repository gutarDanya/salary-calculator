import React from "react";
import styles from './EmployeeCard.module.css';
import { Temployee } from "../../utils/Types";
import { Link, useLocation } from "react-router-dom";

const EmployeeCard: React.FC<Props> = ({ employee, totalKPI }) => {

    const location = useLocation();


    return (
        <Link to={`/:${employee.id}`} state={{background: location}} className={styles.cart} key={employee.id}>
            <div className={styles.bio}>
                {employee.avatar
                    ? <img className={styles.avatar} src={employee.avatar} alt='аватар' />
                    : <img className={styles.avatar} src='https://cdn-icons-png.flaticon.com/512/18/18601.png' />}
                <div className={employee.worked ? styles.working : styles.chilling} />
                <p className={styles.employeeName}>{employee.name}</p>
            </div>
            <p className={styles.salary}>{employee.salary * employee.hours.length + totalKPI}</p>
        </Link>
    )
}

type Props = {
    employee: Temployee,
    totalKPI: number
}

export default EmployeeCard;