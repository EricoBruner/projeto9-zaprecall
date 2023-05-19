import styled from "styled-components";

export const FlashCardAnswered = ({ id, state, iconName }) => {
  let dataTest = "";

  if (state === "ididntremember") {
    dataTest = "no-icon";
  }
  if (state === "ialmostdidntremember") {
    dataTest = "partial-icon";
  }
  if (state === "zap") {
    dataTest = "zap-icon";
  }

  return (
    <StyledContainer state={state}>
      <strong data-test="flashcard-text">Pergunta {id}</strong>
      <ion-icon data-test={dataTest} name={iconName}></ion-icon>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 300px;
  height: 65px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;

  strong {
    text-decoration: line-through;
    font-weight: 700;
    font-size: 16px;
    color: ${({ state }) => {
      if (state === "ididntremember") {
        return "#FF3030;";
      }
      if (state === "ialmostdidntremember") {
        return "#FF922E;";
      }
      if (state === "zap") {
        return "#2FBE34;";
      }
    }};
  }

  ion-icon {
    font-size: 30px;
    --ionicon-stroke-width: 40px;
    color: ${({ state }) => {
      if (state === "ididntremember") {
        return "#FF3030;";
      }
      if (state === "ialmostdidntremember") {
        return "#FF922E;";
      }
      if (state === "zap") {
        return "#2FBE34;";
      }
    }};
  }
`;
