import { createContext, useState } from "react";

export const QuizContext = createContext();

export function QuizContextProvider({ children }) {
  const [quizTopicsIds, setQuizTopicsIds] = useState([]);

  async function getTopics(pageNum) {
    const response = await fetch(
      `https://localhost:7094/api/topics/?pageNumber=${pageNum}&pageSize=5`
    );

    return response.json();
  }

  async function getQuiz() {
    const response = await fetch("https://localhost:7094/api/quizes/get_quiz", {
      method: "POST",
      body: JSON.stringify({
        topicsIds: quizTopicsIds,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const quiz = await response.json();

    setQuizTopicsIds([])

    return quiz;
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
