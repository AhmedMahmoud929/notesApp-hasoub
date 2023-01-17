import { useContext, useState } from "react";
import "./App.css";
import Add from "./components/Add.jsx";
import Alert from "./components/Alert";
import Note from "./components/Note";
import NotesList from "./components/NotesList";
import Preview from "./components/Preview.jsx";
import { notesContext } from "./context/NotesContext";

function App() {
  const { allNotes, createMode, addNoteHandler, noteHandler, errors } =
    useContext(notesContext);
  return (
    <div className="App">
      <Alert />
      <NotesList />
      <div className="preview-section">
        {createMode ? <Add /> : <Preview />}
      </div>
    </div>
  );
}

export default App;
