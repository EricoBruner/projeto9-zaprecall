import { StyledContainer } from "./styles";

import logo from "../../assets/logo.png";

export const Logo = () => {
  return (
    <StyledContainer>
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>
    </StyledContainer>
  );
};
