import React, { useState, useEffect} from 'react'
import requests from '../requests';
import axios from '../axios';
import "../CSS/style.css"
import Nav from './Nav';

function Header() {
  const [movie, setMovie] = useState([]);
    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
              request.data.results[Math.floor(Math.random() * request.data.results.length - 1)],
            )
        }
        fetchData();
    }, []);
    console.log(movie)



    function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
  return (
    <header>
      <Nav />
        <div className="banner" style={{
          backgroundSize: "cover",
          backgroundImage: `url(http://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
          backgroundPosition: "center center",
          }}>
          <div className="banner_content px-2 py-2">
            <div className="title">
              <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
            </div>
            <div className="banner_buttons">
              <button className='button px-1'>Play</button>
              <button className="button px-1">My List</button>
            </div>
            <div className="banner_description">
              <p>{truncateString(`${movie?.overview}`, 180)}</p>
            </div>
          </div>
          <div className="banner-overlay"></div>
        </div>
    </header>
  )
}

export default Header;