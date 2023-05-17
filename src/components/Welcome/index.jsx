import { useState } from "react";

import { StyledContainer } from "./styles";
import logo from "../../assets/logo.png";

export const Welcome = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <StyledContainer gameStarted={gameStarted}>
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>
      <button onClick={() => startGame()}>Iniciar Recall!</button>
    </StyledContainer>
  );
};
