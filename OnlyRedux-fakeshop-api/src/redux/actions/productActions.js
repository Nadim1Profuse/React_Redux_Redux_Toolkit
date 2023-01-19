import ActionTypes from "../constants/Action-types"

 const setProducts=(product)=>{
    return{
        type:ActionTypes.SET_PPRODUCTS,
        payload:product
    }
}

export const selectedProducts=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:product
    }
}

export const removeSelectedProduct=()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCTS,
        payload:{}
    }
}

export default setProducts;