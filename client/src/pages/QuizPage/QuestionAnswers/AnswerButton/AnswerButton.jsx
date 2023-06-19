import "./AnswerButton.css";

export function AnswerButton({
  answerId,
  litera,
  children,
  setAnswer,
  isActive,
}) {
  return (
    <button
      className={`answer-button quiz-interact__answer-button${
        isActive ? " answer-button_active" : " answer-button_not-active"
      }`}
      onClick={() => setAnswer(answerId)}
    >
      <div className="answer-button__litera">{litera}</div>
      <div className="answer-button__text">{children}</div>
    </button>
  );
}