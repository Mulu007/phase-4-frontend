import React from 'react'
import Main from './Main'
import Row from './Row'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowID="1" title="Up coming" fetchURL="http://localhost:3000/movies"/>
      <Row rowID="2" title="Popular" fetchURL="http://localhost:3000/movies"/>
      <Row rowID="3" title="Trending" fetchURL="http://localhost:3000/movies"/>
      <Row rowID="4" title="Top Rated" fetchURL="http://localhost:3000/movies"/>
    </div>
  )
}

export default Home