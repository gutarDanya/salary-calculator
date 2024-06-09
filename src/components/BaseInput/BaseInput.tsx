import React from "react";
import styles from './BaseInput.module.css';

const BaseInput: React.FC<Props> = ({input, type, name, placeholder}) => {
    return (
        <label className={styles.container}>
            <input onChange={e => input.onChange(e)} value={input.value} onBlur={e => input.onBlur(e)} className={styles.input} type={type} name={name} placeholder={placeholder}/>
            {(input.isDirty && input.minLenth || input.minNumber || input.isNumber || input.isEmpty) && <p className={styles.errorText}>{input.errorText}</p>}
        </label>
    )
}

export default BaseInput;

type Props = {
    input: any;
    type: "button" | "checkbox" | "color" | "date" | "text" | "number" | "email" | "password",
    name: string,
    placeholder: string
}