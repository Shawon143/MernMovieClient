import styled from "styled-components";

export const MovieDetailContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: #222; /* Dark background */
  color: #f8f8f8; /* Light text color */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
`;

export const MovieImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
`;

export const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

export const MovieDescription = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
`;

export const MovieDetails = styled.div`
  margin-top: 20px;
`;

export const MovieGenre = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MovieReleaseDate = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MovieLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const RelatedMoviesContainer = styled.div`
  margin-top: 40px;
`;

export const RelatedMoviesTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

export const RelatedMoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
`;

export const RelatedMovieCard = styled.div`
  background-color: #333; /* Dark background for movie cards */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const RelatedMovieImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const RelatedMovieContent = styled.div`
  padding: 10px;
`;

export const RelatedMovieTitle = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
  color: #f8f8f8; /* Light text color */
`;

export const RelatedMovieGenre = styled.p`
  font-size: 0.9em;
  color: #f8f8f8; /* Light text color */
`;
