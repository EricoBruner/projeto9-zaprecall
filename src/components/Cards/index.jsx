import { useState } from "react";
import { Card } from "./Card";
import { StyledContainer } from "./styles";
import { FleshCard } from "./FleshCard";

export const Cards = ({ questions }) => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  return (
    <StyledContainer>
      {questions.map((question, index) =>
        openCardIndex === index ? (
          <FleshCard key={index} question={question} />
        ) : (
          <Card
            key={index}
            id={index + 1}
            openCard={() => {
              setOpenCardIndex(index);
            }}
          />
        )
      )}
    </StyledContainer>
  );
};
