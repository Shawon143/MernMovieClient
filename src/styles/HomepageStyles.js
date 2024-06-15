import styled from "styled-components";

export const HomepageContainer = styled.div`
  padding: 20px;
  background-color: #222;
  color: #f8f8f8;
`;

export const HeroSection = styled.section`
  position: relative;
  background-image: url(${({ banner }) => banner});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 20px;
  text-align: center;
  margin-bottom: 40px;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const HeroTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  color: #f8f8f8;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 40px;
  color: #f8f8f8;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

export const FeaturedSection = styled.section`
  margin-bottom: 40px;
`;

export const FeaturedTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
  color: #f8f8f8;
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Adjusted width here */
  gap: 20px;
  justify-items: center;
`;

export const FixedMovieCardContainer = styled.div`
  width: 250px; /* Adjusted width here */
  height: 100%; /* Make sure the container takes full height */
`;

// Add styling for MovieCard component here if needed
