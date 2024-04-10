import React from "react";
import styles from './Dessert.module.css';
import { Tdesserts } from "../../../utils/Types";

const Dessert:React.FC<Props>  = ({dessert}) => {
    return (
        <div className={styles.dessert}>
            <img src={dessert.url} alt={dessert.name} className={styles.image} />
            <h2 className={styles.headerText}>{dessert.name}</h2>
        </div>
    )
}

export default Dessert

interface Props {
    dessert: Tdesserts
}