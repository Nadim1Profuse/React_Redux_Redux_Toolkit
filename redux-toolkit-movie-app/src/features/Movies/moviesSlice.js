import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import MovieApi from "../../common/apis/MovieApi"
import {APIKey} from "../../common/apis/ApiKey"




export const fetchAsynchMovies=createAsyncThunk(
    'movie/fetchAsynchMovies',
    async(search)=>{   
    const response=await MovieApi.get(`?apiKey=${APIKey}&s=${search}&type=movie`)
    return response.data
    });


export const fetchAsynchShows=createAsyncThunk(
    'movie/fetchAsynchShows',
    async(search)=>{ 
    const response=await MovieApi.get(`?apiKey=${APIKey}&s=${search}&type=series`)
    return response.data
    });

export const fetchAsynchMovieOrShowDetail=createAsyncThunk(
    'movie/fetchAsynchMovieOrShowDetail',
    async(id)=>{ 
    const response=await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return response.data
    });

    
   
const initialState={
    movies:{},
    shows:{},
    selectedMovieOrShow:{}
}

const moviesSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
        clearSelectedMovieOrShow:(state)=>{
          state.selectedMovieOrShow={}
        }
       
    },
    extraReducers:{
        [fetchAsynchMovies.pending]:()=>{
            console.log("pending")
        },
        [fetchAsynchMovies.fulfilled]:(state,{payload})=>{
            console.log("fetchAsynchMovies fullfield")
            return {
                ...state,
                movies:payload
            }
        },
        [fetchAsynchMovies.rejected]:()=>{
            console.log("Rejected")
        },
        [fetchAsynchShows.fulfilled]:(state,{payload})=>{
            console.log("fetchAsynchShows fullfield")
            return {
                ...state,
                shows:payload
            }
        },
        [fetchAsynchMovieOrShowDetail.fulfilled]:(state,{payload})=>{
            console.log("fetchedMOvieOr Show Detail")
            return {
                ...state,
                selectedMovieOrShow:payload
            }
        }
    }
});

export const {clearSelectedMovieOrShow} = moviesSlice.actions;

export default moviesSlice.reducer;