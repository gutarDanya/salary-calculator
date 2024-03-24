import React, { useState } from "react";
import styles from './LoginPage.module.css';
import { useDispatch } from "react-redux";
import { setLoginValue, setPasswordValue } from "../../services/actions/LoginAction";

const LoginPage = () => {
    const dispatch = useDispatch();

    const [loginValue, changeLoginValue] = useState('');
    const [passwordValue, changePasswordValue] = useState('')

    const submitLogin = (evt: any) => {
        evt.preventDefault()
        dispatch(setLoginValue(loginValue))
        dispatch(setPasswordValue(passwordValue))
    }

    return(
        <div className={styles.container}>
            <form className={styles.window}>
                <h1 className={styles.headerText}>Вход</h1>
                <input onChange={(e) => {changeLoginValue(e.target.value)}} className={styles.input} type='email' placeholder="почта" />
                <input onChange={(e) => {changePasswordValue(e.target.value)}} className={styles.input} type='password' placeholder="пароль" />
                <button onClick={submitLogin} className={styles.button} type='submit'>Войти</button>
            </form>
        </div>
    )
}

export default LoginPage