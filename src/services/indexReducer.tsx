import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import StatisticReducer from "./reducers/StatisticsReducer";
import AppSlice from "./slices/AppSlice";
import TestSlice from "./slices/TestSlice";
import EmployeeSlice from "./slices/EmployeeSlice";
import CoffeShopsSlice from "./slices/CoffeShopsSlice";

export const rootReducer = combineReducers({
    StatisticReducer,
    TestSlice,
    EmployeeSlice,
    AppSlice,
    CoffeShopsSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

