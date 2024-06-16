// src/components/SideNavbar.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  width: 100%;
  height: auto;
  background-color: #1e1e1e;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 10px;
  left: 0;

  @media (min-width: 768px) {
    width: 200px;
    height: 100vh;
    flex-direction: column;
    position: static;
  }
`;

const NavItem = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin: 10px;
  font-size: 16px;

  &:hover {
    color: #4caf50;
  }

  @media (min-width: 768px) {
    margin: 10px 0;
    font-size: 18px;
  }
`;

const SideNavbar = () => (
  <Navbar>
    <NavItem to="/admin/add">Add Movie</NavItem>
    <NavItem to="/admin/update">Update Movie</NavItem>
    <NavItem to="/admin/movies">All Movies</NavItem>
  </Navbar>
);

export default SideNavbar;
