import React from "react";
import "./InfoMovie.css";
function InfoMovie({ movie }) {
function limitString(str,n){
      return str?.length > n ? str.substring(0,n-1) + "..." : str;
  }
  return (
    <div className="info">
      <div className="info__content">
        <h1 className="info__title">{movie?.name || movie?.title}</h1>
        <p className="info__description">{limitString(movie.overview,200)}</p>
        <div className="info__buttons">
          <button className="info__button-play">Play</button>
          <button className="info__button-trailer">Trailer</button>
        </div>
      </div>
      <div
        className="info__bg"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="info__bg-gradient"></div>
      </div>
    </div>
  );
}

export default InfoMovie;
