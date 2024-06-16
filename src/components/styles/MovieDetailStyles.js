import styled from "styled-components";

export const MovieDetailContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: #222;
  color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-items: stretch;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
