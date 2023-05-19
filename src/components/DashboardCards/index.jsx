import { Cards } from "../Cards";

import { StyledContainer } from "./styles";

export const DashboardCards = ({ questions, questionAnswered }) => {
  return (
    <StyledContainer>
      {questions.map((question, index) => (
        <Cards
          key={index}
          id={index + 1}
          question={question.question}
          answer={question.answer}
          questionAnswered={questionAnswered}
        />
      ))}
    </StyledContainer>
  );
};
