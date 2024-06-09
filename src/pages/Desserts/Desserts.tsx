import React, { useEffect, useState } from "react";
import styles from './Desserts.module.css';
import { useAppDispatch, useAppSelector } from "../../services/store";
import { findDessert, getDesserts, getFilteredDesserts } from "../../services/slices/TestSlice";
import Dessert from "./Dessert/Dessert";
import { Tdesserts } from "../../utils/Types";

const Desserts = () => {

    const [filters, setFilters] = useState({fewCalories: false, vegan: false, withoutFlour: false, withoutGluten: false, withoutEggs: false, withoutMilk: false,});
    const [nameOfDessert, setNameOfDessert] = useState('')

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getDesserts())
    }, []);

    useEffect(() => {
        if (nameOfDessert != '')
        dispatch(findDessert(nameOfDessert));
    }, [nameOfDessert])

    const shirmStatus = useAppSelector(state => state.AppSlice.shirmStatus)
    const desserts = useAppSelector(state => state.TestSlice.filterderDesserts);
    

    const submitForm = (evt: any) => {
        evt.preventDefault()
        dispatch(getFilteredDesserts(filters))
        console.log(desserts)
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
                </div>
                <form className={styles.findContainer}>
                    <input className={`input ${styles.input}`} type='text' placeholder="дессерт" value={nameOfDessert} onChange={e => setNameOfDessert(e.target.value)}/>
                    <label className={styles.checkboxContainer}>
                        <input type='checkbox' onClick={() => setFilters({...filters, withoutGluten: !filters.withoutGluten})}/>
                        <p className={styles.checkboxText}>без глютена</p>
                    </label>
                    <label className={styles.checkboxContainer}>
                        <input type='checkbox' onClick={() => setFilters({...filters, fewCalories: !filters.fewCalories})}/>
                        <p className={styles.checkboxText} >низкоколорийные</p>
                    </label>
                    <label className={styles.checkboxContainer}>
                        <input type="checkbox" onClick={() => setFilters({...filters, vegan: !filters.vegan})}/>
                        <p className={styles.checkboxText} >Вегнские</p>
                    </label>
                    <label className={styles.checkboxContainer}>
                        <input type="checkbox" onClick={() => setFilters({...filters, withoutFlour: !filters.withoutFlour})}/>
                        <p className={styles.checkboxText} >без муки</p>
                    </label>
                    <label className={styles.checkboxContainer}>
                        <input type="checkbox" onClick={() => setFilters({...filters, withoutEggs: !filters.withoutEggs})}/>
                        <p className={styles.checkboxText} >без яиц</p>
                    </label>
                    <label className={styles.checkboxContainer}>
                        <input type="checkbox" onClick={() => setFilters({...filters, withoutMilk: !filters.withoutMilk})}/>
                        <p className={styles.checkboxText} >без молока</p>
                    </label>
                    <label className={styles.checkboxContainer}>
                        <input type="checkbox" checked={true}/>
                        <p className={styles.checkboxText} >топинамбура</p>
                    </label>
                    <label className={styles.checkboxContainer}>
                        <input type="checkbox" checked={true}/>
                        <p className={styles.checkboxText} >стевия</p>
                    </label>
                    <button type='submit' className={styles.submitSerch} onClick={submitForm}>Применить</button>
                </form>
            </div>
        </div>
    )
}

export default Desserts