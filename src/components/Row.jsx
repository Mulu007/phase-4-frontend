import React, { useEffect, useState } from 'react'
import Movie from './Movie'

const Row = ({title, fetchURL}) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        getImages(fetchURL)
      },[fetchURL])
      console.log(images)
    
    function getImages() {
    fetch("http://localhost:3000/movies")
    .then((response) => response.json())
    .then((data) =>
        setImages(data)
    );
    }
      
  return (
    <div>
       <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
       <div className='relative flex items-center group'>
        <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
            {images.map((item,id) => (
                <Movie key={id} item={item}/>
            ))}
        </div>
       </div> 
    </div>
  )
}

export default Row