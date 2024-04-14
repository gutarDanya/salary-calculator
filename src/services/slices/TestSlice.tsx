import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { baseTestUrl } from "../../utils/scripts";
import { Tdesserts } from "../../utils/Types";

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
    unAsyncData: string,
    desserts: [Tdesserts?];
    status: string,
    currentDessert: Tdesserts
}

const initialState: TinitialState = {
    asyncData: [],
    unAsyncData: '',
    desserts: [],
    status: '',
    currentDessert: {
        "name": "дессерт",
        "url": "",
        "hasStevia": true,
        "hasTopinambura": false,
        "fewCalories": true,
        "vegan": false,
        "withoutFlour": false,
        "withoutGluten": false,
        "withoutEggs": false,
        "withoutMilk": false,
        "id": 57,
        "ingredients": [
            "яйцо",
            "Молоко",
            "Масло растительное",
            "Стевия",
            "Рисовая мука",
            "Овсяная мука",
            "Какао",
            "Разрыхлитель",
            "Кофе",
            "Вода",
            "Сыр творожный",
            "Йогурт"
        ],
        "info": {
            "kkal": 209,
            "p": 5,
            "f": 15,
            "c": 10
        }
    }
}

export const getDesserts = createAsyncThunk(
    'test/fetchTest',
    async function() {
        const response: any = await fetch(`${baseTestUrl}/desserts`)
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
        },
        getCurrentDessert(state, action: PayloadAction<number>) {
             state.currentDessert = state.desserts.find((dessert) => {return dessert!.id === action.payload})!
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDesserts.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getDesserts.fulfilled, (state, action) => {
            state.desserts = action.payload
            state.status = "resolved"
        })
        builder.addCase(getDesserts.rejected, (state, action) => {
            state.asyncData = 'какая-то ошибка снова'
        })
    },
})

export const {click, getCurrentDessert} = testSlice.actions;
export default testSlice.reducer