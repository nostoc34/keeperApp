import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [notes, setNotes] = useState([]);

  const [isZoomed, setIsZoomed] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote() {
    props.onAdd(note);
    setNote({ title: "", content: "" });
  }

  function expand() {
    setIsZoomed(true);
  }

  return (
    <div>
      <div className="form">
        {isZoomed && <input
          onChange={handleChange}
          name="title"
          placeholder="Başlık"
          value={note.title}
        />}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Notunuz..."
          rows={isZoomed ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isZoomed}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </div>
    </div>
  );
}

export default CreateArea;
