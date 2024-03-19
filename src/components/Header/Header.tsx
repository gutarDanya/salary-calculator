import React from "react";
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.container}>
            <img className={styles.logo} src='https://static.tildacdn.com/tild6665-3933-4965-b265-376530653061/logo.svg' alt='logo' />
        </header>
    )
}