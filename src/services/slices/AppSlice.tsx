import { createSlice } from "@reduxjs/toolkit";

type TinitialState = {
    shirmStatus: boolean;
}

const initialState: TinitialState = {
    shirmStatus: true
}

export const AppSlice = createSlice({
  name: "appSlice",
  initialState: initialState,
  reducers: {
    openShirm (state) {
        state.shirmStatus = true;
    },
    closeShirm (state) {
        state.shirmStatus = false;
    },
    switchShirm (state) {
        state.shirmStatus = !state.shirmStatus
    }
  }  
})

export const {openShirm, closeShirm, switchShirm} = AppSlice.actions;
export default AppSlice.reducer;