import React, { useState, useEffect } from 'react'
import axios from "./axios";
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import 'movie-trailer/index';

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      //if [], run once when the row loads, and dont run again
        async function fetchData (){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // const handleClick = (movie) => {
  //   if(trailerUrl){
  //     setTrailerUrl('');
  //   }
  //   else {
  //     movieTrailer(movie?.name || "")
  //     .then(url => {
  //       const urlParams = new URLSearchParams(new URL(url).search);
  //     })
  //     .catch((error) => console.log(error))
  //   }
  // }

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('');
    }
    else {
      movieTrailer(movie?.name || "").then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
      })
      .catch((error) => console.log(error))
    }
  }
  
  return (
    <div className="row">
        {/* title */}
        <h2>{title}</h2>

        <div className="row__posters">
          {/* several row-posters */}

          {movies.map(movie => (
            <img 
            key={movie.id}
            // onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name} 
            /> 
          ))}
        </div>
        {/* container -> posters */}
        {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
}

export default Row