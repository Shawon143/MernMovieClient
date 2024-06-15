// src/components/MovieFormStyles.js
import styled from "styled-components";

export const Form = styled.form`
  background-color: #1e1e1e;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  background-color: #2c2c2c;
  border: 1px solid #444;
  color: #ffffff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  background-color: #2c2c2c;
  border: 1px solid #444;
  color: #ffffff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  width: 100%;
  height: 100px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;
