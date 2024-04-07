import { applyMiddleware, createStore, compose, Middleware } from "redux";
import { rootReducer } from "./indexReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./reducers/LoginReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ShirmSlice from "./slices/ShirnSlice";

const stringMiddleware: Middleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: true
      })
  })

console.log(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;