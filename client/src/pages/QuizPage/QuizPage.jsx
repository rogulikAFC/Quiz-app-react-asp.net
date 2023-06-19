import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { QuizContext } from "../../contexts/QuizContext";
import CustomButton from "../../CustomButton/CustomButton";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import "./QuizPage.css";
import { QuestionAnswers } from "./QuestionAnswers/QuestionAnswers";
import { ResultModal } from "./ResultModal/ResultModal";
import blackArrow from "../../assets/arrow-black.svg";
import whiteArrow from "../../assets/arrow-white.svg";
import clockImg from "../../assets/clock.svg";

export function QuizPage() {
  const { getQuiz } = useContext(QuizContext);

  let [hasQuiz, setHasQuiz] = useState(false);

  let [quiz, setQuiz] = useState(() => {
    if (!hasQuiz) {
      return getQuiz();
    }

    return quiz;
  });

  let maxQuestionIndex = quiz.length;

  const [resultModal, setResultModal] = useState("");
  const modalRef = useRef();

  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);

  let [currentQuestion, setCurrentQuestion] = useState(
    quiz[currentQuestionIndex - 1]
  );

  const secondsToMinutesAndSeconds = (s) =>
    (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;

  const [quizTimeInSeconds, setQuizTimeInSeconds] = useState(() => {
    return quiz
      .map((question) => question.timeInSeconds)
      .reduce((accumulator, time) => accumulator + time, 0);
  });

  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    setCurrentQuestion(quiz[currentQuestionIndex - 1]);
  }, [currentQuestionIndex]);

  const progressBarRef = useRef();

  function onAnswer() {
    // increaseQuestionIndex();
    setCurrentQuestionIndex(
      progressBarRef.current.getNextNotActiveQuestionIndex(currentQuestionIndex)
    );

    progressBarRef.current.setActive(currentQuestionIndex);
  }

  function increaseQuestionIndex() {
    if (currentQuestionIndex === maxQuestionIndex) {
      openResultModal();

      return;
    }

    setCurrentQuestionIndex((i) => ++i);
  }

  function decreaseQuestionIndex() {
    if (currentQuestionIndex === 1) {
      return;
    }

    setCurrentQuestionIndex((i) => --i);
  }

  function openResultModal() {
    let validatedAnswers = answersRef.current.validateAnswers();

    console.log(validatedAnswers);

    const score = validatedAnswers.reduce((accumulator, answer) => {
      if (answer.isValid) {
        accumulator++;
      }

      return accumulator;
    }, 0);

    setIsCounting(false);

    setResultModal(<ResultModal modalRef={modalRef} score={score} />);
  }

  useEffect(() => {
    let interval;

    if (quizTimeInSeconds > 0 && isCounting) {
      interval = setInterval(() => {
        setQuizTimeInSeconds((oldTime) => --oldTime);
      }, 1000);
    } else {
      clearInterval(interval);

      openResultModal();
    }

    return () => clearInterval(interval);
  }, [quizTimeInSeconds, isCounting]);

  const answersRef = useRef();

  return (
    <>
      <div className="quiz container_main__quiz">
        <ProgressBar indexCount={quiz.length} setQuestionIndex={setCurrentQuestionIndex} ref={progressBarRef} />
        <div className="quiz__question-text">
          {currentQuestionIndex}. {currentQuestion.question}
        </div>
        <QuestionAnswers
          quizObj={quiz}
          currentQuestion={currentQuestion}
          onAnswer={onAnswer}
          currentQuestionId={currentQuestion.id}
          ref={answersRef}
        />
        <div className="quiz-interact quiz__quiz-interact">
          <CustomButton
            blockName="quiz-interact"
            color="gray"
            shadows
            onClick={decreaseQuestionIndex}
          >
            <img
              src={blackArrow}
              alt=""
              className="button__arrow button__arrow_black"
            />
            Previous
          </CustomButton>

          <figure className="timer quiz-interact__timer">
            <img src={clockImg} alt="" className="timer__image" />
            <figcaption className="timer__time">
              {secondsToMinutesAndSeconds(quizTimeInSeconds)}
            </figcaption>
          </figure>

          <CustomButton
            blockName="quiz-interact"
            color="red"
            shadows
            onClick={increaseQuestionIndex}
          >
            Next
            <img
              src={whiteArrow}
              alt=""
              className="button__arrow button__arrow_white"
            />
          </CustomButton>
        </div>
      </div>

      {resultModal}

      <style>
        {`
          .container_main {
            justify-content: start;
          }
        `}
      </style>
    </>
  );
}
