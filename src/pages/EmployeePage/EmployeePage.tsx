import React, { useEffect, useState } from "react";
import styles from './EmployeePage.module.css';
import { useAppDispatch, useAppSelector } from "../../services/store";
import { useParams } from "react-router-dom";
import { getCurrentEmployee, updateUser } from "../../services/slices/EmployeeSlice";
import { useInput } from "../../utils/hooks";
import BaseInput from "../../components/BaseInput/BaseInput";

const EmployeePage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const employees = useAppSelector((state) => state.EmployeeSlice.employees)
    useEffect(() => {
        dispatch(getCurrentEmployee(id!))
    }, [employees])

    const employee = useAppSelector(state => state.EmployeeSlice.currentEmployee);
    const [hoursListOpened, setHoursListOpened] = useState(false);
    const shirmOpened = useAppSelector(state => state.AppSlice.shirmStatus);

    let name = useInput(employee.name, {isEmpty: true})
    let age = useInput(employee.age, {isNumber: true, isEmpty: true})
    let avatar = useInput(employee.avatar);
    let login = useInput(employee.login);
    let salary = useInput(employee.salary, {isNumber: true});
    let tel = useInput(employee.tel, {isEmpty: true, isNumber: true});
    let password = useInput(employee.password, {isEmpty: true});

    useEffect(() => {
        name.setState(employee.name);
        age.setState(employee.age);
        avatar.setState(employee.avatar);
        login.setState(employee.login);
        salary.setState(employee.salary);
        tel.setState(employee.tel)
        password.setState(employee.password)
    }, [employee]);
    
    function submit (e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        dispatch(updateUser({
            name: name.value,
            age: age.value,
            avatar: avatar.value,
            login: login.value,
            salary: salary.value,
            tel: tel.value,
            password: password.value,
            id: employee.id,
            hours: employee.hours,
            worked: employee.worked,
            status: employee.status}))
    }

    const totalKPI = employee.hours.reduce((acc, item) => {
        return (acc + employee.salary + item.revenue * 0.05)
    }, 0)

    return (
        employee.name != ''
            ? (<div className={styles.page} style={shirmOpened ? { marginLeft: "260px" } : {}}>
                <h1 className={styles.name}>{employee.name}</h1>
                <div className={styles.container}>
                    {employee.avatar
                        ? <img className={styles.avatar} src={employee.avatar} alt='аватар' />
                        : <img className={styles.avatar} src='https://cdn-icons-png.flaticon.com/512/18/18601.png' />}
                    <div className={styles.infoContaiener}>
                        <BaseInput input={name!} type='text' name='name' placeholder="Имя сотрудника" text="Имя сотрудника"/>
                        <BaseInput input={age!} type='number' name='age' placeholder="возраст" text="Возраст"/>
                        <BaseInput input={avatar!} type='text' name='avatar' placeholder="ссылка на аватар" text="аватар"/>
                        <BaseInput input={login!} type='text' name='login' placeholder="лоин пользователя" text="логин"/>
                        <BaseInput input={salary!} type='number' name='salary' placeholder="ставка" text="оклад/ч"/>
                        <BaseInput input={tel!} type='number' name='telephone' placeholder="номер" text="номер сотрудника"/>
                        <BaseInput input={password!} type='password' name='name' placeholder="пароль" text="пароль"/>
                    </div>
                </div>
                <button className={styles.hoursButton} type='button' onClick={() => { setHoursListOpened(!hoursListOpened) }}>список часов <p className={styles.icon}>{hoursListOpened ? "▼" : "▲"}</p></button>
                {hoursListOpened && (
                    <div className={styles.hoursContainer}>
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
                <button type="submit" onClick={submit} className={styles.submitButton}>Сохранить изменения</button>
            </div>)
            : null)

}

export default EmployeePage