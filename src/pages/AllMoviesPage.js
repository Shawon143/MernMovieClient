// src/components/AllMoviesPage.js
import React, { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "../api";
import * as S from "../styles/AllMoviesPageStyles";
import MovieCard from "../components/MovieCard";

const AllMoviesPage = ({ token, isAdmin }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All"); // New category filter
  const [releaseDateFilter, setReleaseDateFilter] = useState("Newest");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  const filterAndSortMovies = () => {
    let filteredMovies = [...movies];

    // Apply genre filter
    if (genreFilter !== "All") {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.genre && movie.genre.toLowerCase() === genreFilter.toLowerCase()
      );
    }

    // Apply category filter
    if (categoryFilter !== "All") {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.category &&
          movie.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    // Apply search filter
    filteredMovies = filteredMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Apply release date filter
    if (releaseDateFilter === "Newest") {
      filteredMovies.sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
      );
    } else if (releaseDateFilter === "Oldest") {
      filteredMovies.sort(
        (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
      );
    }

    return filteredMovies;
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this movie?"
    );
    if (confirmed) {
      try {
        await deleteMovie(id, token);
        setMovies(movies.filter((movie) => movie._id !== id));
        alert("Movie deleted successfully!");
      } catch (error) {
        console.error("Error deleting movie:", error);
        alert("Error deleting movie");
      }
    }
  };

  const genres = ["All", ...new Set(movies.map((movie) => movie.genre))];
  const categories = ["All", ...new Set(movies.map((movie) => movie.category))];

  return (
    <S.AllMoviesContainer>
      <S.AllMoviesTitle>All Movies</S.AllMoviesTitle>
      <S.FilterContainer>
        <S.FilterDropdown
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </S.FilterDropdown>
        <S.SearchContainer>
          <S.SearchBar
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </S.SearchContainer>
        <S.FilterDropdown
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
        >
          <option value="All">All Genres</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </S.FilterDropdown>
        <S.FilterDropdown
          value={releaseDateFilter}
          onChange={(e) => setReleaseDateFilter(e.target.value)}
        >
          <option value="Newest">Newest to Oldest</option>
          <option value="Oldest">Oldest to Newest</option>
        </S.FilterDropdown>
      </S.FilterContainer>

      <S.MoviesGrid>
        {filterAndSortMovies().map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            isAdmin={isAdmin}
            onDelete={handleDelete}
          />
        ))}
      </S.MoviesGrid>
    </S.AllMoviesContainer>
  );
};

export default AllMoviesPage;
