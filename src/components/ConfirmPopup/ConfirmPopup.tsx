import React, { useEffect, useState } from "react";
import styles from './ConfirmPopup.module.css';

const ConfirmPage: React.FC<Props> = ({ text, handleDelete, handleCancellation, buttonText }) => {
    const [disabled, setDisbled] = useState(true);

    const changeDisabled = () => {
        setTimeout(() => {
            setDisbled(false)
        }, 3000)
    }

    useEffect(() => {
        changeDisabled();
        return () => {
            setDisbled(false)
        }
    }, [])


    return (
        <div className={styles.container}>
            <form className={styles.buttoons}>
                <button className={styles.remove} disabled={disabled} onClick={(e) => {e.preventDefault();  handleDelete()}} type="submit">{buttonText}</button>
                <button className={styles.cancelButton}>Отмена</button>
            </form>
        </div>
    )
}

export default ConfirmPage

type Props = {
    text?: string;
    buttonText: string;
    handleDelete: () => void;
    handleCancellation: () => void;
}