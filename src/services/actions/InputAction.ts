import { Temployee, TnewEmployee } from "../../utils/Types";

export const NAME_OF_NEW_EMPLOYEE: 'NAME_OF_NEW_EMPLOYE' = 'NAME_OF_NEW_EMPLOYE';
export const SALARY_OF_NEW_EMPLOYEE: 'SALARY_OF_NEW_EMPLOYE' = 'SALARY_OF_NEW_EMPLOYE';
export const AGE_OF_NEW_EMPLOYEE: 'AGE_OF_NEW_EMPLOYEE' = 'AGE_OF_NEW_EMPLOYEE';
export const AVATAR_OF_NEW_EMPLOYEE: 'AVATAR_OF_NEW_EMPLOYEE' = 'AVATAR_OF_NEW_EMPLOYEE';
export const LOGIN_NEW_EMPLOYEE: 'LOGIN_NEW_EMPLOYEE' = 'LOGIN_NEW_EMPLOYEE';
export const PASSWORD_NEW_EMPLOYEE: 'PASSWORD_NEW_EMPLOYEE' = 'PASSWORD_NEW_EMPLOYEE';
export const ADD_NEW_EMPLOYEE: 'ADD_NEW_EMPLOYEE' = 'ADD_NEW_EMPLOYEE';
export const SWITCH_SHIRM_STATUS: 'SWITCH_SHIRM_STATUS' = 'SWITCH_SHIRM_STATUS';

interface IaddNewEmployee {
    readonly type: typeof ADD_NEW_EMPLOYEE;
}

export const addNewEmployee = () => {
    return {type: ADD_NEW_EMPLOYEE}
}

interface InameOfNewEmployee {
    readonly type: typeof NAME_OF_NEW_EMPLOYEE;
    payload: string
}

export const changeNameOfNewEmployee = (name: string) => {
    return {type: NAME_OF_NEW_EMPLOYEE, payload: name}
}

interface IsalaryOfNewEmployee {
    readonly type: typeof SALARY_OF_NEW_EMPLOYEE;
    payload: number
}

export const changeSalaryOfNewEmployee = (salary: number) => {
    return {type: SALARY_OF_NEW_EMPLOYEE, payload: salary}
}

interface IageOfNewEmployee {
    readonly type: typeof AGE_OF_NEW_EMPLOYEE;
    payload: number
}

interface IloginOfNewEmployee {
    readonly type: typeof LOGIN_NEW_EMPLOYEE;
    payload: string;
}

export const changeLoginOfNewEmployee = (email: string) => {
    return {type: LOGIN_NEW_EMPLOYEE, payload: email}
}

interface IpasswordOfNewEmployee {
    readonly type: typeof PASSWORD_NEW_EMPLOYEE;
    payload: string
}

export const changePasswordOfNewEmployee = (password: string) => {
    return { type: PASSWORD_NEW_EMPLOYEE, payload: password}
}

export const changeAgeOfNewEmployee = (age: number) => {
    return {type: AGE_OF_NEW_EMPLOYEE, payload: age}
}

interface IavatarOfNewEmployee {
    readonly type: typeof AVATAR_OF_NEW_EMPLOYEE;
    payload: string
}

export const changeAvatarOfNewEmployee = (url: string) => {
    return {type: AVATAR_OF_NEW_EMPLOYEE, payload: url}
}

interface IswitchShirmStatus {
    readonly type: typeof SWITCH_SHIRM_STATUS
}

export const switchShirmStatus = () => {
    return {type: SWITCH_SHIRM_STATUS}
}

type TInputActions = InameOfNewEmployee |
IsalaryOfNewEmployee |
IageOfNewEmployee |
IavatarOfNewEmployee |
IaddNewEmployee |
IswitchShirmStatus |
IloginOfNewEmployee |
IpasswordOfNewEmployee

export default TInputActions