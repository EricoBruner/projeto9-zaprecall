import { Logo } from "../Logo";
import { Questions } from "../Questions";

import { StyledContainer } from "./styles";

export const Page = () => {
  return (
    <StyledContainer>
      <Logo />
      <Questions />
    </StyledContainer>
  );
};
