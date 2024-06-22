import { createAsyncThunk,
    createSlice,
    PayloadAction
 } from "@reduxjs/toolkit";
import { TCoffeShop } from "../../utils/Types";
import { baseTestUrl } from "../../utils/scripts";

 type TinitialState = {
    coffeShopsStatus: any,
    coffeShops: Array<TCoffeShop>
 }

 const initialState: TinitialState = {
    coffeShops: [],
    coffeShopsStatus: "success"
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

 export const sendNewCoffeShop = createAsyncThunk(
   "coffeShops/sendNewCoffeShop",
   async function (coffe: TCoffeShop, {rejectWithValue, dispatch}) {
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
         .then(() => {dispatch(addCoffeShop(coffe))})
      } catch (error: any) {
         rejectWithValue(error.message)
      }
   }
 )

 const CoffeShopsSlice = createSlice({
    name: "coffeShops",
    initialState,
    reducers: {
      addCoffeShop (state, action: PayloadAction<TCoffeShop>) {
         const newCoffeShop = action.payload
         state.coffeShops = [...state.coffeShops, newCoffeShop]
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

 export const {addCoffeShop} = CoffeShopsSlice.actions
 export default CoffeShopsSlice.reducer