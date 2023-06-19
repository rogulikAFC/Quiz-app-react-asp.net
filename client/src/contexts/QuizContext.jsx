import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const QuizContext = createContext();

export function QuizContextProvider({ children }) {
  const [quizTopicsIds, setQuizTopicsIds] = useState([]);

  function getTopics() {
    return [
      { id: "uuid-10-151", title: "Music" },
      { id: "uuid-791-233", title: "Computer Science" },
      { id: 1, title: "TopBadge1" },
      { id: 2, title: "TopBadge2" },
      { id: 3, title: "TopBadge3" },
      { id: 4, title: "TopBadge4" },
      { id: 5, title: "TopBadge5" },
      { id: 6, title: "TopBadge6" },
      { id: 7, title: "TopBadge7" },
    ];
  }

  function getQuiz() {
    const quizData = [
      {
        id: "uuid-12-4",
        question:
          "An interface design application that runs in the browser with team-based collaborative design projects 1",
        answers: [
          { id: "uuid-quizion-123-5324-1", text: "pizza" },
          { id: "uuid-quizion-143123-t5234", text: "lorem" },
          { id: "uuid-quizion-qw43123adsf4", text: "ipsum" },
          { id: "uuid-quizion-123-a4", text: "dorem" },
        ],
        correctAnswerId: "uuid-quizion-123-5324-1",
        timeInSeconds: 20,
      },
      {
        id: "uuid-13-4",
        question:
          "An interface design application that runs in the browser with team-based collaborative design projects 2",
        answers: [
          { id: "uuid-quizion-123-5324-2", text: "sit" },
          { id: "uuid-quizion-143123-t5234", text: "amet" },
          { id: "uuid-quizion-qw43123adsf4", text: "necessary" },
          { id: "uuid-quizion-123-a4", text: "Maecenas" },
        ],
        correctAnswerId: "uuid-quizion-123-5324-2",
        timeInSeconds: 20,
      },
      {
        id: "uuid-8687",
        question:
          "An interface design application that runs in the browser with team-based collaborative design projects 3",
        answers: [
          { id: "uuid-quizion-123-5324-3", text: "tellus" },
          { id: "uuid-quizion-143123-t5234", text: "quis" },
          { id: "uuid-quizion-qw43123adsf4", text: "invision" },
          { id: "uuid-quizion-123-a4", text: "fringilla" },
        ],
        correctAnswerId: "uuid-quizion-123-5324-3",
        timeInSeconds: 20,
      },
      {
        id: "uuid-26734981283",
        question:
          "An interface design application that runs in the browser with team-based collaborative design projects 4",
        answers: [
          { id: "uuid-quizion-123-5324-4", text: "figma" },
          { id: "uuid-quizion-143123-t5234", text: "adobe xd" },
          { id: "uuid-quizion-qw43123adsf4", text: "invision" },
          { id: "uuid-quizion-123-a4", text: "sketch" },
        ],
        correctAnswerId: "uuid-quizion-123-5324-4",
        timeInSeconds: 20,
      },
      {
        id: "uuid-o7234-1283756-9",
        question:
          "An interface design application that runs in the browser with team-based collaborative design projects 5",
        answers: [
          { id: "uuid-quizion-123-5324-5", text: "figma" },
          { id: "uuid-quizion-143123-t5234", text: "adobe xd" },
          { id: "uuid-quizion-qw43123adsf4", text: "invision" },
          { id: "uuid-quizion-123-a4", text: "sketch" },
        ],
        correctAnswerId: "uuid-quizion-123-5324-5",
        timeInSeconds: 20,
      },
      {
        id: "uuid-adsasdfsdfa",
        question:
          "An interface design application that runs in the browser with team-based collaborative design projects 6",
        answers: [
          { id: "uuid-quizion-asdfasdf-5324-6", text: "figma" },
          { id: "uuid-quizion-143123-oidasfoisadgfkJL", text: "adobe xd" },
          { id: "uuid-quizion-DSAFJKAHSDKFH", text: "invision" },
          { id: "uuid-quizion-adsfasdfg-a5", text: "sketch" },
        ],
        correctAnswerId: "uuid-quizion-asdfasdf-5324-6",
        timeInSeconds: 20,
      },
    ];

    return quizData;
  }

  const contextValue = {
    getTopics,
    setQuizTopicsIds,
    getQuiz,
  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
}
