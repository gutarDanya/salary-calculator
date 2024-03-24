import { combineReducers } from "redux";
import InputReducer from "./reducers/InputReducer";
import LoginReducer from "./reducers/LoginReducer";

export const rootReducer = combineReducers({
    InputReducer,
    LoginReducer
})