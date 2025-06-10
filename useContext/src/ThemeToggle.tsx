import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle: React.FC = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }
  
  const { toggleTheme } = context;
  console.log("🔁 Render: ThemeToggle");

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Cambiar Tema
    </button>
  );
};

export default ThemeToggle; 