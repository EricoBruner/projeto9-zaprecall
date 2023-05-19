import { useState } from "react";
import { DashboardCards } from "../DashboardCards";
import { CompletionBar } from "../CompletionBar";

import { StyledContainer } from "./styles";
import { Logo } from "../Logo";

import { questions } from "../../utils/questions";

export const Page = () => {
  const [completed, setCompleted] = useState({
    answered: 0,
    total: questions.length,
  });

  const userAnswer = (answer) => {
    switch (answer) {
      case "zap":
        // code block
        break;
      case "ididntremember":
        // code block
        break;
      case "ialmostdidntremember":
        break;
      default:
      // code block
    }
  };

  return (
    <StyledContainer>
      <Logo />
      <DashboardCards questions={questions} />
      <CompletionBar completed={completed} />
    </StyledContainer>
  );
};
