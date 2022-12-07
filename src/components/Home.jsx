import React from 'react'
import Main from './Main'
import Row from './Row'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row title="Up coming" fetchURL="http://localhost:3000/movies"/>
      <Row title="Popular" fetchURL="http://localhost:3000/movies"/>
      <Row title="Trending" fetchURL="http://localhost:3000/movies"/>
      <Row title="Top Rated" fetchURL="http://localhost:3000/movies"/>
    </div>
  )
}

export default Home