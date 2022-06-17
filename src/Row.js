import React, { useState, useEffect } from 'react'
import axios from "./axios";
import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}) {
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

        <div className="rows__posters">
          {/* several row-posters */}

          {movies.map(movie => (
            <img 
            className="row__poster"
            src={`${baseURL}${movie.poster_path}`} 
            alt={movie.name} 
            /> 
          ))}

        </div>


        {/* container -> posters */}
    </div>
  )
}

export default Row