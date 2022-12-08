import React from 'react'
import { Link } from 'react-router-dom'
import "./movieCard.css"

const MovieCard = ({movie}) => {
    console.log(movie)
  return (
<div className='favourites'>
<Link to="/favourites" className='movieItem-img'>
        <img src={movie.movie_url} alt="movie pic" />
      </Link>
      <div className="movieItem-info">
        
          <h3 className='movieItem-title'>{movie.title}</h3>
        
        <p className='movieItem-desc'>{movie.description}</p>
      </div>
</div>
  )
}

export default MovieCard