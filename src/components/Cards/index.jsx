import { useState } from "react";

import { FleshCard } from "./Card/FleshCard";
import { QuestionFleshCard } from "./Card/QuestionFleshCard";
import { AnswerFleshCard } from "./Card/AnswerFleshCard";

export const Cards = ({ id, question, answer }) => {
  const [openFleshCard, setOpenFleshCard] = useState(true);
  const [openQuestionFleshCard, setQuestionFleshCard] = useState(false);
  const [openAnswerFleshCard, setOpenAnswerFleshCard] = useState(false);

  const openQuestion = () => {
    setOpenAnswerFleshCard(false);
    setOpenFleshCard(false);
    setQuestionFleshCard(true);
  };

  const openAnswer = () => {
    setOpenFleshCard(false);
    setQuestionFleshCard(false);
    setOpenAnswerFleshCard(true);
  };

  return (
    <>
      {openFleshCard && <FleshCard id={id} openQuestion={openQuestion} />}

      {openQuestionFleshCard && (
        <QuestionFleshCard question={question} openAnswer={openAnswer} />
      )}

      {openAnswerFleshCard && <AnswerFleshCard answer={answer} />}
    </>
  );
};
