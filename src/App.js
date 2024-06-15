// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import AdminRoute from "./components/AdminRoute";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetail from "./components/MovieDetail";
import Footer from "./components/Footer";
import AllMoviesPage from "./pages/AllMoviesPage";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const darkTheme = {
  background: "#222",
  text: "#f8f8f8",
  primary: "#007bff",
  secondary: "#0056b3",
  accent: "#777",
};

const ContentWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 20px;
`;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isAdmin, setIsAdmin] = useState(false);

  const logout = () => {
    setToken("");
    setIsAdmin(false);
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <AppContainer>
          <Navbar isAuthenticated={!!token} logout={logout} />
          <ContentWrapper>
            <Routes>
              <Route
                path="/login"
                element={
                  <LoginPage setToken={setToken} setIsAdmin={setIsAdmin} />
                }
              />
              <Route
                path="/admin/*"
                element={
                  <AdminRoute isAuthenticated={!!token} isAdmin={isAdmin}>
                    <AdminPage token={token} isAdmin={isAdmin} />
                  </AdminRoute>
                }
              />
              <Route
                path="/"
                element={<MoviesPage token={token} isAdmin={isAdmin} />}
              />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route
                path="/movies"
                element={<AllMoviesPage token={token} isAdmin={isAdmin} />}
              />
            </Routes>
          </ContentWrapper>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </Router>
  );
};

export default App;
