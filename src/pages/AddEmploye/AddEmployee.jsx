import React from "react";
import styles from './AddEmployee.module.css';
import { useDispatch, useSelector } from "react-redux";
import { changeNameOfNewEmployee} from '../../services/actions/InputAction'

const AddEmployee = () => {

    const dispatch = useDispatch()

    const somethink = useSelector(state => state.InputReducer.nameNewEmployee);

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <input onChange={(e) => {dispatch(changeNameOfNewEmployee(e.target.value))
                console.log(somethink)}} className='input' type='text' name="name" placeholder="Имя сотрудника" />
                <input className='input' type='number' name='age' placeholder="возраст" />
                <input className='input' type='number' name='salary' placeholder="ставка сотрудника" />
                <input className='input' type='text' name='avatar' placeholder="аватар пользователя" />
            </div>
            <button className={styles.addButton} type='submit'>Добавить сотрудника</button>
        </div>
    )
}

export default AddEmployee