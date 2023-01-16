import { ActionTypes } from "../Constants/ActionTypes"


export const increament=()=>{
    return{
        type:ActionTypes.INCREAMENT
    }

}

export const decreament=()=>{
    return{
        type:ActionTypes.DECREAMENT
    }
}

export const reset=()=>{
    return{
        type:ActionTypes.RESET
    }
}