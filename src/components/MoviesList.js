import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { getMovies } from "../api";
import {
  MovieListContainer,
  MovieListTitle,
  MovieCard,
  MovieLink,
  MovieDescription,
  MovieCover,
} from "./MoviesListStyles";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getMovies();
      setMovies(response.data);
    };
    fetchMovies();
  }, []);

  return (
    <MovieListContainer>
      <MovieListTitle>Movies</MovieListTitle>
      {movies.map((movie) => (
        <MovieCard key={movie._id}>
          <MovieCover
            src={`http://localhost:5000/${movie.coverImage}`}
            alt={movie.title}
          />
          <MovieLink to={`/movie/${movie._id}`}>{movie.title}</MovieLink>
          <MovieDescription>
            {movie.description.substring(0, 100)}...
          </MovieDescription>
        </MovieCard>
      ))}
    </MovieListContainer>
  );
};

export default MoviesList;
