import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const IndividualMovie = () => {
    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        getMovies()
      },[])
      //console.log(movies)
    
    function getMovies() {
    fetch("http://localhost:3000/movies",{
        headers: {
            Authorization:  `Bearer ${localStorage.token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    })
    .then((response) => response.json())
    .then((data) => setMovies(data)
    );
    }
    
  return (
    <div className='w-full text-white px-1'>
        <div className='w-full xl:h-screen relative text-white '>
            <img src={movie?.movie_url} alt={movie?.name} className="w-full hidden xl:inline-block h-full object-cover opacity-20"/>
            <div className='flex-col xl:bg-opacity-100 xl:absolute top-0 bottom-0 right-0 left-0'>
                    <div className=' py-[120px]'>
                        <ReactPlayer width="full" height="640px" controls url={movie?.video_url}/>
                    </div>
                <div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-col py-10 lg:py-20 gap-8'>
                    <div className='xl:col-span-1 w-full xl:order-none order-last h-header bg-gray-header border-gray-800 rounded-lg overflow-hidden'>
                        <img className="w-full h-full object-cover" src={movie?.movie_url} alt={movie?.name}/>
                    </div>
                    <div className='col-span-2 md:grid grid-cols-5 gap-4 items-center'>
                        <div className='col-span-3 flex-flex-col gap-10'> 
                            {/* title */}
                            <h1 className='xl:text-4xl capitalize font-sans text-2xl font-bols'>{movie?.name}</h1>
                            {/* flex items */}
                            <div className='flex items-center gap-4 font-medium text-gray-200'>
                                <div className='flex-col bg-red-600 text-sm px-2 py-1'>
                                    HD 4K
                                </div>

                            </div>
                            {/* description */}
                            <p className='text-gray-200 text-sm leading-7'>{movie?.description}</p>
                            <div className='grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-bblack border-gray-800 rounded lg'>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IndividualMovie