// src/components/styles/MovieCardStyles.js
import styled from "styled-components";

export const Card = styled.div`
  background-color: #333;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 100%; /* Ensure the card takes full width of the grid cell */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 2 / 3;
`;

export const MovieContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MovieTitle = styled.h2`
  font-size: 1.5em;
  margin: 0;
  color: #f8f8f8;
  text-transform: capitalize;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const MovieGenre = styled.p`
  font-size: 1em;
  color: #aaa;
  margin-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const AdminOptions = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const AdminButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;
