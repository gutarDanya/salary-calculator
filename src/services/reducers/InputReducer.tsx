import { Temployee } from "../../utils/Types";
import TInputActions, {
    ADD_NEW_EMPLOYEE,
    AGE_OF_NEW_EMPLOYEE,
    AVATAR_OF_NEW_EMPLOYEE,
    NAME_OF_NEW_EMPLOYEE,
    SALARY_OF_NEW_EMPLOYEE,
    SWITCH_SHIRM_STATUS
} from "../actions/InputAction";


const initialState: IinitialState = {
    employees: [],
    nameNewEmployee: '',
    ageNewEmployee: 0,
    salaryNewEmployee: 0,
    avatarNewEmployee: '',
    login: '',
    password: '',
    shirmStatus: true
}

interface IinitialState {
    employees: Array<Temployee>
    nameNewEmployee: string;
    ageNewEmployee: number;
    salaryNewEmployee: number;
    avatarNewEmployee: string;
    login: string;
    password: string;
    shirmStatus: boolean
}

const InputReducer = (state: IinitialState = initialState, action: TInputActions): IinitialState => {
    switch (action.type) {
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
        case ADD_NEW_EMPLOYEE: {
            return {
                ...state,
                employees: [...state.employees, {
                    name: state.nameNewEmployee,
                    age: state.ageNewEmployee,
                    salary: state.salaryNewEmployee,
                    avatar: state.avatarNewEmployee ? state.avatarNewEmployee : 'https://cdn-icons-png.flaticon.com/512/18/18601.png',
                    worked: false,
                    hours: [],
                    login: state.login,
                    password: state.password,
                    id: new Date,
                    status: 'стажёр',
                    tel: ''
                }]
            }
        }
        case SWITCH_SHIRM_STATUS: {
            console.log(state.shirmStatus)
            return {
                ...state,
                shirmStatus: !state.shirmStatus
            }
        }
        default: return state
    }
}

export default InputReducer