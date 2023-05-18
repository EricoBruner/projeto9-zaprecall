import styled from "styled-components";

export const QuestionFleshCard = ({ question, openAnswer }) => {
  return (
    <StyledContainer>
      <strong>{question}</strong>
      <ion-icon onClick={openAnswer} name="reload-outline"></ion-icon>
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
`;
