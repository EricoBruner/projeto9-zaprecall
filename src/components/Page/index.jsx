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
    icons: [],
  });

  const questionAnswered = (icon) => {
    let novoCompleted = { ...completed };
    novoCompleted.answered += 1;
    novoCompleted.icons.push(icon);
    setCompleted(novoCompleted);
  };

  return (
    <StyledContainer>
      <Logo />
      <DashboardCards
        questions={questions}
        questionAnswered={questionAnswered}
      />
      <CompletionBar completed={completed} />
    </StyledContainer>
  );
};
