export const SET_LOGIN_VALUE: 'SET_LOGIN_VALUE' ='SET_LOGIN_VALUE';
export const SET_PASSWORD_VALUE: 'SET_PASSWORD_VALUE' = 'SET_PASSWORD_VALUE';
export const SET_LOGIN_STATUS: 'SET_LOGIN_STATUS' = 'SET_LOGIN_STATUS';
export const CHECK_AUTH_USER: 'CHECK_AUTH_USER' = 'CHECK_AUTH_USER';

interface IsetLoginValue {
    readonly type: typeof SET_LOGIN_VALUE;
    payload: string;
}

export const setLoginValue = (value: string) => {
    return {type: SET_LOGIN_VALUE, payload: value}
}

interface IsetPassword {
    readonly type: typeof SET_PASSWORD_VALUE;
    payload: string
}

export const setPasswordValue = (value: string) => {
    return {type: SET_PASSWORD_VALUE, payload: value}
}

interface IsetLoginStatus {
    readonly type: typeof SET_LOGIN_STATUS;
    payload?: boolean;
}

export const setLoginStatus = (status: boolean) => {
    return {type: SET_LOGIN_STATUS, payload: status}
}

interface IcheckLoginOfUser {
    readonly type: typeof CHECK_AUTH_USER
}

export const checkUserAuth = () => {
    return {type: CHECK_AUTH_USER}
}

type TLoginActions = IsetLoginValue | IsetPassword | IsetLoginStatus | IcheckLoginOfUser

export default TLoginActions;