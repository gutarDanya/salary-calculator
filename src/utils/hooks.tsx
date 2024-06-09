import React, {useEffect, useState} from "react";

export const useValidation = (value: any, validations: any) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLenthError, setminLenthError] = useState(false);
    const [isNumberError, setIsNumberError] = useState(false);
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
                    const re = /^\d+$/
                    re.test(value) ? setIsNumberError(false) : setIsNumberError(true);
                    setErrorText("введите число")
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
        if (isEmpty || minLenthError || isNumberError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLenthError, isNumberError])

    return {
        isEmpty,
        minLenthError,
        isNumberError,
        inputValid,
        errorText
    }
}

export const useInput = (initialValue: any, validations: {isEmpty?: boolean, minLenth?: number, minNumber?: number, isNumber?: boolean} = {}) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations)

    const onChange = (e: any) => {
        if (typeof e === "number") {
            setValue(e)
        } else {
            setValue(e.target.value)
        }
    }

    const onBlur = (e: any) => {
        setIsDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}