import styled from "styled-components";

export const AnswerFleshCard = ({ answer }) => {
  return (
    <StyledContainer>
      <strong>{answer}</strong>
      <div>
        <StyledButtonRed>Não lembrei</StyledButtonRed>
        <StyledButtonYellow>Quase não lembrei</StyledButtonYellow>
        <StyledButtonGreen>Zap!</StyledButtonGreen>
      </div>
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

  div {
    width: 100%;
    display: flex;
    gap: 7px;
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
