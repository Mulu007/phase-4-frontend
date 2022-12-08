import React from "react";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import IndividualMovie from "./components/IndividualMovie";
import Login from "./components/Login";
import MovieCollection from "./components/MovieCollection";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Account from "./components/Account";

function App() {
  const [movies, setMovies] = useState([]);

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

      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/movie/:id" element={<IndividualMovie/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      <Route path="/account" element={<Account/>}></Route>
      </Routes>
      <MovieCollection movies={movies} deleteMovie={deleteMovie} setMovies = {setMovies}/>
      <Footer/>   
    </div>
  );
}


export default App;
