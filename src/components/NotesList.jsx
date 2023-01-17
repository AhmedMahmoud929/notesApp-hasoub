import React, { useContext } from "react";
import { notesContext } from "../context/NotesContext";
import Note from "./Note";

function NotesList() {
  const { allNotes, addNoteHandler, noteHandler } = useContext(notesContext);
  return (
    <div className="notes-section">
      <ul className="notes-list">
        {allNotes &&
          allNotes.map((el) => (
            <Note key={el.id} note={el} noteHandler={noteHandler} />
          ))}
      </ul>
      <button className="add-btn" onClick={addNoteHandler}>
        +
      </button>
    </div>
  );
}

export default NotesList;
