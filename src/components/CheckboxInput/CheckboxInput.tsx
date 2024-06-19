import React from "react";
import styles from './CheckboxInput.module.css';

const CheckboxInput: React.FC<Props> = ({input, text}) => {
    function handleCheckBox () {
        input.setState(!input.value)
    }

    return (
        <div className={styles.container} onClick={handleCheckBox}>
            <input type='checkbox' className={styles.checkbox} checked={input.value} />
            <p className={styles.text}>{text}</p>
        </div>
    )
}

type Props = {
    input: any;
    text: string;
}
export default CheckboxInput;