import { StyledContainer } from "./styles";

export const CompletionBar = ({ completed }) => {
  const { answered, total } = completed;

  return (
    <StyledContainer>
      <strong>
        {answered}/{total}
      </strong>
      <strong> CONCLUÍDOS</strong>
    </StyledContainer>
  );
};
