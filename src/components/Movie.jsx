import React from 'react'

const Movie = ({item}) => {
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img className="w-full h-auto" src={item?.movie_url} alt={item?.name}/>
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-sm md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.name}</p>
    </div>        
    </div>
  )
}

export default Movie