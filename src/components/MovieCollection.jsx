import React from 'react'
import MovieCard from './MovieCard'
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import './movieCollection.css'

SwiperCore.use([Navigation])

function MovieCollection({movies}) {
    //console.log(movies)
  return (
    <div>
        <div className='Container'>
            <h3>Favourites</h3>
            <div className="allmovies">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                        slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                        slidesPerView: 2,
                        },
                        // when window width is >= 1200px
                        1200: {
                        slidesPerView: 3,
                        },
                    }}
                >
                    {movies.map((movies, index)=>{
                        if (index >= 5) return null;
                        return(
                            <SwiperSlide key={movies.id}>
                                <MovieCard movie = {movies} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default MovieCollection