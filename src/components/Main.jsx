import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Main = () => {
    const [movies, setMovies] = useState([])

    //picks a random movie in every reload
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        getMovies()
      },[])
      console.log(movies)
    
    function getMovies() {
    fetch("http://localhost:3000/movies")
    .then((response) => response.json())
    .then((data) =>
        setMovies(data)
    );
    }
    // console.log(movie)

    const truncateString = (str, num) => {
        if (str?.length > num) {
          return str.slice(0, num) + '...';
        } else {
          return str;
        }
      };
    
      
  return (

    <div className='w-full h-[550px] text-white'>

        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={movie?.movie_url} alt={movie?.name}/>

            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.name}</h1>
            <div className='my-4'>
              <Link to = "/movie/:id">
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
              </Link>
                <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
            </div>
            <p className='text-gray-400 text-sm'>Released: 02-12-2023</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.description, 150)}</p>
            </div>
        </div>

    </div>
  )
}

export default Main