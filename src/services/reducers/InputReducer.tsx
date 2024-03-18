import TInputActions, { AGE_OF_NEW_EMPLOYEE, AVATAR_OF_NEW_EMPLOYEE, NAME_OF_NEW_EMPLOYEE, SALARY_OF_NEW_EMPLOYEE } from "../actions/InputAction";

const  initialState: TinitialState = {
    nameNewEmployee: '',
    ageNewEmployee: null,
    salaryNewEmployee: null,
    avatarNewEmployee: ''
}

type TinitialState = {
    nameNewEmployee: string;
    ageNewEmployee: null | number;
    salaryNewEmployee: null | number;
    avatarNewEmployee: string;
}

const InputReducer = (state = initialState, action: TInputActions) => {
    switch(action.type) {
        case NAME_OF_NEW_EMPLOYEE: {
            return {
                ...state,
                nameNewEmployee: action.payload
            }
        }
        case AGE_OF_NEW_EMPLOYEE: {
            return {
                ...state,
                ageNewEmployee: action.payload
            }
        }
        case SALARY_OF_NEW_EMPLOYEE: {
            return {
                ...state,
                salaryNewEmployee: action.payload
            }
        }
        case AVATAR_OF_NEW_EMPLOYEE: {
            console.log(action.payload)
            return {
                ...state,
                avatarNewEmployee: action.payload
            }
        }
        default: return state
    }
}

export default InputReducer