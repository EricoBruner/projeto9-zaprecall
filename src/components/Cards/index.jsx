import { useState } from "react";

import { OpenFleshCard } from "./Card/OpenFleshCard";
import { FleshCard } from "./Card/FleshCard";
import { FlashCardAnswered } from "./Card/FlashCardAnswered";

export const Cards = ({ id, question, answer, questionAnswered }) => {
  const [viewOpenFleshCard, setViewOpenFleshCard] = useState(true);
  const [viewFleshCard, setViewFleshCard] = useState(false);
  const [state, setState] = useState("");

  const openFleshCard = () => {
    setViewOpenFleshCard(false);
    setViewFleshCard(true);
  };

  const answerQuestion = (answer) => {
    setViewFleshCard(false);
    setState(answer);
    questionAnswered();
  };

  return (
    <div data-test="flashcard">
      {viewOpenFleshCard && (
        <OpenFleshCard id={id} openFleshCard={openFleshCard} />
      )}
      {state != "" && <FlashCardAnswered id={id} state={state} />}

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
