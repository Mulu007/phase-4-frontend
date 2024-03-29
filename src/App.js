import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import IndividualMovie from "./components/IndividualMovie";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Account from "./components/Account";
import Logout from "./components/Logout";
import {useEffect, useState} from "react"
import AddMovie from "./components/AddMovie";
// import EditPage from "./components/EditPage";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("https://moviesapi-gpzn.onrender.com/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  const [allMovies, setAllMovies] = useState([])
  useEffect(() => {
    fetch(" https://moviesapi-gpzn.onrender.com/movies")
      .then((resp) => resp.json())
      .then((show) => setAllMovies(show));
  }, []);


  return (
  <div>
    <Navbar isAuthenticated={isAuthenticated}/>
    <Routes>
    
    {!currentUser? <>
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>}></Route>
      <Route path="/addmovie" element={<AddMovie allMovies={allMovies} setAllMovies={setAllMovies}/>}></Route>
    
    
    </> :
    <>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/movie/:id" element={<IndividualMovie/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
    <Route path="/account" element={<Account/>}></Route>
    <Route path="/logout" element={<Logout setCurrentUser={setCurrentUser} currentUser={currentUser}/>}></Route>
    <Route path="/addmovie" element={<AddMovie/>}></Route>
    {/* <Route path="/editpage" element={<EditPage/>}></Route> */}

    </>

    }
    <Route path="*" element={<Signup setCurrentUser = {setCurrentUser}/>}></Route>
    </Routes>
    <Footer/>
  </div>
);

}

export default App;
