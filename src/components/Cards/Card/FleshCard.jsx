import styled from "styled-components";

export const FleshCard = ({ id, openQuestion }) => {
  return (
    <StyledContainer>
      <strong>Pergunta {id}</strong>
      <ion-icon onClick={openQuestion} name="play-outline"></ion-icon>
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
    font-weight: 700;
    font-size: 16px;
    color: #333333;
  }

  ion-icon {
    font-size: 30px;
    color: #333333;
    --ionicon-stroke-width: 40px;
    cursor: pointer;
  }
`;
