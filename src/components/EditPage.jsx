import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const EditPage = ({newMovie, setAllMovies}) => {
//     const { id, description} = movie;
//     function handleMovieChange(event) {
//         handleMovieChange(id, parseInt(event.target.value));// use parseInt to ensure integer values only
//       }
// const [newMovie, setNewMovie] = useState({
//   name: "",
//   description: "",
//   movie_url: "",
//   video_url: "",
// });

// const handleChange = (e) => {
//   setNewMovie({...newMovie, [e.target.name]: e.target.value})
// }

// const handleSubmit = (e) => {
//   e.preventDefault()
//   fetch("http://localhost:3000/movies", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newMovie),
//   }).then((resp)=> resp.json())
//     .then((data)=>{
//       const createdMovie = [...allMovies, data]
//       setAllMovies(createdMovie)
//     })
//     e.target.reset()
// }
const [movies, setMovie] = useState([])
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [movie_url, setMovie_Url] = useState("");
const [video_url, setVideo_Url] = useState("");
const [movieId,setMovieId]=useState(null)

useEffect(() => {
  getMovies()
},[])
// console.log(movies)

function getMovies() {
fetch("http://localhost:3000/movies")
.then((result) => {
  result.json().then((resp) => {
    // console.warn(resp)
    setMovie(resp)
    setName(resp[0].name)
    setDescription(resp[0].description)
    setMovie_Url(resp[0].movie_url)
    setVideo_Url(resp[0].video_url)
    setMovieId(resp[0].id)
  })
})
}

// function selectMovie(id)
// {
//   let item=movies[id-1];
//   setName(item.name)
//   setDescription(item.description)
//   setMovie_Url(item.movie_url)
//   setVideo_Url(item.video_url)
//   setMovieId(item.id)
// }

function handleSubmit(event, id) {
  event.preventDefault()
  let item={name,description,movie_url,video_url}
  console.warn("item",item)
  fetch(`http://localhost:4000/movies/${id}`, {
    method: 'PATCH',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(item)
  }).then((result) => {
    result.json().then((resp) => {
      console.warn(resp)
      getMovies()
    })
  })
  // event.target.reset()
}

  return (
    <div>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/73fd2c5e-7a4b-4e60-ac3d-c76b8ee6bed5/KE-en-20221128-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Edit Movie</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e)=> {setName(e.target.value)}}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="text"
                  placeholder="Movie Title"
                  name="name"
                />
                <input
                  onChange={(e)=> {setDescription(e.target.value)}}
                  className="p-3 my-2 bg-gray-700 rounded"
         // event.target.reset()           type="description"
                  placeholder="description"
                  autoComplete="description"
                  name="description"
                />
                <input
                  onChange={(e)=> {setMovie_Url(e.target.value)}}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="movie_url"
                  placeholder="Poster URL"
                  autoComplete="current-movie_url"
                  name="movie_url"
                />
                <input
                  onChange={(e)=> {setVideo_Url(e.target.value)}}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="text"
                  placeholder="Full video Url"
                  name="video_url"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Update Movie
                </button>
                <p className="py-8">
                  <span className="text-gray-600">Continue Exploring?</span>{" "}
                  <Link to="/">All Movies</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default EditPage