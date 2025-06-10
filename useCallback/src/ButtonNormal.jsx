import React from "react";

const ButtonNormal = React.memo(({ onClick }) => {
  console.log("🔁 Renderizado: ButtonNormal");

  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Aumentar Contador
    </button>
  );
});

export default ButtonNormal;
