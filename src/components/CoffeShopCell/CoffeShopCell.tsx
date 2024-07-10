import React from "react";
import styles from './CoffeShopCell.module.css';
import { Link } from "react-router-dom";

const CoffeShopCell: React.FC<Props> = ({name, id}) => {
    return (
        <Link to={`${id}`} className={styles.cell}>
            <h2 className={styles.header}>{name}</h2>
        </Link>
    )
}

export default CoffeShopCell;

type Props = {
    name: string;
    id: string
}