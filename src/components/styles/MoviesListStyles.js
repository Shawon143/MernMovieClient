import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieListContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieListTitle = styled.h1`
  font-size: 2em;
  text-align: center;
  width: 100%;
`;

export const MovieCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: blue;
  font-size: 1.2em;
  font-weight: bold;
  display: block;
  margin-top: 10px;

  &:hover {
    color: darkblue;
  }
`;

export const MovieDescription = styled.p`
  color: #555;
  font-size: 0.9em;
  margin: 10px 0;
`;

export const MovieCover = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
`;
