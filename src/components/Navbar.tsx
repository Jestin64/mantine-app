import React from "react";
import { Button } from "@mantine/core";

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "10px",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: 1000,
      }}
    >
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
};

export default Navbar;
