import { useEffect, useState } from "react";

import { OpenFleshCard } from "./Card/OpenFleshCard";
import { FleshCard } from "./Card/FleshCard";
import { FlashCardAnswered } from "./Card/FlashCardAnswered";

export const Cards = ({ id, question, answer, questionAnswered }) => {
  const [viewOpenFleshCard, setViewOpenFleshCard] = useState(true);
  const [viewFleshCard, setViewFleshCard] = useState(false);
  const [state, setState] = useState("");
  const [iconName, setIconName] = useState("");

  useEffect(() => {}, [state]);

  const openFleshCard = () => {
    setViewOpenFleshCard(false);
    setViewFleshCard(true);
  };

  const answerQuestion = (answer) => {
    let newIcon = "";
    setViewFleshCard(false);
    setState(answer);

    if (answer === "ididntremember") {
      newIcon = "close-circle";
    }
    if (answer === "ialmostdidntremember") {
      newIcon = "help-circle";
    }
    if (answer === "zap") {
      newIcon = "checkmark-circle";
    }

    questionAnswered(newIcon);
    setIconName(newIcon);
  };

  return (
    <div data-test="flashcard">
      {viewOpenFleshCard && (
        <OpenFleshCard id={id} openFleshCard={openFleshCard} />
      )}
      {state != "" && (
        <FlashCardAnswered id={id} state={state} iconName={iconName} />
      )}

      {viewFleshCard && (
        <FleshCard
          question={question}
          answer={answer}
          answerQuestion={answerQuestion}
        />
      )}
    </div>
  );
};
