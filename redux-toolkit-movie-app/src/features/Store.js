import {configureStore} from "@reduxjs/toolkit"
import movieReducer from './Movies/moviesSlice'


const store=configureStore({

    reducer:{
        movies:movieReducer
    }

})
export default store