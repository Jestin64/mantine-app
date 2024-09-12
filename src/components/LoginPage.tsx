// src/components/LoginPage.tsx
import React, { useState } from "react";
import { TextInput, Button, Container, Title, Box } from "@mantine/core";
import { appTheme } from "../helpers";

interface LoginPageProps {
  onLogin: any;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <Container
      size={420}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        gap: "20px",
        backgroundColor: "#ffeed8",
      }}
    >
      <Title ta="center">Login</Title>
      <Box
        mt="lg"
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
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
        <Button
          fullWidth
          mt="xl"
          onClick={handleLogin}
          style={{ borderColor: appTheme.borderColor }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
