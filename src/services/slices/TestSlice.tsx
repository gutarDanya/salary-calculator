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
        "id": "57",
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

export const deleteDessert = createAsyncThunk(
    'test/deleteIngredient',
    async function (dessert: Tdesserts, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`${baseTestUrl}/desserts/${dessert.id}`, {
                method: "DELETE" 
            })
            .then(res => res.json())
            .then(() => {dispatch(removeDessert(dessert))})
            .catch(err => console.log(err))
            return response
        } catch  (err: any) {
            return rejectWithValue(err.message)
        }
    }
)

export const patchDessert = createAsyncThunk(
    'test/upadateDessert',
    async function (dessert: Tdesserts, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`${baseTestUrl}/desserts/${dessert.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...dessert})
            })
            .then(() => {dispatch(updateDessert(dessert))})
            .catch(err => console.log(err))
            return response
        } catch (err: any) {
            return rejectWithValue(err.message)
        }
    }
)

export const sendNewDessert = createAsyncThunk(
    'dessert/postDessert',
    async function (dessert: Tdesserts, {rejectWithValue, dispatch}) {

        try {
            const response = await fetch(`${baseTestUrl}/desserts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...dessert
                })
            })
            .then(res => res.json())
            .then((res) => {
                dispatch(addDessert(dessert))
            })
            .catch((err) => {
                console.log(`Не получилось отправить дессерт, ошибка: ${err}`)
            })

            return response
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
        
    }
)

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        click(state, action: PayloadAction<string>) {
            state.unAsyncData = action.payload
        },
        getCurrentDessert(state, action: PayloadAction<string>) {
            state.currentDessert = state.desserts.find((dessert) => { return dessert!.id == action.payload }) || state.currentDessert
        },
        getFilteredDesserts(state, action: PayloadAction<TdessertsFilter>) {
            const { withoutGluten, withoutEggs, withoutFlour, withoutMilk, fewCalories, vegan, withoutStevia, withoutTopinambura, searchQuery } = action.payload

            let currentArr = state.desserts;

            withoutGluten ? currentArr = currentArr.filter((dessert) => {return dessert.withoutGluten === true}) : console.log('не выполнен без глютена');

            withoutEggs ? currentArr = currentArr.filter((dessert) => {return dessert.withoutEggs === true}) : console.log('не выполнен без яиц');

            withoutFlour ? currentArr = currentArr.filter((dessert) => {return dessert.withoutFlour === true}) : console.log('не выполнен без муки');

            withoutMilk ? currentArr = currentArr.filter((dessert) => {return dessert.withoutMilk === true}) : console.log('не выполнен без молока');

            fewCalories ? currentArr = currentArr.filter((dessert) => {return dessert.fewCalories === true}) : console.log('не выполнен низкокалорийное');

            vegan ? currentArr = currentArr.filter((dessert) => {return dessert.vegan === true}) : console.log('вне ыполнен веган');

            withoutStevia ? currentArr = currentArr.filter((dessert) => {return dessert.hasStevia === false}) : console.log("не выполнена стевия");

            withoutTopinambura ? currentArr = currentArr.filter((dessert) => {return dessert.hasTopinambura === false}) : console.log("не выполнена топинамбура");

            searchQuery !== "" ? currentArr = currentArr.filter((dessert) => {return dessert.name.toLowerCase().includes(searchQuery.toLowerCase())}) : console.log("не найдено")


            state.filterderDesserts = currentArr
        },
        updateDessert (state, action: PayloadAction<Tdesserts>) {
            const newDessert = action.payload
            state.desserts = state.desserts.map((dessert) => {return dessert.id === newDessert.id
                ? newDessert
                : dessert
            });
            state.currentDessert = newDessert;
            state.filterderDesserts = state.filterderDesserts.map((dessert) => {return dessert.id === newDessert.id
                ? newDessert
                : dessert
            })
        },
        addIngredient (state, action: PayloadAction<string>) {
            state.currentDessert = {...state.currentDessert, ingredients: [...state.currentDessert.ingredients, action.payload]}
        },
        addDessert (state, action: PayloadAction<Tdesserts>) {
            const newDessert = action.payload;
            state.desserts = [...state.desserts, newDessert];
            state.filterderDesserts = [...state.filterderDesserts, newDessert]
        },
        findDessert(state, action: PayloadAction<string>) {
            action.payload == ''
            ? state.findedDessert = state.filterderDesserts
            : state.findedDessert = state.filterderDesserts.filter((dessert) => {return dessert.name.toLowerCase().includes(action.payload.toLowerCase())})
        },
        removeDessert (state, action: PayloadAction<Tdesserts>) {
            state.desserts = state.desserts.filter((dessert) => {return dessert.id !== action.payload.id})
            state.filterderDesserts = state.filterderDesserts.filter((dessert) => {return dessert.id !== action.payload.id})
        },
        deleteIngredient(state, action: PayloadAction<string>) {
            state.currentDessert = {...state.currentDessert, ingredients: state.currentDessert.ingredients.filter((ingredient) => {
                return ingredient === action.payload ? false : true
            })}
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

export const { click, getCurrentDessert, getFilteredDesserts, findDessert, addDessert, deleteIngredient, removeDessert, updateDessert, addIngredient } = testSlice.actions;
export default testSlice.reducer