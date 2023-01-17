import React, { useContext } from "react";
import { notesContext } from "../context/NotesContext";

function getAddNote() {
  const {
    title,
    setTitle,
    content,
    setContent,
    saveNewNote,
    saveUpdatedNote,
    editMode,
  } = useContext(notesContext);
  return (
    <div>
      <h2>{editMode ? "تعديل الملاحظة" : "إضافة ملاحظة جديدة"}</h2>
      <div>
        <input
          type="text"
          name="title"
          className="form-input mb-30"
          placeholder="العنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="10"
          name="content"
          className="form-input"
          placeholder="النص"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <a
          href="#"
          className="button green"
          onClick={editMode ? saveUpdatedNote : saveNewNote}
        >
          {editMode ? "تعديل" : "حفظ"}
        </a>
      </div>
    </div>
  );
}

export default getAddNote;
