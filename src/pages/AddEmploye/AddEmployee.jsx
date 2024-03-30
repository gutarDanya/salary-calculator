import React from "react";
import styles from './AddEmployee.module.css';
import { addNewEmployee, changeAgeOfNewEmployee, changeAvatarOfNewEmployee, changeLoginOfNewEmployee, changeNameOfNewEmployee, changePasswordOfNewEmployee, changeSalaryOfNewEmployee} from '../../services/actions/InputAction'
import { useAppDispatch } from "../../services/store";

const AddEmployee = () => {

    const dispatch = useAppDispatch();

    const addEmployee = (evt) => {
        evt.preventDefault()
        dispatch(addNewEmployee())
    }

    return (
        <form className={styles.container}>
            <div className={styles.inputContainer}>
                <input onChange={(e) => {dispatch(changeNameOfNewEmployee(e.target.value))}} className='input' type='text' name="name" placeholder="Имя сотрудника" />
                <input onChange={(e) => {dispatch(changeAgeOfNewEmployee(e.target.value))}} className='input' type='number' name='age' placeholder="возраст" />
                <input onChange={(e) => {dispatch(changeSalaryOfNewEmployee(e.target.value))}} className='input' type='number' name='salary' placeholder="ставка сотрудника" />
                <input onChange={(e) => {dispatch(changeAvatarOfNewEmployee(e.target.value))}}className='input' type='text' name='avatar' placeholder="аватар пользователя" />
                <input onChange={(e) => {dispatch(changeLoginOfNewEmployee(e.target.value))}} className="input" type='text' name='login' placeholder="e-mail" />
                <input onChange={(e) => {dispatch(changePasswordOfNewEmployee(e.target.value))}} className="input" type='text' name='passwotd' placeholder="пароль" />
            </div>
            <button onClick={addEmployee} className={styles.addButton} type='submit'>Добавить сотрудника</button>
        </form>
    )
}

export default AddEmployee