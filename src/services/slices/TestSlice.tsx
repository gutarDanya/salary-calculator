import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { baseTestUrl } from "../../utils/scripts";
import { Tdesserts, TdessertsFilter } from "../../utils/Types";

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
    desserts: Array<Tdesserts>;
    status: string,
    currentDessert: Tdesserts,
    filterderDesserts: Array<Tdesserts>
}

const initialState: TinitialState = {
    asyncData: [],
    unAsyncData: '',
    desserts: [],
    status: '',
    filterderDesserts: [],
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
        "ingredients": ['cum'],
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
    async function () {
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
            state.currentDessert = state.desserts.find((dessert) => { return dessert!.id === action.payload }) || state.currentDessert
        },
        getFilteredDesserts(state, action: PayloadAction<TdessertsFilter>) {
            const { withoutGluten, withoutEggs, withoutFlour, withoutMilk, fewCalories, vegan, hasStevia, hasTopinambura } = action.payload

            // let currentArr = withoutGluten ? state.desserts.filter((dessert) => { return dessert?.withoutGluten != false }) : state.desserts!;
            
            state.filterderDesserts = state.desserts && state.desserts.length > 0 && state.desserts.filter((dessert) => { return (
                withoutGluten ? dessert?.withoutGluten == true : dessert
                    && withoutEggs ? dessert.withoutEggs == true : dessert
                    && withoutFlour ? dessert.withoutFlour == true : dessert
                    && withoutMilk ? dessert.withoutMilk == true : dessert
                    && fewCalories ? dessert.vegan == true : dessert)}) || [state.currentDessert]
            // currentArr = withoutEggs ? currentArr.filter((dessert) => { return dessert?.withoutEggs != false }) : currentArr;

            // currentArr = withoutFlour ? currentArr.filter((dessert) => { return dessert?.withoutFlour != false }) : currentArr;

            // currentArr = withoutMilk ? currentArr.filter((dessert) => { return dessert?.withoutMilk != false }) : currentArr;

            // currentArr = fewCalories ? currentArr.filter((dessert) => { return dessert?.fewCalories != false }) : currentArr;

            // currentArr = vegan ? currentArr.filter((dessert) => { return dessert?.vegan != false }) : currentArr;

            // state.filterderDesserts = [...currentArr]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDesserts.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getDesserts.fulfilled, (state, action) => {
            state.desserts = action.payload;
            state.filterderDesserts = action.payload;
            state.status = "resolved"
        })
        builder.addCase(getDesserts.rejected, (state, action) => {
            state.asyncData = 'какая-то ошибка снова'
        })
    },
})

export const { click, getCurrentDessert, getFilteredDesserts } = testSlice.actions;
export default testSlice.reducer