
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import './App.scss';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import PageNotFound from "./Components/PageNotFound/PageNotFound";




function App() {
  
  
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:imdbId" element={<MovieDetails />} />
        <Route element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
    
    </div>
  );
}

export default App;
