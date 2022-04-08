import React from "react";
const MovieCard = ({movie}) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
          <img src={movie.Poster} alt={movie.Title}/>
          </div>

      <div>
        <span>{movie.Title}</span>
      </div>
    </div>
  );
};

export default MovieCard