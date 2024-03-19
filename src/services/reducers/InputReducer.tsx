import { Temployee } from "../../utils/Types";
import TInputActions, { ADD_NEW_EMPLOYEE, AGE_OF_NEW_EMPLOYEE, AVATAR_OF_NEW_EMPLOYEE, LOAD_EMPLOYEES, NAME_OF_NEW_EMPLOYEE, SALARY_OF_NEW_EMPLOYEE } from "../actions/InputAction";

const  initialState: TinitialState = {
    employees: [],
    nameNewEmployee: '',
    ageNewEmployee: null,
    salaryNewEmployee: null,
    avatarNewEmployee: ''
}

type TinitialState = {
    employees: Array<Temployee>
    nameNewEmployee: string;
    ageNewEmployee: null | number;
    salaryNewEmployee: null | number;
    avatarNewEmployee: string;
}

const InputReducer = (state:TinitialState = initialState, action: TInputActions) => {
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
            return {
                ...state,
                avatarNewEmployee: action.payload
            }
        }
        case LOAD_EMPLOYEES: {
            console.log(action.payload)
            return {
                ...state,
                employees: action.payload
            }
        }
        case ADD_NEW_EMPLOYEE: {
            return {
                ...state,
                employees: [...state.employees, {
                    name: state.nameNewEmployee,
                    age: state.ageNewEmployee,
                    salary: state.salaryNewEmployee,
                    avatar: state.avatarNewEmployee ? state.avatarNewEmployee : 'https://cdn-icons-png.flaticon.com/512/18/18601.png',
                    worked: false,
                    hours: []
                }]
            }
        }
        default: return state
    }
}

export default InputReducer