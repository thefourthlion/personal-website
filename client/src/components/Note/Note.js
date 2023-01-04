import React, { useState } from "react";
import "./Note.css";
const Note = ({ header, entry, timestamp }) => {
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="Note">
      <div className="container">
        <h1>
          {showNote == true ? (
            <span>{header}</span>
          ) : (
            <span>{header.substring(0, 9)}</span>
          )}
        </h1>
        {showNote == true && <p>{entry}</p>}
        <p>{timestamp}</p>
        <p
          className="hide-entry-btn"
          onClick={() => {
            setShowNote(!showNote);
          }}
        >
          {showNote == false ? (
            <span>Show Note 📩</span>
          ) : (
            <span>Hide Note 📩</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Note;
