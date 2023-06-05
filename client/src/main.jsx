import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.css";
import "./main.css";
import { BrowserRouter } from "react-router-dom";

import { UserContextProvider } from "./contexts/UserContext";
import { QuestContextProvider } from "./contexts/QuestContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </QuestContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
