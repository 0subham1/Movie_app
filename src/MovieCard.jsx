import React from "react";
const MovieCard = ({ movie: { imdbID, Year, Poster, Title } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster} alt={Title} />
      </div>

      <div>
        <span>{Title}</span>
      </div>
    </div>
  );
};

export default MovieCard;
