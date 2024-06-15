import React from "react";
import {
  NavbarContainer,
  NavbarTitle,
  NavbarLink,
  NavbarButton,
} from "./styles/NavbarStyles";

const Navbar = ({ isAuthenticated, logout }) => (
  <NavbarContainer>
    <NavbarTitle to="/" exact>
      FlickPulse
    </NavbarTitle>

    <div>
      <NavbarLink to="/" exact>
        Home
      </NavbarLink>
      <NavbarLink to="/movies">Movies</NavbarLink>
      {isAuthenticated ? (
        <>
          <NavbarLink to="/admin">Admin</NavbarLink>
          <NavbarButton onClick={logout}>Logout</NavbarButton>
        </>
      ) : (
        <NavbarLink to="/login">Login</NavbarLink>
      )}
    </div>
  </NavbarContainer>
);

export default Navbar;
