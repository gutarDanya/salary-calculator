import React from "react";
import styles from './AddDessertPopup.module.css';
import BaseInput from "../../components/BaseInput/BaseInput";
import { useInput } from "../../utils/hooks";
import { useAppDispatch } from "../../services/store";
import { checkValidity } from "../../utils/scripts";

const AddDessertPopup = () => {
    const dispatch = useAppDispatch();
    const name = useInput('', {isEmpty: true});
    const url = useInput('');
    const kkal = useInput("0", {isNumber: true});
    const p = useInput("0", {isNumber: true});
    const f = useInput("0", {isNumber: true});
    const c = useInput("0", {isNumber: true});

    const validity = checkValidity(name, url, kkal, p, f, c)

    function sendNewDessert () {
        
    }

    return (
        <form className={styles.container}>
            <BaseInput input={name} type="text" name="nameOfDessert" placeholder="название позиции" text="наименование"/>
            <BaseInput input={url} type="url" name="url" placeholder="url" text="изображение"/>
            <BaseInput input={kkal} type="number" name="kkal" placeholder="kkal/100г" text="калории"/>
            <BaseInput input={p} type="number" name="p" placeholder="белок/100г" text='белок'/>
            <BaseInput input={f} type="number" name="f" placeholder="жиры/100г" text='жиры'/>
            <BaseInput input={c} type="number" name="c" placeholder="углеводы/100г" text="углеводы"/>
            <button disabled={validity} className={styles.submit} onClick={sendNewDessert} type="submit">Добавить дессерт</button>
        </form>
    )
}

export default AddDessertPopup