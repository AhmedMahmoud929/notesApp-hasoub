import React from "react";
import { useContext } from "react";
import { notesContext } from "../context/NotesContext";

function ViewNote() {
  const { activeNote, deleteNote, editNoteHandler } = useContext(notesContext);
  return (
    <div>
      <div className="note-operations">
        <a href="#" onClick={editNoteHandler}>
          <i className="fa fa-pencil-alt" />
        </a>
        <a href="#" onClick={deleteNote}>
          <i className="fa fa-trash" />
        </a>
      </div>
      <div>
        <h2>{activeNote.title}</h2>
        <p>{activeNote.content}</p>
      </div>
    </div>
  );
}

export default ViewNote;
