import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import StatisticReducer from "./reducers/StatisticsReducer";
import AppSlice from "./slices/AppSlice";
import TestSlice from "./slices/TestSlice";
import EmployeeSlice from "./slices/EmployeeSlice";

export const rootReducer = combineReducers({
    StatisticReducer,
    TestSlice,
    EmployeeSlice,
    AppSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

