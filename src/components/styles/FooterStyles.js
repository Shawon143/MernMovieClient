import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #222; /* Dark background color */
  color: #f8f8f8; /* Light text color */
  text-align: center;
  padding: 20px 0;
  width: 100%;
  bottom: 0;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 1em;

  a {
    color: #f8f8f8; /* Light text color for links */
    text-decoration: none;
    margin: 0 5px;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff; /* Link color on hover */
    }
  }
`;
