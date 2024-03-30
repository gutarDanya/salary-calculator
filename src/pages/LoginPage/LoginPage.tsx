import React, { useState } from "react";
import styles from './LoginPage.module.css';
import { setLoginStatus, setLoginValue, setPasswordValue } from "../../services/actions/LoginAction";
import { employeesData } from "../../utils/utilsData";
import { setCookie } from "../../utils/Cookie";
import { useAppDispatch } from "../../services/store";

const LoginPage = () => {
    const dispatch = useAppDispatch();

    const [loginValue, changeLoginValue] = useState('');
    const [passwordValue, changePasswordValue] = useState('');

    const submitLogin = (evt: any) => {
        evt.preventDefault();
        dispatch(setLoginValue(loginValue))
        dispatch(setPasswordValue(passwordValue))

        if (employeesData.some((employee) => {return employee.login === loginValue && employee.password === passwordValue})) {
            dispatch(setLoginStatus(true))
        }
    }

    return(
        <div className={styles.container}>
            <form className={styles.window}>
                <h1 className={styles.headerText}>Вход</h1>
                <input onChange={(e) => {changeLoginValue(e.target.value)}} className={styles.input} type='email' placeholder="почта" />
                <input onChange={(e) => {changePasswordValue(e.target.value)}} className={styles.input} type='password' placeholder="пароль" />
                <button onClick={(e) => {submitLogin(e)}} className={styles.button} type='submit'>Войти</button>
            </form>
        </div>
    )
}

type Tselector = {
    LoginReducer: any
}

export default LoginPage