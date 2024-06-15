// src/components/SideNavbar.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #1e1e1e;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const NavItem = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin: 10px 0;
  font-size: 18px;

  &:hover {
    color: #4caf50;
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
