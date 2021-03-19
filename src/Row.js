import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import Info from "./InfoMovie";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const UrlBase = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const handleCLick = (m) => {
    if(movie.length === 0 ) setMovie(m)
    if(movie.length !== 0 ) setMovie([])
  };


  return (
    <div>
      <h1 className="row__title">{title}</h1>
      <div id="filas" className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleCLick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${UrlBase}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {movie.length !== 0 ? <Info movie={movie} /> : ""}
    </div>
  );
}

export default Row;



















//const handleCLick = (movie) => {
//if (trailerUrl) {
//setTrailerUrl("");
//} else {
//movieTrailer(movie?.name || "").then((url) => {
//const urlParams = new URLSearchParams(new URL(url).search);
//setTrailerUrl(urlParams.get("v"));
//});
//setTrailerUrl("XtMThy8QKqU");
//}
//};
