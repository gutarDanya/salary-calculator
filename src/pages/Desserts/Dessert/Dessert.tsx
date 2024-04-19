import React from "react";
import styles from './Dessert.module.css';
import { Tdesserts } from "../../../utils/Types";
import { Link, useLocation } from "react-router-dom";

const Dessert:React.FC<Props>  = ({dessert}) => {

    const location = useLocation()
    return (
        <Link to={`${dessert.id}`} state={{background: location}} className={styles.dessert}>
            <img src={dessert.url} alt={dessert.name} className={styles.image} />
            <h2 className={styles.headerText}>{dessert.name}</h2>
        </Link>
    )
}

export default Dessert

interface Props {
    dessert: Tdesserts
}