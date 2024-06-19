import React, {useEffect, useState} from "react";

export const useValidation = (value: any, validations: any) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLenthError, setminLenthError] = useState(false);
    const [isNumber, setIsNumber] = useState(false);
    const [inputValid, setInputValid] = useState(false);
    const [errorText, setErrorText] = useState("")
    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "isEmpty": 
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    setErrorText("поле не должно быть пустым")
                break;
                case "isNumber": 
                    const re = new RegExp("^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$")
                    if (re.test(value) || typeof value === "number") {
                        setIsNumber(false)
                        setErrorText('')
                    } else {
                        setIsNumber(true)
                        setErrorText('Введите число')
                    }
                break;
                case "minLenth":
                    value.length < validations[validation] ? setminLenthError(true) : setminLenthError(false);
                    setErrorText(`символов должно быть больше чем ${validations[validation]}`)
                break;
                case "minNumber":
                    
                break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLenthError || isNumber ) {
            setInputValid(false)
        } else {
            setInputValid(true)
            setErrorText("")
        }
    }, [isEmpty, minLenthError, setIsNumber])

    return {
        isEmpty,
        minLenthError,
        setIsNumber,
        inputValid,
        errorText
    }
}

export const useInput = (initialValue: any, validations: {isEmpty?: boolean, minLenth?: number, minNumber?: number, isNumber?: boolean} = {}) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations)

    const onChange = (e: any) => {
            setValue(e.target.value)
    }

    const setState = (value: any ) => {
        setValue(value)
    }

    const onBlur = (e: any) => {
        setIsDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        setState,
        isDirty,
        ...valid
    }
}