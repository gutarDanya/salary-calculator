import { createAsyncThunk, current } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { baseTestUrl } from "../../utils/scripts";
import { Tdesserts, TdessertsFilter } from "../../utils/Types";

type TinitialState = {
    asyncData: any,
    unAsyncData: string,
    desserts: Array<Tdesserts>;
    status: string,
    currentDessert: Tdesserts,
    filterderDesserts: Array<Tdesserts>,
    findedDessert: Array<Tdesserts>
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
    },
    findedDessert: []
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
            state.currentDessert = state.desserts.find((dessert) => { return dessert!.id == action.payload }) || state.currentDessert
        },
        getFilteredDesserts(state, action: PayloadAction<TdessertsFilter>) {
            const { withoutGluten, withoutEggs, withoutFlour, withoutMilk, fewCalories, vegan, hasStevia, hasTopinambura } = action.payload

            let currentArr = state.desserts;

            withoutGluten ? currentArr = currentArr.filter((dessert) => {return dessert.withoutGluten === true}) : console.log('не выполнен без глютена');

            withoutEggs ? currentArr = currentArr.filter((dessert) => {return dessert.withoutEggs === true}) : console.log('не выполнен без яиц');

            withoutFlour ? currentArr = currentArr.filter((dessert) => {return dessert.withoutFlour === true}) : console.log('не выполнен без муки');

            withoutMilk ? currentArr = currentArr.filter((dessert) => {return dessert.withoutMilk === true}) : console.log('не выполнен без молока');

            fewCalories ? currentArr = currentArr.filter((dessert) => {return dessert.fewCalories === true}) : console.log('не выполнен низкокалорийное');

            vegan ? currentArr = currentArr.filter((dessert) => {return dessert.vegan === true}) : console.log('вне ыполнен веган');



            state.filterderDesserts = currentArr
        },
        findDessert(state, action: PayloadAction<string>) {
            action.payload == ''
            ? state.findedDessert = state.filterderDesserts
            : state.findedDessert = state.filterderDesserts.filter((dessert) => {return dessert.name.toLowerCase().includes(action.payload.toLowerCase())})
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDesserts.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getDesserts.fulfilled, (state, action) => {
            state.desserts = action.payload;
            state.filterderDesserts = action.payload;
            state.findedDessert = action.payload;
            state.status = "resolved"
        })
        builder.addCase(getDesserts.rejected, (state, action) => {
            state.asyncData = 'какая-то ошибка снова'
        })
    },
})

export const { click, getCurrentDessert, getFilteredDesserts, findDessert } = testSlice.actions;
export default testSlice.reducer