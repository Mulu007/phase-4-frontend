import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from "react-icons/md"
import { Link } from 'react-router-dom'

const Row = ({title, fetchURL, rowID}) => {
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


    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }
      
  return (
    <div>
       <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
       <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
        <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
            <Link to = "/movie/:id">
            {images.map((item,id) => (
                <Movie key={id} item={item}/>
            ))}
            </Link>
        </div>
        <MdChevronRight onClick={slideRight} size={40} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
       </div> 
    </div>
  )
}

export default Row