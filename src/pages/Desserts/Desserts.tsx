import React, { useEffect } from "react";
import styles from './Desserts.module.css';
import { useAppDispatch, useAppSelector } from "../../services/store";
import { getDesserts } from "../../services/slices/TestSlice";
import Dessert from "./Dessert/Dessert";
import { Tdesserts } from "../../utils/Types";

const Desserts = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getDesserts())
    }, [])
    
    const shirmStatus = useAppSelector(state => state.InputReducer.shirmStatus)
    const desserts = useAppSelector(state => state.TestSlice.desserts)


    return (
        <div className={styles.page}>
            <h1 className={styles.headerText}>Дессерты</h1>
            <div className={styles.dessertsContainer} style={shirmStatus ? {marginLeft: '260px', width: 'calc(100% - 260px)'} : {}}>
                {desserts && desserts.length > 0 && desserts.map((dessert) => {
                    return (
                        <Dessert dessert={dessert!} />
                    )
                })}
            </div>
            <input className="input" type='text' placeholder="дессерт" />
        </div>
    )
}

export default Desserts