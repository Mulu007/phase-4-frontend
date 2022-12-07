import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Favorites = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        getImages()
      },[])
      console.log(images)
    
    function getImages() {
    fetch("http://localhost:3000/movies")
    .then((response) => response.json())
    .then((data) =>
        setImages(data)
    );
    }


    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>My Favorites</h2>
        <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
        <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
            <Link to = "/movie/:id">
            {images.map((item) => (
                <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                        <Link to="/movie">
                          <img classname= "w-full h-auto block"src={item?.movie_url} alt={item?.name}/>
                        </Link>
                      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                      <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.name}</p>
                  </div>  
                </div>
            ))}
            </Link>
        </div>
        <MdChevronRight onClick={slideRight} size={40} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
       </div> 
    </div>
  )
}

export default Favorites