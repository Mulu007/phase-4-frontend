import React from "react";
// import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import MovieCollection from "./components/MovieCollection";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  const [movies, setMovies] = useState([
    // {
    //   Title: "Star Wars: Episode IV - A New Hope",
    //   Year: "1977",
    //   imdbID: "tt0076759",
    //   Type: "movie",
    //   Poster:
    //     "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    // },
    // {
    //   Title: "Star Wars: Episode V - The Empire Strikes Back",
    //   Year: "1980",
    //   imdbID: "tt0080684",
    //   Type: "movie",
    //   Poster:
    //     "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    // },
    // {
    //   Title: "Star Wars: Episode VI - Return of the Jedi",
    //   Year: "1983",
    //   imdbID: "tt0086190",
    //   Type: "movie",
    //   Poster:
    //     "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    // },
  ]);

  useEffect(()=> {
  fetch(' http://localhost:3000/movies')
  .then (resp => resp.json())
  .then(show => setMovies(show))
  }, [])

  function deleteMovie(id) {
    setMovies(movies.filter((movie) => id !== movie.id));
  }
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <div className="flex flex-col">
        <MovieCollection movies={movies} deleteMovie={deleteMovie} setMovies = {setMovies}/>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
