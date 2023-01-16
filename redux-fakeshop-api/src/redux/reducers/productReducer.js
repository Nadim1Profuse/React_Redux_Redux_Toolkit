import  ActionTypes  from "../constants/Action-types";

const initialState={
    product:[],
    
}

export const productReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PPRODUCTS:
            return {
                ...state,
                product:payload
            }
        
        
    
        default:return state
    }
}

export const selectedProductRducer=(state={},{type,payload})=>{
   switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
        return{
            ...state,
            ...payload

        }

    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
        return payload
        
        
        
   
    default:
        return state;
   }
}