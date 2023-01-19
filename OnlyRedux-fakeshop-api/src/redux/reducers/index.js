import {combineReducers} from "redux"
import {productReducer,selectedProductRducer} from "./productReducer"

export const reducers=combineReducers({
    allProducts:productReducer,
    selectedProducts:selectedProductRducer
})