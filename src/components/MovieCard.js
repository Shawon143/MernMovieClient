// src/components/MovieCard.js
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  MovieImage,
  MovieContent,
  MovieTitle,
  MovieGenre,
  AdminOptions,
  AdminButton,
} from "./styles/MovieCardStyles";

const MovieCard = ({ movie, isAdmin, onDelete }) => (
  <Card>
    <Link to={`/movie/${movie._id}`} style={{ textDecoration: "none" }}>
      <MovieImage src={movie.coverImage} alt={movie.title} />
      <MovieContent>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieGenre>{movie.genre}</MovieGenre>
      </MovieContent>
    </Link>
    {isAdmin && (
      <AdminOptions>
        <Link to={`/admin/update/${movie._id}`}>
          <AdminButton>Edit</AdminButton>
        </Link>
        <AdminButton onClick={() => onDelete(movie._id)}>Delete</AdminButton>
      </AdminOptions>
    )}
  </Card>
);

export default MovieCard;
