import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

function createNote(note){
  return (
    <Note 
      key = {note.key}
      title = {note.title}
      content = {note.content}
    />
  );
}
export default createNote;
