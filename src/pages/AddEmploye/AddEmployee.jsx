import React from "react";
import styles from './AddEmployee.module.css';
import { useDispatch, useSelector } from "react-redux";
import { addNewEmployee, changeAgeOfNewEmployee, changeAvatarOfNewEmployee, changeNameOfNewEmployee, changeSalaryOfNewEmployee} from '../../services/actions/InputAction'

const AddEmployee = () => {

    const dispatch = useDispatch()

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
            </div>
            <button onClick={addEmployee} className={styles.addButton} type='submit'>Добавить сотрудника</button>
        </form>
    )
}

export default AddEmployee