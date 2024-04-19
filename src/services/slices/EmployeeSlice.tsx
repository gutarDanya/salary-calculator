import { createAsyncThunk, current } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { baseTestUrl } from "../../utils/scripts";
import { Temployee } from "../../utils/Types";
import { RootState } from "../store";
import { store } from "../store";

type TinitialState = {
    employees: Array<Temployee>
    status: string,
    currentEmployee: Temployee
}

const initialState: TinitialState = {
    employees: [],
    status: 'dsiconected',
    currentEmployee: {
        name: '',
        age: 0,
        hours: [],
        salary: 100,
        worked: false,
        login: '',
        password: '',
        id: 0,
        status: '',
        tel: ''
    }
}


export const getEmployees = createAsyncThunk(
    'employees/getEmployees',
    async function () {
        const response: any = await fetch(`${baseTestUrl}/employees`)
        const data = response.json()
        console.log(data)
        return data
    }
)

export const updateEmployee = createAsyncThunk(
    'employees/updateEmployee',
    async function() {
        const {employees} = store.getState().EmployeeSlice

        console.log(employees)
        const response: any = await fetch(`${baseTestUrl}/employees`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({})
        })
    }
)

export const EmployeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        getCurrentEmployee(state, action: PayloadAction<number>) {
            state.currentEmployee = state.employees.find((employee) => {return employee.id == action.payload}) || state.currentEmployee
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getEmployees.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getEmployees.fulfilled, (state, action) => {
            state.employees = action.payload
        })
        builder.addCase(getEmployees.rejected, (state, action) => {
            state.status = 'error' + action.payload
        })
    }
})

export const { getCurrentEmployee } = EmployeeSlice.actions
export default EmployeeSlice.reducer