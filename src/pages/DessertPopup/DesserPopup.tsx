import React, { useEffect } from "react";
import styles from './DessertPopup.module.css';
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { getCurrentDessert } from "../../services/slices/TestSlice";
import { Tdesserts } from "../../utils/Types";

const DessertPopup = () => {
    const dispatch = useAppDispatch();

    const { id } = useParams();

    const arr = id?.split(':')

    useEffect(() => {
        dispatch(getCurrentDessert(Number(arr?.[1])))
    }, [])

    const dessert = useAppSelector(state => state.TestSlice.currentDessert)

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <img className={styles.image} alt={dessert!.name} />
                <h2 className={styles.dessertName}>{dessert.name}</h2>
            </div>
            <div className={styles.column}>
                <div className={styles.ingredients}>
                    {dessert.ingredients && dessert.ingredients.length > 0 && dessert.ingredients.map((ingredient: string) => {
                        return (
                            <p className={styles.ingredient}>{ingredient}</p>
                        )
                    })}
                </div>
                <button type='button' className={styles.button}>изменить состав</button>
            </div>
        </div>
    )

}

export default DessertPopup;