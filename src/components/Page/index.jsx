import { Logo } from "../Logo";
import { DashboardCards } from "../DashboardCards";
import { CompletionBar } from "../CompletionBar";

import { StyledContainer } from "./styles";

import { questions } from "../../utils/questions";

export const Page = () => {
  return (
    <StyledContainer>
      <Logo />
      <DashboardCards questions={questions} />
      <CompletionBar />
    </StyledContainer>
  );
};
