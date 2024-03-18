import React from "react";
import styles from './AddEmployee.module.css';

const AddEmployee = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <input className='input' type='text' name="name" placeholder="Имя сотрудника" />
                <input className='input' type='number' name='age' placeholder="возраст" />
                <input className='input' type='number' name='salary' placeholder="ставка сотрудника" />
                <input className='input' type='text' name='avatar' placeholder="аватар пользователя" />
            </div>
            <button className={styles.addButton} type='submit'>Добавить сотрудника</button>
        </div>
    )
}

export default AddEmployee