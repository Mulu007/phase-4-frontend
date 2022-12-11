import Footer from "./components/Footer";
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

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //const [currentUser, setCurrentUser] = useState(null);
  //const [isLoggedIn, setIsLoggedIn]=useState(false)

  // useEffect(() => {
  //   fetch("http://localhost:3000/me",{
  //     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  // }).then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         localStorage.token = user.jwt
  //        // setCurrentUser(user);
  //         setIsAuthenticated(true);
  //       });
  //     }
  //   });
  // }, []);

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
      <Route path="/crud" element={<Crud />}></Route> 
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>}></Route>
      <Route path="/addMovie" element={<AddMovie allMovies={allMovies} setAllMovies={setAllMovies}/>}></Route>
    
    </> :
    <>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/movie/:id" element={<IndividualMovie handleDelete={handleDelete}/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
    <Route path="/account" element={<Account/>}></Route>
    <Route path="/logout" element={<Logout />}></Route>
    
    </>

    }
    <Route path="*" element={<Signup />}></Route>
    </Routes>
    <Footer/>
  </div>
);


}


export default App;




// return (
//   <div>
//     <Navbar isAuthenticated={isAuthenticated}/>
//     <Routes>
    
//       { isAuthenticated?
//       <>
//       <Route path="/" element={<Home/>}></Route>
//       <Route path="/logout" element={<Logout setCurrentUser={setCurrentUser} currentUser={currentUser}/>}></Route>
//       </> :
//       <>
//       <Route path="/signup" element={<Signup setCurrentUser = {setCurrentUser}/>}></Route>
//       <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>}></Route>
//       </>
//     }
//     {/* <Route path="*" element={<NotFound/>}></Route> */}
//     </Routes>
//     <Footer/>
//   </div>
// )