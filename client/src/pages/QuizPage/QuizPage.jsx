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
import { useNavigate } from "react-router-dom";

export function QuizPage() {
  const { getQuiz } = useContext(QuizContext);

  const [hasQuiz, setHasQuiz] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [maxQuestionIndex, setMaxQuestionIndex] = useState();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const [quizTimeInSeconds, setQuizTimeInSeconds] = useState(1000);
  const [isCounting, setIsCounting] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getQuizData() {
      if (hasQuiz) {
        return;
      }

      const quizData = await getQuiz();

      console.log({ quizData });

      setQuiz(quizData);
      setHasQuiz(true);
    }

    getQuizData();
  }, []);

  useEffect(() => setMaxQuestionIndex(quiz.length), [quiz]);

  useEffect(() => {
    if (!hasQuiz) {
      return;
    }

    setQuizTimeInSeconds(
      quiz
        .map((question) => question.timeInSeconds)
        .reduce((accumulator, time) => accumulator + time, 0)
    );

    setIsLoading(false);
  }, [quiz]);

  useEffect(() => {
    setCurrentQuestion(quiz[currentQuestionIndex - 1]);
  }, [currentQuestionIndex, quiz]);

  const [resultModal, setResultModal] = useState("");
  const modalRef = useRef();

  const secondsToMinutesAndSeconds = (s) =>
    (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;

  const progressBarRef = useRef();

  function onAnswer() {
    let index =
      progressBarRef.current.getNextNotActiveQuestionIndex(
        currentQuestionIndex
      );

    progressBarRef.current.setActive(currentQuestionIndex);

    if (!index) {
      increaseQuestionIndex();

      return;
    }

    setCurrentQuestionIndex(index);
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

      if (quiz.length !== 0) {
        openResultModal();
      }
    }

    return () => clearInterval(interval);
  }, [quizTimeInSeconds, isCounting]);

  const answersRef = useRef();

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : quiz.length === 0 ? (
        <>
          <p
            style={{
              fontFamily: "Roboto",
              marginBottom: "40px",
              fontSize: "30px",
              fontWeight: "500",
            }}
          >
            Ooops... Something went wrong.
          </p>
          <CustomButton color="gray" shadows onClick={() => navigate("/")}>
            Back
          </CustomButton>
        </>
      ) : (
        <>
          <div className="quiz container_main__quiz">
            <ProgressBar
              indexCount={quiz.length}
              setQuestionIndex={setCurrentQuestionIndex}
              ref={progressBarRef}
            />
            <div className="quiz__question-text">
              {currentQuestionIndex}. {currentQuestion.questionText}
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
      )}
    </>
  );
}
