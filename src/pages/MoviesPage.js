import React, { useEffect, useState } from "react";
import { getMovies } from "../api";
import * as S from "../styles/HomepageStyles";
import MovieCard from "../components/MovieCard";
import banner from "../banner.jpg";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getMovies();
      const sortedMovies = response.data
        .slice(-3)
        .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
      setMovies(sortedMovies); // Get last 3 movies sorted from newest to oldest
    };
    fetchMovies();
  }, []);

  return (
    <S.HomepageContainer>
      <S.HeroSection banner={banner}>
        <S.HeroOverlay />
        <S.HeroContent>
          <S.HeroTitle>Welcome to FlickPulse</S.HeroTitle>
          <S.HeroSubtitle>
            Discover and enjoy your favorite movies
          </S.HeroSubtitle>
        </S.HeroContent>
      </S.HeroSection>

      <S.FeaturedSection>
        <S.FeaturedTitle>Featured Movies</S.FeaturedTitle>
        <S.MoviesGrid>
          {movies.map((movie) => (
            <S.FixedMovieCardContainer key={movie._id}>
              <MovieCard movie={movie} />
            </S.FixedMovieCardContainer>
          ))}
        </S.MoviesGrid>
      </S.FeaturedSection>
    </S.HomepageContainer>
  );
};

export default MoviesPage;
