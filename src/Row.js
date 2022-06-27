import React, { useState, useEffect } from 'react'
import axios from "./axios";
import "./Row.css";
import YouTube from 'react-youtube';

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


  return (
    <div className="row">
        {/* title */}
        <h2>{title}</h2>

        <div className="row__posters">
          {/* several row-posters */}

          {movies.map(movie => (
            <img 
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name} 
            /> 
          ))}
        </div>
        {/* container -> posters */}
        <YouTube videoId={trailerUrl} opts={opts} />
    </div>
  );
}

export default Row