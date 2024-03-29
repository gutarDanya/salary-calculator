import { combineReducers } from "redux";
import InputReducer from "./reducers/InputReducer";
import LoginReducer from "./reducers/LoginReducer";
import { configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    InputReducer,
    LoginReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

