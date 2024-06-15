// src/styles/AllMoviesPageStyles.js
import styled from "styled-components";

export const AllMoviesContainer = styled.div`
  padding: 20px;
  background-color: #222;
  color: #f8f8f8;
`;

export const AllMoviesTitle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px; /* Add gap between elements */
  margin-bottom: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchBar = styled.input`
  padding: 10px 20px; /* Increase padding for a modern look */
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  transition: box-shadow 0.3s ease, transform 0.2s ease; /* Add transform for a smooth effect */
  background-color: #f8f8f8;
  color: #333;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px); /* Slightly move up on focus */
  }
`;

export const FilterDropdown = styled.select`
  padding: 10px 20px; /* Match padding with search bar */
  height: 40px;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  background-color: #f8f8f8;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Create exactly 5 equal columns */
  gap: 20px;
  justify-items: stretch; /* Ensure items stretch to fill the column */
  align-items: start; /* Align items at the start of the row */
`;
