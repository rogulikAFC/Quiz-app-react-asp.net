import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useReducer,
  useState,
} from "react";
import { AnswerButton } from "./AnswerButton/AnswerButton";

export function QuestionAnswersInner(
  { quizObj, currentQuestion, onAnswer, currentQuestionId },
  ref
) {
  const [correctAnswers, setCorrectAnswers] = useState(() => {
    let initCorrectAnswers = [];

    for (let { id, correctAnswerId } of quizObj) {
      initCorrectAnswers = [
        ...initCorrectAnswers,
        { questionId: id, answerId: correctAnswerId },
      ];
    }

    return initCorrectAnswers;
  });

  const [userAnswers, setUserAnswers] = useState(() => {
    let initUserAnswers = [];

    for (let { id } of quizObj) {
      initUserAnswers = [
        ...initUserAnswers,
        { questionId: id, answerId: false },
      ]; // answer id false means that question is not answered yet
    }

    return initUserAnswers;
  });

  let currentQuestionAnswers = [];

  for (let { id, text } of currentQuestion.answers) {
    currentQuestionAnswers = [
      ...currentQuestionAnswers,
      { id: id, text: text },
    ];
  }

  let answerButtons = [];

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let [i, { text, id }] of currentQuestionAnswers.entries()) {
    const isActive = id === getActiveAnswerId();

    answerButtons = [
      ...answerButtons,
      <AnswerButton
        key={id}
        setAnswer={setAnswer}
        onAnswer={onAnswer}
        litera={alphabet[i]}
        isActive={isActive}
        answerId={id}
      >
        {text}
      </AnswerButton>,
    ];
  }

  function setAnswer(answerId) {
    [console.log({ currentQuestion, answerId })];

    setUserAnswers((oldAnswers) => {
      let currentQuestionWithAnswers = oldAnswers.find(
        (question) => question.questionId === currentQuestion.id
      );

      currentQuestionWithAnswers.answerId = answerId;

      return oldAnswers;
    });
  }

  function getActiveAnswerId() {
    let currentQuestionActiveAnswer = userAnswers.find(
      (question) => currentQuestion.id === question.questionId
    );

    return currentQuestionActiveAnswer.answerId;
  }

  function validateAnswers() {
    let validatedAnswers = [];

    for (let userAnswer of userAnswers) {
      let correctAnswer = correctAnswers.find(
        (answer) => answer.questionId === userAnswer.questionId
      );

      const isValid = correctAnswer?.answerId === userAnswer.answerId;

      validatedAnswers = [
        ...validatedAnswers,
        { questionId: userAnswer.questionId, isValid: isValid },
      ];
    }

    return validatedAnswers;
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        validateAnswers: validateAnswers,
      };
    },
    []
  );

  return (
    <div className="quiz__question-answers" onClick={onAnswer}>
      {answerButtons}
    </div>
  );
}

export const QuestionAnswers = forwardRef(QuestionAnswersInner);
