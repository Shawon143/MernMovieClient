import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarTitle = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 0 10px;
`;

export const NavbarLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &.active {
    background-color: #007bff;
    color: white;
  }

  &:hover {
    background-color: #555;
  }
`;

export const NavbarButton = styled.button`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;
