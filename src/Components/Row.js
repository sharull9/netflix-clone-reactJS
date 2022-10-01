import React, { useState, useEffect } from 'react'
import axios from '../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import "../CSS/style.css"

const base_url = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, settrailerUrl] = useState("");

    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchURL]);



    const obj = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            settrailerUrl('')
        } else{
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                settrailerUrl(urlParams.get('v'))
            })
            .catch((error)=> {
                console.log(error)
            })
        }
    }
  return (
    <div className='row px-1'>
        <div className="row_title">
            <h2>{ title }</h2>
        </div>
        <div className="row_posters px-1 py-1">
            { movies.map( (movie) => (
                <div className="row_items" key={movie.id} onClick={() => handleClick(movie)} >
                    <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow ?movie.poster_path :movie.backdrop_path}`} alt={movie.name} />
                </div>
            ))}
        </div>
        <div className="trailer">
            {trailerUrl && <YouTube videoId={trailerUrl}  opts={obj} />}
        </div>
    </div>
  )
}

export default Row