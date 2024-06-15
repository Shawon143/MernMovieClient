import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieForm from "../components/MovieForm";
import { getMovieById } from "../api";

const UpdateMoviePage = ({ token }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieById(id);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      <h2>Update Movie</h2>
      {movie && <MovieForm token={token} initialMovie={movie} />}
    </div>
  );
};

export default UpdateMoviePage;
