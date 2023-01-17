import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { NotesContainer } from "./context/NotesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NotesContainer>
    <App />
  </NotesContainer>
);
