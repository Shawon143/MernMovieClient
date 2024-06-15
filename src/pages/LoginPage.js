import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #222; /* Dark background color */
`;

const LoginForm = styled.form`
  background: #333; /* Dark background color */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LoginInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #555; /* Dark border color */
  border-radius: 4px;
  background-color: #444; /* Dark input background color */
  color: #f8f8f8; /* Light text color */
`;

const LoginButton = styled.button`
  padding: 10px;
  font-size: 1em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginPage = ({ setToken, setIsAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      setToken(response.data.token);
      setIsAdmin(response.data.isAdmin);
      localStorage.setItem("token", response.data.token); // Save token to local storage
      navigate("/");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <LoginInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
