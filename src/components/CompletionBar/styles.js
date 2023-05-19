import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  bottom: 0;
  left: 0;
  gap: 5px;

  div {
    display: flex;
  }

  div:first-child {
    gap: 5px;
  }
`;

export const IonIcon = styled.div`
  ion-icon {
    font-size: 25px;
    --ionicon-stroke-width: 40px;
    color: ${({ icon }) => {
      if (icon === "close-circle") {
        return "#FF3030;";
      }
      if (icon === "help-circle") {
        return "#FF922E;";
      }
      if (icon === "checkmark-circle") {
        return "#2FBE34;";
      }
    }};
  }
`;
