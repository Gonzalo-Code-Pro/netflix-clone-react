import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(request.fecthNetflixOriginals);
      let item = req.data.results[random(req.data.results.length)];
      setMovie(item);
      return req;
    }
    fetchData();
  }, []);

  function random(len) {
    return Math.floor(Math.random() * len - 1);
  }
  function limitString(str,n){
      return str?.length > n ? str.substring(0,n-1) + "..." : str;
  }
  return (
    <header
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner">
        <div className="banner__contents">
          <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
            <h1 className="banner__description">
              {  limitString(movie?.overview ,150)}
            </h1>
          </div>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
export default Banner;
