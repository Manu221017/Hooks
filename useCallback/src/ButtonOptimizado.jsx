import React from "react";

const ButtonOptimizado = React.memo(({ onClick }) => {
  console.log("🔁 Renderizado: ButtonOptimizado");

  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        backgroundColor: "green",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Generar Número Aleatorio
    </button>
  );
});

export default ButtonOptimizado;
