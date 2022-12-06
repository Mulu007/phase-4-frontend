// import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      {/* <Route path="/" element={<Home/>}></Route> */}
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
