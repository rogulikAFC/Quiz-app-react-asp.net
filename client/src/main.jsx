import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.css";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import { QuizContextProvider } from "./contexts/QuizContext.jsx";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <QuizContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </QuizContextProvider>
      </CookiesProvider>
    </BrowserRouter>
  // </React.StrictMode>
);
