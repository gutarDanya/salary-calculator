import React, { useEffect } from "react";
import styles from './DessertPopup.module.css';
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { getCurrentDessert } from "../../services/slices/TestSlice";
import { Tdesserts } from "../../utils/Types";

const DessertPopup = () => {
    const dispatch = useAppDispatch();

    const { id } = useParams();


    dispatch(getCurrentDessert(Number(id)))

    const dessert = useAppSelector(state => state.TestSlice.currentDessert)

    if (!dessert) {
        return (
            <img className={styles.loadingImage} src='https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/08/s_2A9C470D38F43091CCD122E63014ED4503CAA7508FAF0C6806AE473C2B94B83E_1627522653545_loadinfo.gif?resize=200%2C200&ssl=1' />
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <img className={styles.image} src={dessert.url} alt={dessert!.name} />
                <h2 className={styles.dessertName}>{dessert.name}</h2>
            </div>
            <div className={styles.column}>
                <div className={styles.ingredients}>
                    {dessert.ingredients && dessert.ingredients.length > 0 && dessert.ingredients.map((ingredient: string, key: number) => {
                        return (
                            <p className={styles.ingredient}>{key + 1}) {ingredient}</p>
                        )
                    })}
                </div>
                <button type='button' className={styles.button}>изменить состав</button>
            </div>
        </div>
    )

}

export default DessertPopup;