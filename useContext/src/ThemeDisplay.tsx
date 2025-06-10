import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeDisplay: React.FC = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error("ThemeDisplay must be used within a ThemeProvider");
  }
  
  const { theme } = context;
  console.log("🔁 Render: ThemeDisplay");

  const styles = {
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    transition: "all 0.3s ease",
  };

  return (
    <div style={styles}>
      <h2>Tema actual: {theme}</h2>
      <p>Este es un ejemplo usando useContext.</p>
    </div>
  );
};

export default ThemeDisplay; 