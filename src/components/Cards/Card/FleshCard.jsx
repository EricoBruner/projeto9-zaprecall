import { useState } from "react";

import styled from "styled-components";

export const FleshCard = ({ question, answer, answerQuestion }) => {
  const [viewAnswer, setViewAnswer] = useState(false);

  const openAnswer = () => {
    setViewAnswer(true);
  };

  return (
    <StyledContainer>
      <strong>{viewAnswer ? answer : question}</strong>

      {!viewAnswer && (
        <ion-icon onClick={openAnswer} name="reload-outline"></ion-icon>
      )}

      {viewAnswer && (
        <div>
          <StyledButtonRed onClick={() => answerQuestion("ididntremember")}>
            Não lembrei
          </StyledButtonRed>
          <StyledButtonYellow
            onClick={() => answerQuestion("ialmostdidntremember")}
          >
            Quase não lembrei
          </StyledButtonYellow>
          <StyledButtonGreen onClick={() => answerQuestion("zap")}>
            Zap!
          </StyledButtonGreen>
        </div>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  width: 300px;
  min-height: 130px;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  strong {
    font-weight: 400;
    font-size: 18px;
    color: #333333;
  }

  ion-icon {
    font-size: 30px;
    color: #333333;
    --ionicon-stroke-width: 40px;
    cursor: pointer;
    position: absolute;
    bottom: 15px;
    right: 15px;
  }

  button {
    width: 100%;
    border-radius: 5px;
    font-weight: 400;
    font-size: 12px;
    height: 38px;
    cursor: pointer;
    color: white;
    border: none;
    text-align: center;
  }

  div {
    display: flex;
    gap: 7px;
  }
`;

const StyledButtonRed = styled.button`
  background: #ff3030;
`;

const StyledButtonYellow = styled.button`
  background: #ff922e;
`;

const StyledButtonGreen = styled.button`
  background: #2fbe34;
`;
