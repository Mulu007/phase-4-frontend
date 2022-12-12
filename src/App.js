// import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import IndividualMovie from "./components/IndividualMovie";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Account from "./components/Account";
import Crud from "./components/Crud";

import Logout from "./components/Logout";
import {useEffect, useState} from "react"
import AddMovie from "./components/AddMovie";

import { useDispatch, useSelector } from "react-redux";
import { login } from "./features/loginSlice";
//import axios from "axios";
import {selectUser} from "./features/loginSlice"

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    //const [currentUser, setCurrentUser] = useState(null);
    const user = useSelector(selectUser)
    const currentUser = useSelector((state) => state.user.user)
    
    const dispatch = useDispatch()
  
  
    useEffect(() => {
      // auto-login
      fetch("http://localhost:3000/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => dispatch(login(user.user)))
        }
      });
    }, []);
  
    const [allMovies, setAllMovies] = useState([])
    useEffect(() => {
      fetch(" http://localhost:3000/movies")
        .then((resp) => resp.json())
        .then((show) => setAllMovies(show));
    }, []);
  
  
    const handleDelete = (id) => {
      fetch(`http://localhost:4000/movies/${id}`, {
          method: "DELETE",
        })
        .then((resp)=> resp.json())
        .then(()=>{
          const updatedMovies = allMovies.filter((movie) => movie.id !== id);
          setAllMovies(updatedMovies)
        })
    }
  
  
  
  
    return (
    <div>
      <Navbar isAuthenticated={isAuthenticated}/>
      <Routes>
      
      {!isAuthenticated? <>
        {*<Route path="/crud" element={<Crud />}></Route> *}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />}></Route>
        <Route path="/addMovie" element={<AddMovie allMovies={allMovies} setAllMovies={setAllMovies}/>}></Route>
      
      </> :
      <>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/movie/:id" element={<IndividualMovie handleDelete={handleDelete}/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      <Route path="/account" element={<Account/>}></Route>
      <Route path="/logout" element={<Logout currentUser={currentUser}/>}></Route>
      
      </>
  
      }
      <Route path="*" element={<Signup setIsAuthenticated={setIsAuthenticated}/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
  
  }

export default App;
