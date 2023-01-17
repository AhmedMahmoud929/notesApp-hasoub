import React from "react";
import { useContext } from "react";
import { notesContext } from "../context/NotesContext";
import Message from "./Message";
import ViewNote from "./ViewNote";

function getPreview() {
  const { allNotes, activeNote } = useContext(notesContext);
  if (!allNotes.length) return <Message content="من فضلك أضف ملاحظة جديدة" />;
  if (!activeNote) return <Message content="من فضلك إختر ملاحظة" />;
  else return <ViewNote />;
}

export default getPreview;
