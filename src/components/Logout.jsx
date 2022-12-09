import React from "react";
import { Link} from 'react-router-dom'
//, useNavigate 
const Logout = ({setCurrentUser, currentUser}) => {
  //let navigate = useNavigate()
  const handleLogout = () => {
    fetch('/logout', {method: "DELETE"})
    .then(res => {
          if (res.ok) {
            setCurrentUser(null)
            //navigate("/")
          }
        })
  }

  return (
    <div className="w-full h-screen">

          <header className="max-w-[320px] mx-auto py-16">
            {currentUser ? (
              <div>
                <p>Welcome, {currentUser.username}!</p>
                <button className='bg-red-600 py-3 my-6 rounded font-bold' onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <Link to="/login">Click Here to Login</Link>
            )}
          </header>
        </div>
  );
};

export default Logout;