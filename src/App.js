import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=ea3f4e91";

const movie1 = {
  Title: "The Lego Batman Movie",
  Year: "2016",
  imdbID: "tt4116284",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("batman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={"superman"}
          onChange={() => {}}
        />

        <button onClick={() => {}}>Search</button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>no movies found</h2>
        </div>
      )}
    </div>
  );  
};

export default App;
