import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const ButtonNormal = React.memo(({ onClick }: ButtonProps) => {
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
