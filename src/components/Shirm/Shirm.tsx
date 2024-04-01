import React, { useState } from "react";
import styles from './Shirm.module.css';
import { Link, NavLink } from "react-router-dom";
import { setLoginStatus } from "../../services/actions/LoginAction";
import { switchShirmStatus } from "../../services/actions/InputAction";
import { useAppDispatch, useAppSelector } from "../../services/store";

const Shirm = () => {
    const dispatch = useAppDispatch();

    const shirmOpened = useAppSelector(state => state.InputReducer.shirmStatus);
    
    const exitFromAcc = () => {
        dispatch(setLoginStatus(false))
    }


    const userBoss = false;
    return (
        <div className={shirmOpened ? styles.containerOpened : styles.containerClosed}>
            <div className={styles.shirmContainer}>
                <nav className={styles.navigationContainer}>
                    <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink} to={'/'}>Сотрудники</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink} to={'/statistics'}>План</NavLink>
                </nav>
                <div className={styles.settingsContainer}>
                    <button className={styles.settingsButton} type='button'>
                        <img className={styles.settingsIcon} alt='Натсройки' src='https://img.icons8.com/?size=50&id=BYnvGv84C52t&format=png'/>
                        <p className={styles.settingsText}>Настройки</p>
                    </button>
                    <button className={styles.changeUser}><img alt='user' className={styles.userIcon} src={userBoss ? 'https://cdn-icons-png.flaticon.com/128/1654/1654220.png' : 'https://cdn-icons-png.flaticon.com/128/456/456212.png'} /></button>
                </div>
                <button className={styles.exitButton} onClick={exitFromAcc} type='button' >Выйти</button>
            </div>
            <button className={styles.switchShirm} onClick={() => {dispatch(switchShirmStatus())}} type='button' >{shirmOpened ? '<' : '>'}</button>
        </div>
    )
}

type Tselector = {
    InputReducer: any
}

export default Shirm