import { ActionTypes } from "../Constants/ActionTypes";

const initialState={
    counter:0
}

export const counterReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ActionTypes.INCREAMENT:
            return{
                ...state,
                counter:state.counter+1

            } 
        
        case ActionTypes.DECREAMENT:
            return{
                ...state,
                counter:state.counter-1

            }
        
        case ActionTypes.RESET:
            return{
                ...state,
                counter:initialState.counter
    
                } 
    
        default:
            return state;
            
    }
}

// export const decreamentReducer=(state=initialState,action)=>{
//     switch(action.type){
//         case ActionTypes.DECREAMENT:
//             return{
//                 ...state,
//                 counter:state.counter-1
//             }
//         default :
//             return state
//     }
// }

// export const resetReducer=(state=initialState,action)=>{
//     switch(action.type){
//         case ActionTypes.RESET:
//             return{
//                 ...state,
//                 counter:0
//             }
//         default:
//             return state
//     }
// }