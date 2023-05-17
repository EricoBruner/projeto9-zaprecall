import { Logo } from "../Logo";
import { Cards } from "../Cards";

import { StyledContainer } from "./styles";

import { questions } from "../../utils/questions";

export const Page = () => {
  return (
    <StyledContainer>
      <Logo />
      <Cards questions={questions} />
    </StyledContainer>
  );
};
