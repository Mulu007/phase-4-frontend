import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import IndividualMovie from "./components/IndividualMovie";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/movie/:id" element={<IndividualMovie/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}


export default App;
