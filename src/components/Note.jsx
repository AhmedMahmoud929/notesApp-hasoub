import React from "react";
import { useContext } from "react";
import { notesContext } from "../context/NotesContext";

const Note = ({ note, noteHandler }) => {
  const { activeNote } = useContext(notesContext);
  return (
    <li
      className={`note-item ${
        activeNote && activeNote.id == note.id ? "active" : ""
      }`}
      onClick={() => noteHandler(note)}
    >
      {note.title}
    </li>
  );
};

export default Note;
