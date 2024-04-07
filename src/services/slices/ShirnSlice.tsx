import { createSlice } from "@reduxjs/toolkit";

type TinitialState = {
    isOpened: boolean;
}

const initialState: TinitialState = {
    isOpened: false
}

const ShirmSlice = createSlice({
    name: 'shirm',
    initialState,
    reducers: {
        open(state) {
            state.isOpened = true
        },
        close(state) {
            state.isOpened = false
        }
    }
})

export const { open, close} = ShirmSlice.actions
export default ShirmSlice.reducer