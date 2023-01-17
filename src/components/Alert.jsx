import React, { useContext } from "react";
import { notesContext } from "../context/NotesContext";

function Alert() {
  const { errors } = useContext(notesContext);
  if (errors.length) {
    return (
      <div className="alert-container">
        <ul>
          {errors.map((err, ix) => (
            <li key={ix}>{err}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Alert;
