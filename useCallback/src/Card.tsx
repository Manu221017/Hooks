import { useState, useCallback } from "react";
import ButtonOptimizado from "./ButtonOptimizado.tsx";
import ButtonNormal from "./ButtonNormal.tsx";

const Card = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const createRandom = useCallback(() => {
    const newRandom = Math.floor(Math.random() * 100);
    setRandomNumber(newRandom);
  }, []);

  const addCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className="p-4 border rounded-xl shadow-md space-y-4">
      <h2 className="text-lg font-bold">Carta</h2>
      <p className="card-text">Número aleatorio: {randomNumber}</p>
      <p className="card-text">Contador: {counter}</p>
      <ButtonOptimizado onClick={createRandom} />
      <ButtonNormal onClick={addCounter} />
    </div>
  );
};

export default Card;
