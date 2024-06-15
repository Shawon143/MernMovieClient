// src/pages/AddMoviePage.js
import React from "react";
import MovieForm from "../components/MovieForm";

const AddMoviePage = ({ token }) => (
  <div>
    <h1>Add Movie</h1>
    <MovieForm token={token} />
  </div>
);

export default AddMoviePage;
