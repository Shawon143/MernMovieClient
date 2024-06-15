// src/pages/AdminPage.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import AddMoviePage from "./AddMoviePage";
import UpdateMoviePage from "./UpdateMoviePage";
import AllMoviesPage from "./AllMoviesPage";

const AdminPage = ({ token, isAdmin }) => (
  <div style={{ display: "flex" }}>
    <SideNavbar />
    <div style={{ marginLeft: "200px", padding: "20px", flex: 1 }}>
      <Routes>
        <Route path="add" element={<AddMoviePage token={token} />} />
        <Route path="update" element={<UpdateMoviePage token={token} />} />
        <Route path="/update/:id" element={<UpdateMoviePage token={token} />} />
        <Route
          path="movies"
          element={<AllMoviesPage token={token} isAdmin={isAdmin} />}
        />
        <Route path="/" element={<h1>Welcome to Admin Page</h1>} />
      </Routes>
    </div>
  </div>
);

export default AdminPage;
