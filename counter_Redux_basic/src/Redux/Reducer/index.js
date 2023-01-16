import { combineReducers } from "redux";
import {counterReducer} from "./CounterReducer"

export const reducers=combineReducers({
    count:counterReducer

})