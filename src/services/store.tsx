import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./indexReducer";
import { thunk } from "redux-thunk";

export const store = createStore(rootReducer)