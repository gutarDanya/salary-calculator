import { createSlice } from "@reduxjs/toolkit";
import { Temployee } from "../../utils/Types";
import { PayloadAction } from "@reduxjs/toolkit";

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

export const InputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        nameOfNewEmployee(state, action: PayloadAction<string>) {
            state.nameNewEmployee = action.payload
        },
        ageOfNewEmployee(state, action: PayloadAction<number>) {
            state.ageNewEmployee = action.payload
        },
        salaryOfNewEmployee(state, action: PayloadAction<number>) {
            state.salaryNewEmployee = action.payload
        }
    }
})