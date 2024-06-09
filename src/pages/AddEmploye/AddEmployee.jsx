import React from "react";
import styles from './AddEmployee.module.css';
import { useAppDispatch } from "../../services/store";
import { useInput } from "../../utils/hooks";
import { addEmployee } from "../../services/slices/EmployeeSlice";
import {v4 as uuid4} from 'uuid'
import BaseInput from "../../components/BaseInput/BaseInput";

const AddEmployee = () => {

    const nameInput = useInput("", {isEmpty: true, minLenth: 3});
    const ageInput = useInput("", {isEmpty: true, isNumber: true});
    const salaryInput = useInput("", {isNumber: true, isEmpty: true});
    const avatarInput = useInput("");
    const loginInput = useInput("", {isEmpty: true});
    const passwordInput = useInput("", {isEmpty: true});

    const dispatch = useAppDispatch();

    const submit = (evt) => {
        evt.preventDefault();
        const id = uuid4()
        console.log(id)
        dispatch(addEmployee({name: nameInput.value, age: ageInput.value, salary: salaryInput.value, avatar: avatarInput.value,id: id, login: loginInput.value, password: passwordInput.value }))
    }

    return (
        <form className={styles.container}>
            <div className={styles.inputContainer}>
                <BaseInput input={nameInput} type='text' name="name" placeholder="Имя сотрудника"/>
                <BaseInput input={ageInput} type="number" name="age" placeholder="Возраст" />
                <BaseInput input={salaryInput} type="number" name="salary" placeholder="ставка" />
                <BaseInput input={avatarInput} type="string" name="avatar" placeholder="Аватар" />
                <BaseInput input={loginInput} type="string" name="login" placeholder="логин" />
                <BaseInput input={passwordInput} type="password" name="password" placeholder="пароль" />
            </div>
            <button onClick={submit} className={styles.addButton} type='submit'>Добавить сотрудника</button>
        </form>
    )
}

export default AddEmployee