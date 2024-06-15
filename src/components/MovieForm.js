// src/components/MovieForm.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { uploadMovie, updateMovie } from "../api";
import { Form, Input, TextArea, Button } from "./styles/MovieFormStyles";

const MovieForm = ({ token, initialMovie = {} }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [category, setCategory] = useState(""); // New category state
  const [releaseDate, setReleaseDate] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [currentCoverImage, setCurrentCoverImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (initialMovie && Object.keys(initialMovie).length !== 0) {
      setTitle(initialMovie.title || "");
      setDescription(initialMovie.description || "");
      setGenre(initialMovie.genre || "");
      setCategory(initialMovie.category || ""); // Set initial category value
      setReleaseDate(
        initialMovie.releaseDate ? initialMovie.releaseDate.split("T")[0] : ""
      );
      setVideoLink(initialMovie.videoLink || "");
      setCurrentCoverImage(
        initialMovie.coverImage ? `${initialMovie.coverImage}` : ""
      );
    }
  }, [initialMovie]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("genre", genre);
    formData.append("category", category); // Append category to formData
    formData.append("releaseDate", releaseDate);
    formData.append("videoLink", videoLink);
    if (coverImage) {
      formData.append("coverImage", coverImage);
    }

    try {
      if (initialMovie._id) {
        await updateMovie(initialMovie._id, formData, token);
      } else {
        await uploadMovie(formData, token);
      }
      alert("Movie saved successfully!");
      navigate("/admin/movies"); // Redirect to the all movies page
    } catch (error) {
      console.error("Error saving movie", error); // Log the error
      alert("Error saving movie");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextArea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <Input
        type="date"
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Video Link"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
        required
      />
      {currentCoverImage && (
        <div>
          <img
            src={currentCoverImage}
            alt="Current Cover"
            style={{ width: "100px", height: "150px" }}
          />
          <p>Current Cover Image</p>
        </div>
      )}
      <Input type="file" onChange={(e) => setCoverImage(e.target.files[0])} />
      <Button type="submit">Save Movie</Button>
    </Form>
  );
};

export default MovieForm;
