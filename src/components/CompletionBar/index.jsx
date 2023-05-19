import { IonIcon, StyledContainer } from "./styles";

export const CompletionBar = ({ completed }) => {
  const { answered, total, icons } = completed;

  return (
    <StyledContainer>
      <div>
        <strong data-test="footer">
          {answered}/{total}
        </strong>
        <strong> CONCLUÍDOS</strong>
      </div>
      <div>
        {icons.map((icon, index) => (
          <IonIcon icon={icon}>
            <ion-icon key={index} name={icon}></ion-icon>
          </IonIcon>
        ))}
      </div>
    </StyledContainer>
  );
};
