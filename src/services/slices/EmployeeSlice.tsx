import { createAsyncThunk, current } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { baseTestUrl } from "../../utils/scripts";
import { Temployee, TnewEmployee } from "../../utils/Types";

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
        return data
    }
)

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (employee: Temployee, { rejectWithValue, dispatch }) => {

        try {
            const response = await fetch(`${baseTestUrl}/employees/${employee.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...employee
                })
            })
                .then((res) => {
                    res.json()
                })
                .then((res) => {
                    dispatch(patchUser(employee))
                })
                .catch((err) => {
                    console.log(err)
                });
            return response

        } catch (err: any) {
            return rejectWithValue(err.message)
        }

    }
)

export const AddUser = createAsyncThunk(
    'users/addUser',
    async (employee: TnewEmployee, { rejectWithValue, dispatch }) => {
        const newEmpoloyee = {
            ...employee,
            hours: [],
            worked: false,
            status: "бариста",
            tel: ""
        }
        try {
            const response = await fetch(`${baseTestUrl}/employees`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...newEmpoloyee
                })
            })
                .then(res => res.json())
                .then((res) => {
                    dispatch(addEmployee(newEmpoloyee))
                })
                .catch((err) => { console.log(err) })
                return response

        } catch (err: any) {
            return rejectWithValue(err.message)
        }
    }
)

export const removeEmployee = createAsyncThunk(
    "employees/remove",
    async(employee: Temployee, {rejectWithValue, dispatch}) => {
        try {
            const response = await fetch(`${baseTestUrl}/employees/${employee.id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(() => {dispatch(deleteEmployee(employee))})
            .catch((err) => {console.log(err.message)})
            return response
        } catch (err: any) {
            return rejectWithValue(err.message)
        }
    }
)

export const EmployeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        getCurrentEmployee(state, action: PayloadAction<string>) {
            state.currentEmployee = state.employees.find((employee) => { return employee.id === action.payload }) || state.currentEmployee
        },
        
        addEmployee(state, action: PayloadAction<Temployee>) {
            state.employees = [...state.employees, action.payload]
        },

        patchUser(state, action: PayloadAction<Temployee>) {
            state.employees = state.employees.map((employee) => {return employee.id === action.payload.id 
                ? action.payload
                : employee
            })
        },
        deleteEmployee(state, action: PayloadAction<Temployee>) {
            state.employees = state.employees.filter((employee) => {return employee.id !== action.payload.id})
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
        builder.addCase(updateUser.rejected, (state, action) => {
            state.status = 'error' + action.payload
        })
        builder.addCase(removeEmployee.rejected, (state, action) => {
            state.status = 'error' + action.payload
        })
    }
})

export const { getCurrentEmployee, addEmployee, patchUser, deleteEmployee } = EmployeeSlice.actions
export default EmployeeSlice.reducer