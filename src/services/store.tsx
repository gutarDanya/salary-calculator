import { createStore } from "redux";
import { rootReducer } from "./indexReducer";

export const store = createStore(rootReducer)