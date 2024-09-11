// src/components/LoginPage.tsx
import React, { useState } from "react";
import { TextInput, Button, Container, Title, Box } from "@mantine/core";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container size={420}>
      <Title ta="center">Login</Title>
      <Box mt="lg">
        <TextInput
          label="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextInput
          mt="md"
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button fullWidth mt="xl" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
