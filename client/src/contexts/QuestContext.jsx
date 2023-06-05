import { createContext, useState } from "react";

export const QuestContext = createContext();

export function QuestContextProvider({ children }) {
  let [questTopicsIds, setQuestTopicsIds] = useState([]);
  let [quest, setQuest] = useState()

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

  function getQuest() {
    setQuest(null)

    const questData = [
      {
        id: "uuid-12-4",
        question:
          "An interface design application that runs in the browser with team-based collaborative design projects",
        answers: [
          { id: "uuid-question-123-5324", title: "figma" },
          { id: "uuid-question-143123-t5234", title: "adobe xd" },
          { id: "uuid-question-qw43123adsf4", title: "invision" },
          { id: "uuid-question-123-a4", title: "sketch" },
        ],
        correctAnswerId: "uuid-question-123-5324",
      },
      {
        id: "uuid-13-4",
        question:
          "An interface design application that runs in the browser with team-based collaborative design projects",
        answers: [
          { id: "uuid-question-123-5324", title: "figma" },
          { id: "uuid-question-143123-t5234", title: "adobe xd" },
          { id: "uuid-question-qw43123adsf4", title: "invision" },
          { id: "uuid-question-123-a4", title: "sketch" },
        ],
        correctAnswerId: "uuid-question-123-5324",
      },
      {
        id: "uuid-8687",
        question:
          "An interface design application that runs in the browser with team-based collaborative design projects",
        answers: [
          { id: "uuid-question-123-5324", title: "figma" },
          { id: "uuid-question-143123-t5234", title: "adobe xd" },
          { id: "uuid-question-qw43123adsf4", title: "invision" },
          { id: "uuid-question-123-a4", title: "sketch" },
        ],
        correctAnswerId: "uuid-question-123-5324",
      },
      {
        id: "uuid-26734981283",
        question:
          "An interface design application that runs in the browser with team-based collaborative design projects",
        answers: [
          { id: "uuid-question-123-5324", title: "figma" },
          { id: "uuid-question-143123-t5234", title: "adobe xd" },
          { id: "uuid-question-qw43123adsf4", title: "invision" },
          { id: "uuid-question-123-a4", title: "sketch" },
        ],
        correctAnswerId: "uuid-question-123-5324",
      },
      {
        id: "uuid-o7234-1283756-9",
        question:
          "An interface design application that runs in the browser with team-based collaborative design projects",
        answers: [
          { id: "uuid-question-123-5324", title: "figma" },
          { id: "uuid-question-143123-t5234", title: "adobe xd" },
          { id: "uuid-question-qw43123adsf4", title: "invision" },
          { id: "uuid-question-123-a4", title: "sketch" },
        ],
        correctAnswerId: "uuid-question-123-5324",
      },
    ];

    setQuest(questData)
  }

  const contextValue = {
    getTopics,
    setQuestTopicsIds,
    getQuest,
    quest
  };

  return (
    <QuestContext.Provider value={contextValue}>
      {children}
    </QuestContext.Provider>
  );
}
