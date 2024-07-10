import {
   createAsyncThunk,
   createSlice,
   PayloadAction
} from "@reduxjs/toolkit";
import { TCoffeShop, Tprovision, TsendedPosition } from "../../utils/Types";
import { baseTestUrl } from "../../utils/scripts";

type TinitialState = {
   coffeShopsStatus: any,
   coffeShops: Array<TCoffeShop>
   currentCoffeShop: TCoffeShop | undefined,
   provisions: Array<Tprovision>
}

const initialState: TinitialState = {
   currentCoffeShop: undefined,
   coffeShops: [],
   coffeShopsStatus: "success",
   provisions: []
}


export const getCoffeShops = createAsyncThunk(
   "coffeShops/getRequest",
   async function () {
      try {
         const response = await fetch(`${baseTestUrl}/coffeShops`)
         const data = response.json()
         return data
      } catch (error: any) {
         console.log(error.message)
      }
   }
)

export const addPositionToCoffeShop = createAsyncThunk(
   "coffeShop/addPosition",
   async function (sendedData: TsendedPosition, {rejectWithValue, dispatch}) {
      try {
         const response = await fetch(`${baseTestUrl}/coffeShops/${sendedData.id}`, {
            method: "PATCH",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify({
               provisions: [
                  ...sendedData.otherPositions, sendedData.position
               ]
            })
         })
         .then(res => res.json())
         .then(() => {dispatch(sendNewProvisionInCoffeShop(sendedData))})
         return response
      } catch (error: any) {
         rejectWithValue(error.message)
      }
   }
)

export const removeCoffeShop = createAsyncThunk(
   "coffeShop/removeCoffeShop",
   async function (id: string, {dispatch, rejectWithValue}) {
      try {
         const response = await fetch(`${baseTestUrl}/coffeShops/${id}`, {
            method: "DELETE",
         })
         .then(() => {dispatch(deleteCoffeShop(id))})
         return response
      } catch (error: any) {
         rejectWithValue(error.message)
      }
   }
)

export const sendNewCoffeShop = createAsyncThunk(
   "coffeShops/sendNewCoffeShop",
   async function (coffe: TCoffeShop, { rejectWithValue, dispatch }) {
      try {
         const response = await fetch(`${baseTestUrl}/coffeShops`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify({
               ...coffe
            })
         })
            .then(() => { dispatch(addCoffeShop(coffe)) })
         return response
      } catch (error: any) {
         rejectWithValue(error.message)
      }
   }
)

const CoffeShopsSlice = createSlice({
   name: "coffeShops",
   initialState,
   reducers: {
      addCoffeShop(state, action: PayloadAction<TCoffeShop>) {
         const newCoffeShop = action.payload
         state.coffeShops = [...state.coffeShops, newCoffeShop]
      },
      getCurrentCoffeShop(state, action: PayloadAction<string>) {
         const id = action.payload;
         state.currentCoffeShop = state.coffeShops.find((coffe) => { return coffe.id === id })
      },
      addExtraProvision(state, action: PayloadAction<Tprovision>) {
         state.provisions = [...state.provisions, action.payload];
      },
      sendNewProvisionInCoffeShop(state, action: PayloadAction<TsendedPosition>) {
         state.coffeShops = state.coffeShops.map((coffeShop) => {return coffeShop.id === action.payload.id
            ?  {...coffeShop, provisions: [...coffeShop.provisions, action.payload.position]}
            : coffeShop
         })

         state.currentCoffeShop = {...state.currentCoffeShop!, provisions: [...state.currentCoffeShop!.provisions, action.payload.position]}
      },
      deleteCoffeShop(state, action: PayloadAction<string>) {
         const id = action.payload;

         state.coffeShops = state.coffeShops.filter((shop) => {return shop.id !== id});
      }
   },
   extraReducers: (builder) => {
      builder.addCase(getCoffeShops.pending, (state) => {
         state.coffeShopsStatus = 'loading'
      })
      builder.addCase(getCoffeShops.fulfilled, (state, action) => {
         state.coffeShops = action.payload
      })
      builder.addCase(getCoffeShops.rejected, (state, action) => {
         state.coffeShopsStatus = action.error
      })
   }
})

export const { addCoffeShop, getCurrentCoffeShop, sendNewProvisionInCoffeShop, deleteCoffeShop } = CoffeShopsSlice.actions
export default CoffeShopsSlice.reducer