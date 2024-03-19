import { Temployee, TnewEmployee } from "../../utils/Types";

export const NAME_OF_NEW_EMPLOYEE: 'NAME_OF_NEW_EMPLOYE' = 'NAME_OF_NEW_EMPLOYE';
export const SALARY_OF_NEW_EMPLOYEE: 'SALARY_OF_NEW_EMPLOYE' = 'SALARY_OF_NEW_EMPLOYE';
export const AGE_OF_NEW_EMPLOYEE: 'AGE_OF_NEW_EMPLOYEE' = 'AGE_OF_NEW_EMPLOYEE';
export const AVATAR_OF_NEW_EMPLOYEE: 'AVATAR_OF_NEW_EMPLOYEE' = 'AVATAR_OF_NEW_EMPLOYEE';
export const LOAD_EMPLOYEES: 'LOAD_EMPLOYEES' ='LOAD_EMPLOYEES';
export const ADD_NEW_EMPLOYEE: 'ADD_NEW_EMPLOYEE' = 'ADD_NEW_EMPLOYEE';

interface IaddNewEmployee {
    readonly type: typeof ADD_NEW_EMPLOYEE;
    payload: TnewEmployee
}

export const addNewEmployee = () => {
    return {type: ADD_NEW_EMPLOYEE}
}

interface IloadEmployees {
    readonly type: typeof LOAD_EMPLOYEES;
    payload: Array<Temployee>
}

export const loadEmployees = (employyes: Array<Temployee>) => {
    return {type: LOAD_EMPLOYEES, payload: employyes}
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

type TInputActions = InameOfNewEmployee |
IsalaryOfNewEmployee |
IageOfNewEmployee |
IavatarOfNewEmployee |
IloadEmployees |
IaddNewEmployee

export default TInputActions