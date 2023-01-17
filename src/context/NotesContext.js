import React, { createContext, useEffect, useState } from "react";

const notesContext = createContext();

function NotesContainer(props) {
  /* => STATES <= */
  const [allNotes, setAllNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createMode, setCreateMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [activeNote, setActiveNote] = useState(null);
  const [errors, setErrors] = useState([]);

  /* => FUNCTIONS <= */
  // Get the notes from the local storage
  const getNotesFromLS = () => {
    const LSNotes = JSON.parse(localStorage.getItem("NOTES"));
    if (LSNotes) setAllNotes([...LSNotes]);
  };
  // Updated notes in the local storage
  const updateNotesInLS = (notes) => {
    localStorage.setItem("NOTES", JSON.stringify(notes));
  };
  // Open add screen
  const addNoteHandler = () => {
    setTitle("");
    setContent("");
    setActiveNote(null);
    setCreateMode(true);
  };
  // Add new note to the array
  const saveNewNote = () => {
    if (isValidInputs()) {
      const newNote = {
        title: title,
        content: content,
        id: new Date(),
      };
      setAllNotes([...allNotes, newNote]);
      updateNotesInLS([...allNotes, newNote]);
      setTitle("");
      setContent("");
      setActiveNote(newNote);
      setCreateMode(false);
    } else console.log("Not valid");
  };
  // View the note
  const noteHandler = (note = {}) => {
    setActiveNote(note);
    setIsAddMode(false);
  };
  // Delete note from the array
  const deleteNote = () => {
    const updatedNotes = [...allNotes];
    const noteIndex = allNotes.findIndex((el) => el.id == activeNote.id);
    updatedNotes.splice(noteIndex, 1);
    setAllNotes(updatedNotes);
    updateNotesInLS(updatedNotes);
    setTitle("");
    setContent("");
    setActiveNote(null);
    setCreateMode(false);
  };
  // Open edit screen
  const editNoteHandler = () => {
    setTitle(activeNote.title);
    setContent(activeNote.content);
    setCreateMode(true);
    setEditMode(true);
  };
  // Save the note that updated
  const saveUpdatedNote = () => {
    if (isValidInputs()) {
      const updatedNotes = [...allNotes];
      const noteIndex = allNotes.findIndex((note) => note.id === activeNote.id);
      updatedNotes[noteIndex] = {
        id: activeNote.id,
        title: title,
        content: content,
      };
      setActiveNote(updatedNotes[noteIndex]);
      setAllNotes(updatedNotes);
      updateNotesInLS(updatedNotes);
      setCreateMode(false);
      setEditMode(false);
    }
  };
  // Validate inputs
  const isValidInputs = () => {
    let errorsArr = [];
    if (title == "") errorsArr.push("برجاء إدخال عنوان الملاحظة");
    if (content == "") errorsArr.push("برجاء إدخال عنوان الملاحظة");
    setErrors(errorsArr);
    return errorsArr.length == 0;
  };

  // => EFFECTS <=
  // Get the notes from the local storage
  useEffect(() => {
    getNotesFromLS();
  }, []);
  // Remove alert after 1 second
  useEffect(() => {
    setTimeout(() => setErrors([]), 3000);
  }, [errors]);

  return (
    <notesContext.Provider
      value={{
        createMode,
        addNoteHandler,
        title,
        setTitle,
        content,
        setContent,
        allNotes,
        saveNewNote,
        activeNote,
        noteHandler,
        deleteNote,
        editMode,
        editNoteHandler,
        errors,
        saveUpdatedNote,
      }}
    >
      {props.children}
    </notesContext.Provider>
  );
}

export { NotesContainer, notesContext };
