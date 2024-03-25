import { deleteCookie, getCookie, setCookie } from "../../utils/Cookie";
import { CHECK_AUTH_USER, SET_LOGIN_STATUS, SET_LOGIN_VALUE, SET_PASSWORD_VALUE } from "../actions/LoginAction";
import TLoginActions from "../actions/LoginAction";

type TinitialState = {
    login: string;
    password: string;
    loginStatus: boolean | string;
}

const initialState: TinitialState = {
    login: '',
    password: '',
    loginStatus: ''
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
            action.payload ? setCookie('logined', 'login') : deleteCookie('logined')
            return {
                ...state,
                loginStatus: getCookie('logined')
            }
        }
        case CHECK_AUTH_USER: {
            return {
                ...state,
                loginStatus: getCookie('logined')
            }
        }
        default: return state
    }
}

export default LoginReducer