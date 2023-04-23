import React from 'react'
import Main from './Main'
import Row from './Row'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowID="1" title="Up coming" fetchURL="https://moviesapi-gpzn.onrender.com/movies"/>
      <Row rowID="2" title="Popular" fetchURL="https://moviesapi-gpzn.onrender.com/movies"/>
      <Row rowID="3" title="Trending" fetchURL="https://moviesapi-gpzn.onrender.com/movies"/>
      <Row rowID="4" title="Top Rated" fetchURL="https://moviesapi-gpzn.onrender.com/movies"/>
    </div>
  )
}

export default Home