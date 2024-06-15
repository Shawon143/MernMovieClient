import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, getMovies } from "../api";
import * as S from "./styles/MovieDetailStyles";
import MovieCard from "./MovieCard";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieById(id);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  useEffect(() => {
    const fetchRelatedMovies = async () => {
      try {
        const response = await getMovies();
        const filteredMovies = response.data.filter(
          (mov) => mov.genre === movie.genre && mov._id !== movie._id
        );
        setRelatedMovies(filteredMovies.slice(0, 3)); // Get first 3 related movies
      } catch (err) {
        console.error("Error fetching related movies:", err);
      }
    };

    if (movie) {
      fetchRelatedMovies();
    }
  }, [movie]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ backgroundColor: "#222", minHeight: "100vh" }}>
      <S.MovieDetailContainer>
        <S.MovieImage src={movie.coverImage} alt={movie.title} />
        <S.MovieContent>
          <div>
            <S.MovieTitle>{movie.title}</S.MovieTitle>
            <S.MovieDescription>{movie.description}</S.MovieDescription>
            <S.MovieDetails>
              <S.MovieGenre>Genre: {movie.genre}</S.MovieGenre>
              <S.MovieReleaseDate>
                Release Date: {new Date(movie.releaseDate).toLocaleDateString()}
              </S.MovieReleaseDate>
            </S.MovieDetails>
          </div>
          <S.MovieLink
            href={movie.videoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Movie
          </S.MovieLink>
        </S.MovieContent>

        <div>
          <S.RelatedMoviesTitle>Related Movies</S.RelatedMoviesTitle>
          <S.RelatedMoviesGrid>
            {relatedMovies.map((relatedMovie) => (
              <MovieCard key={relatedMovie._id} movie={relatedMovie} />
            ))}
          </S.RelatedMoviesGrid>
        </div>
      </S.MovieDetailContainer>
    </div>
  );
};

export default MovieDetail;
