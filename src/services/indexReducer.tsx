import { combineReducers } from "redux";
import InputReducer from "./reducers/InputReducer";
import LoginReducer from "./reducers/LoginReducer";
import { configureStore } from "@reduxjs/toolkit";
import StatisticReducer from "./reducers/StatisticsReducer";
import ShirmSlice from "./slices/ShirnSlice";
import TestSlice from "./slices/TestSlice";

export const rootReducer = combineReducers({
    InputReducer,
    LoginReducer,
    StatisticReducer,
    ShirmSlice,
    TestSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

