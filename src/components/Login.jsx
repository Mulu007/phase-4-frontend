import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({setCurrentUser} ) => {
  const [formData, setFormData] = useState({
    username: "",
    email:"",
    password: "",
  });
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://moviesapi-gpzn.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          navigate("/")
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }e.target.reset();
    }) 
  };

    
  return (
    <div className='w-full h-screen'>
    <img className="hidden sm:block absolute w-full h-full object-cover"src='https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/73fd2c5e-7a4b-4e60-ac3d-c76b8ee6bed5/KE-en-20221128-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/' />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
    <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign In</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                    <input onChange={handleChange} className="p-3 my-2 bg-gray-700 rounded" type="text" placeholder='Username' autoComplete='username' name='username' value={formData.username}/>
                    <input onChange={handleChange} className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder='Email' autoComplete='email' name='email' value={formData.email}/>
                    <input onChange={handleChange} className="p-3 my-2 bg-gray-700 rounded" type="password"  placeholder="Password" autoComplete='current-password' name='password' value={formData.password}/>
                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                    {/* {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null} */}
                    <div className='flex justify-between items-center text-sm text-gray-600'>
                        <p><input className='mr-2' type="checkbox"/>Remember me</p>
                        <p>Need Help?</p>
                    </div>
                    <p className='py-8'><span className='text-gray-600'>New to AllMovies?</span>
                    <Link to="/signup">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login 