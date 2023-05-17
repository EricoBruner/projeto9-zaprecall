import styled from "styled-components";

export const StyledContainer = styled.div`
  display: ${(props) => (props.gameStarted ? "none" : "flex")};

  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  img {
    width: 136px;
  }

  h1 {
    font-family: "Righteous";
    font-weight: 400;
    font-size: 36px;
    color: #ffffff;
  }

  button {
    width: 246px;
    height: 54px;
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-weight: 400;
    font-size: 18px;
  }
`;
