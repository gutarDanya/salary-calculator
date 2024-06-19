import React from "react";
import styles from './IngredientContainer.module.css';
import { useInput } from "../../utils/hooks";
import deleteIcon from '../../utils/images/deleteIcon.png'

const IngredientContainer: React.FC<Props> = ({ingredient, handleDelete}) => {
    const name = useInput(ingredient, {isEmpty: true})
    return (
        <div className={styles.container}>
            <p className={styles.input}>{ingredient}</p>
            <button className={styles.deleteButton} type="button" onClick={() => {handleDelete(ingredient)}}>
                <img className={styles.image} alt="close-icon" src={deleteIcon}/>
            </button>
        </div>
    )
}

type Props = {
    ingredient: string;
    handleDelete: any;
}

export default IngredientContainer