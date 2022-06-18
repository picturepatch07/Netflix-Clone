import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from './requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        
        fetchData();
    }, []);
  return (
    <header> {/*  <<<< Background image */}
        {/* title */}
        {/* div > 2 buttons */}
        {/* description */}


    </header>
  )
}

export default Banner