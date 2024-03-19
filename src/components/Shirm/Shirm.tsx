import React, { useState } from "react";
import styles from './Shirm.module.css';
import { Link, NavLink } from "react-router-dom";

const Shirm = () => {

    const [shirmOpened, setShirmOpened] = useState(false)

    return (
        <div className={shirmOpened ? styles.containerOpened : styles.containerClosed}>
            <div className={styles.shirmContainer}>
                <nav className={styles.navigationContainer}>
                    <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink} to={'/'}>Сотрудники</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink} to={'/statisic'}>План</NavLink>
                </nav>
                <div className={styles.settingsContainer}>
                    <button className={styles.settingsButton} type='button'>
                        <img className={styles.settingsIcon} alt='Натсройки' src='https://img.icons8.com/?size=50&id=BYnvGv84C52t&format=png'/>
                        <p className={styles.settingsText}>Настройки</p>
                    </button>
                </div>
            </div>
            <button className={styles.switchShirm} onClick={() => setShirmOpened(!shirmOpened)} type='button' >{shirmOpened ? '<' : '>'}</button>
        </div>
    )
}

export default Shirm