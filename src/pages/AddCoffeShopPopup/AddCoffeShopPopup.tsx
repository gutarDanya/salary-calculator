import React from "react";
import styles from './AddCoffeShopPopup.module.css';
import { useInput } from "../../utils/hooks";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { v4 as uuid } from "uuid";
import { sendNewCoffeShop } from "../../services/slices/CoffeShopsSlice";
import BaseInput from "../../components/BaseInput/BaseInput";
import { checkValidity } from "../../utils/scripts";

const AddCoffeShopPopup = () => {
    const dispatch = useAppDispatch();
    const name = useInput("", {isEmpty: true });
    const plan = useInput("", {isEmpty: false, isNumber: true });
    const adress = useInput("", {isEmpty: true});

    const validity = checkValidity(name, plan, adress);

    function addCoffeShop () {
        dispatch(sendNewCoffeShop({
            name: name.value,
            plan: Number(plan.value),
            adess: adress.value,
            id: uuid(),
            complitedPlan: 0,
            provisions: []
        }))
    }
    

    return (
        <div className={styles.popup}>
            <BaseInput input={name} name='name' type="text" placeholder="названиее"/>
            <BaseInput input={plan} name='plan' type='number' placeholder="План" />
            <BaseInput input={adress} name='adress' type="text" placeholder="адресс" />
            <button className={styles.addButton} disabled={validity} onClick={addCoffeShop}>Добавить</button>
        </div>
    )
}

export default AddCoffeShopPopup;