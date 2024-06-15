import React from "react";
import { FooterContainer, FooterText } from "./styles/FooterStyles";

const Footer = () => (
  <FooterContainer>
    <FooterText>
      © 2023 FlickPulse. All rights reserved. <br />
      Follow us on:{" "}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        Facebook
      </a>{" "}
      |{" "}
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        Twitter
      </a>{" "}
      |{" "}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
    </FooterText>
  </FooterContainer>
);

export default Footer;
