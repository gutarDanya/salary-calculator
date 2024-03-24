import { SET_LOGIN_STATUS, SET_LOGIN_VALUE, SET_PASSWORD_VALUE } from "../actions/LoginAction";
import TLoginActions from "../actions/LoginAction";

type TinitialState = {
    login: string;
    password: string;
    loginStatus: boolean;
}

const initialState: TinitialState = {
    login: '',
    password: '',
    loginStatus: false
}

const LoginReducer = (state: TinitialState = initialState, action: TLoginActions) => {
    switch (action.type) {
        case SET_LOGIN_VALUE: {
            return {
                ...state,
                login: action.payload
            }
        }
        case SET_PASSWORD_VALUE: {
            return {
                ...state,
                password: action.payload
            }
        }
        case SET_LOGIN_STATUS: {
            return {
                ...state,
                loginStatus: action.payload
            }
        }
        default: return state
    }
}

export default LoginReducer