import React from "react";
import styles from './CoffeShopCell.module.css';

const CoffeShopCell: React.FC<Props> = ({name}) => {
    return (
        <div className={styles.cell}>
            <h2 className={styles.header}>{name}</h2>
        </div>
    )
}

export default CoffeShopCell;

type Props = {
    name: string;

}