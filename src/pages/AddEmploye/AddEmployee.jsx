import React from "react";
import styles from './AddEmployee.module.css';
import { useAppDispatch } from "../../services/store";
import { useInput } from "../../utils/hooks";
import { AddUser } from "../../services/slices/EmployeeSlice";
import {v4 as uuid4} from 'uuid'
import BaseInput from "../../components/BaseInput/BaseInput";
import { useNavigate } from "react-router-dom";
import { checkValidity } from "../../utils/scripts";

const AddEmployee = () => {
    
    const navigate = useNavigate();

    const nameInput = useInput("", {isEmpty: true, minLenth: 3});
    const ageInput = useInput("", {isEmpty: true, isNumber: true});
    const salaryInput = useInput("", {isNumber: true, isEmpty: true});
    const avatarInput = useInput("https://www.google.com/imgres?q=%D0%BF%D1%83%D1%81%D1%82%D0%B0%D1%8F%20%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0%20%D0%B2%D0%BA&imgurl=https%3A%2F%2Fflomaster.top%2Fuploads%2Fposts%2F2023-01%2Fthumbs%2F1673563911_flomaster-club-p-profil-risunok-vkontakte-74.png&imgrefurl=https%3A%2F%2Fflomaster.top%2F81109-profil-risunok.html&docid=oGrriwBgvY33DM&tbnid=G62udu2TO99ilM&vet=12ahUKEwj82f2Fj-KGAxWgKRAIHXamDqwQM3oECEsQAA..i&w=750&h=750&hcb=2&ved=2ahUKEwj82f2Fj-KGAxWgKRAIHXamDqwQM3oECEsQAA", {isEmpty: false});
    const loginInput = useInput("", {isEmpty: true});
    const passwordInput = useInput("", {isEmpty: true});

    const validity = checkValidity(nameInput, ageInput, salaryInput, avatarInput, loginInput, passwordInput)

    const dispatch = useAppDispatch();

    const submit = (evt) => {
        evt.preventDefault();
        const id = uuid4();
        navigate(-1)
        dispatch(AddUser({name: nameInput.value, age: ageInput.value, salary: salaryInput.value, avatar: avatarInput.value,id: id, login: loginInput.value, password: passwordInput.value }))
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
            <button disabled={validity} onClick={submit} className={styles.addButton} type='submit'>Добавить сотрудника</button>
        </form>
    )
}

export default AddEmployee