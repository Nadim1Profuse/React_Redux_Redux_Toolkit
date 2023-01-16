import { createStore } from "redux";
import { reducers } from "./Reducer/index";

export const stores=createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
