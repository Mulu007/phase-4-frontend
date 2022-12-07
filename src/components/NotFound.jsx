import React from 'react'
import { Link } from 'react-router-dom'
import {BiHomeAlt} from "react-icons/bi"

const NotFound = () => {
  return (
    <div className='flex flex-col items-center gap-8 w-full min-h-screen text-white bg-black lg:py-20 py-10 px-6'>
        <img className=' w-full h-[550px] object-contain' src='https://i.pinimg.com/originals/fa/63/1b/fa631bf71eb92aaad08ab5044f7c5e9d.jpg' alt='notfound'/>
        <h1 className='lg:text-4xl font-bold text-center'>Page Not Found</h1>
        <p className='font-medium text-gray-200 leading-6 text-center'>
            The page you are looking for does not exist. You may have mistyped the URL
        </p>
        <Link to = "/">
        <button className='bg-red-600 text-white flex gap-4 font-medium py-3 hover:text-black  px-6 rounded-md '>
           <BiHomeAlt size={23}/>Back Home
        </button>
        </Link>
    </div>
  )
}

export default NotFound