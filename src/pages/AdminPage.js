// src/pages/AdminPage.js
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SideNavbar from "../components/SideNavbar";
import AddMoviePage from "./AddMoviePage";
import UpdateMoviePage from "./UpdateMoviePage";
import AllMoviesPage from "./AllMoviesPage";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  margin-left: 0;
  padding: 20px;
  flex: 1;

  @media (min-width: 768px) {
    margin-left: 200px;
  }
`;

const AdminPage = ({ token, isAdmin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !isAdmin) {
      navigate("/login");
    }
  }, [token, isAdmin, navigate]);

  return (
    <Container>
      <SideNavbar />
      <Content>
        <Routes>
          <Route path="add" element={<AddMoviePage token={token} />} />
          <Route path="update" element={<UpdateMoviePage token={token} />} />
          <Route
            path="/update/:id"
            element={<UpdateMoviePage token={token} />}
          />
          <Route
            path="movies"
            element={<AllMoviesPage token={token} isAdmin={isAdmin} />}
          />
          <Route path="/" element={<h1>Welcome to Admin Page</h1>} />
        </Routes>
      </Content>
    </Container>
  );
};

export default AdminPage;
