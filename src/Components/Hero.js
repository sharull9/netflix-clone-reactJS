import React from 'react';
import Row from './Row';
import requests from '../requests';
import "../CSS/style.css";

function Hero() {
  return (
    <div className="row-container">
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
      <Row title="Crime" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romantic" fetchURL={requests.fetchRomanticMovies} />
      <Row title="Documnetaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  )
}

export default Hero
