import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { baseTestUrl } from "../../utils/scripts";

export const asyncAction = createAsyncThunk(
    'https://catfact.ninja/fact',
    async function (thunkAPI) {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        return data
    }
)

type TinitialState = {
    asyncData: any,
    unAsyncData: string
}

const initialState: TinitialState = {
    asyncData: [],
    unAsyncData: ''
}

export const fetchTest = createAsyncThunk(
    'test/fetchTest',
    async function() {
        const response: any = await fetch(`${baseTestUrl}/employees`)
        const data = response.json()
        return data

    }
)

// export const testApi = createApi({
//     baseQuery: fetchBaseQuery
// })

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        click(state, action: PayloadAction<string>) {
            state.unAsyncData = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTest.pending, (state, action) => {
            state.asyncData = 'loading'
        })
        builder.addCase(fetchTest.fulfilled, (state, action) => {
            state.asyncData = action.payload
        })
        builder.addCase(fetchTest.rejected, (state, action) => {
            state.asyncData = 'какая-то ошибка снова'
        })
    },
})

export const {click} = testSlice.actions;
export default testSlice.reducer