import React, { useEffect, useState } from "react";
import styles from './Desserts.module.css';
import { useAppDispatch, useAppSelector } from "../../services/store";
import { findDessert, getDesserts, getFilteredDesserts } from "../../services/slices/TestSlice";
import Dessert from "./Dessert/Dessert";
import { useLocation, useNavigate } from "react-router-dom";
import { useInput } from "../../utils/hooks";
import BaseInput from "../../components/BaseInput/BaseInput";
import CheckboxInput from "../../components/CheckboxInput/CheckboxInput";

const Desserts = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const nameOfDessert = useInput("", {isEmpty: false})

    const withoutGluten = useInput(false, {isEmpty:false});
    const fewCalories = useInput(false, {isEmpty: false});
    const vegan = useInput(false, {isEmpty: false})
    const withoutFlour = useInput(false, {isEmpty: false})
    const withoutEggs = useInput(false, {isEmpty: false})
    const withoutMilk = useInput(false, {isEmpty: false})
    const withoutTopinambura = useInput(false, {isEmpty: false})
    const withoutStevia = useInput(false, {isEmpty: false})


    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getDesserts())
    }, []);

    const shirmStatus = useAppSelector(state => state.AppSlice.shirmStatus)
    const desserts = useAppSelector(state => state.TestSlice.filterderDesserts);
    

    const submitForm = (evt: any) => {
        evt.preventDefault()
        dispatch(getFilteredDesserts({
            withoutEggs: withoutEggs.value,
            withoutFlour: withoutFlour.value,
            withoutGluten: withoutGluten.value,
            withoutMilk: withoutMilk.value,
            vegan: vegan.value,
            fewCalories: fewCalories.value,
            withoutStevia: withoutStevia.value,
            withoutTopinambura: withoutTopinambura.value,
            searchQuery: nameOfDessert.value
        }))
    }

    function sendDessert (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        evt.preventDefault();
        navigate('add-dessert', {state: {background: location}})
    } 

    return (
        <div className={styles.page}>
            <h1 className={styles.headerText}>Дессерты</h1>
            <div className={styles.container} style={shirmStatus ? { marginLeft: '260px' } : {}}>
                <div className={styles.dessertsContainer}>
                    {desserts && desserts.length > 0 && desserts.map((dessert) => {
                        return (
                            <Dessert dessert={dessert!} />
                        )
                    })}
                    <button type="button" className={styles.addDessertButton} onClick={sendDessert}>Добавить Дессерт</button>
                </div>
                <form className={styles.findContainer}>
                    <BaseInput input={nameOfDessert} type="text" placeholder="дессерт"  name="search" />
                    <CheckboxInput input={withoutGluten} text="без глютена" />
                    <CheckboxInput input={fewCalories} text="низкоколорийные" />
                    <CheckboxInput input={vegan} text="веганские" />
                    <CheckboxInput input={withoutFlour} text="без муки" />
                    <CheckboxInput input={withoutEggs} text="без яиц" />
                    <CheckboxInput input={withoutMilk} text="без молока" />
                    <CheckboxInput input={withoutStevia} text="без стевии" />
                    <CheckboxInput input={withoutTopinambura} text="без топинамбуры" />
                    <button type='submit' className={styles.submitSerch} onClick={submitForm}>Применить</button>
                </form>
            </div>
        </div>
    )
}

export default Desserts