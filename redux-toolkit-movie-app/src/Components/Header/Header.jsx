import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsynchMovies,
  fetchAsynchShows,
} from "../../features/Movies/moviesSlice";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  const [searchedText, setSearchedText] = useState("");
  const [searachType, setSearchType] = useState("movie");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("searched text= ", searchedText);
    if (searchedText !== "") {
      if (searachType == "movie") {
        dispatch(fetchAsynchMovies(searchedText));
      } else {
        dispatch(fetchAsynchShows(searchedText));
      }
    } else {
      alert("Please Enter a Search Value");
    }
    setSearchedText("")
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-bar" >
        <form onSubmit={handleSubmit}>
          <select
            onChange={(e) => setSearchType(e.target.value)}
            name="select"
            value={searachType}
            className="form-select-sm" aria-label="Default select example"
          >
            <option value={"movie"}>Movie</option>
            <option value={"show"}>Show</option>
          </select>
          <input
            placeholder="Search Movies/Shows"
            onChange={(e) => setSearchedText(e.target.value)}
            value={searchedText}
            type="text" className="form-control"
          />
          <button type="submit" className="btn btn-light btn-sm">Search</button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
