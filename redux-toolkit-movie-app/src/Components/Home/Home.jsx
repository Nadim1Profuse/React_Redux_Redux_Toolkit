import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import {fetchAsynchMovies,fetchAsynchShows} from "../../features/Movies/moviesSlice"
import { useDispatch } from 'react-redux';


const Home = () => {

    const dispatch=useDispatch()
    const movies="action"
    const shows="Science"

    useEffect(()=>{
        dispatch(fetchAsynchMovies(movies));
        dispatch(fetchAsynchShows(shows));
    
    },[dispatch])

    return (
        <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
    );
};

export default Home;