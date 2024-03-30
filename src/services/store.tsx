import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer } from "./indexReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./reducers/LoginReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// export const store = configureStore({
//     reducer: rootReducer
// })


export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector