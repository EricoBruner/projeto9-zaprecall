import { useState } from "react";
import { Card } from "./Card";
import { StyledContainer } from "./styles";
import { FleshCard } from "./FleshCard";

export const Cards = ({ questions }) => {
  const [openCard, setOpenCard] = useState(false);

  return (
    <StyledContainer>
      {questions.map((question, index) =>
        openCard ? (
          <FleshCard key={index} />
        ) : (
          <Card key={index} id={index + 1} />
        )
      )}
    </StyledContainer>
  );
};
