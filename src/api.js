// src/api.js

import axios from "axios";

const API_URL = "https://mernmoviebackend-7axe.onrender.com/api"; // Update the URL if different

export const register = (userData) =>
  axios.post(`${API_URL}/auth/register`, userData);
export const login = (userData) =>
  axios.post(`${API_URL}/auth/login`, userData);

export const getMovies = () => axios.get(`${API_URL}/movies`);
export const uploadMovie = (movieData, token) =>
  axios.post(`${API_URL}/movies/upload`, movieData, {
    headers: { "x-auth-token": token },
  });
export const updateMovie = (id, movieData, token) =>
  axios.put(`${API_URL}/movies/${id}`, movieData, {
    headers: { "x-auth-token": token },
  });
export const deleteMovie = (id, token) =>
  axios.delete(`${API_URL}/movies/${id}`, {
    headers: { "x-auth-token": token },
  });
export const getMovieById = (id) => axios.get(`${API_URL}/movies/${id}`);
