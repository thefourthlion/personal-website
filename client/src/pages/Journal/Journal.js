import React from "react";
import "./Journal.css";
import NoteEntry from "../../components/NoteEntry/NoteEntry";
import Notes from "../../components/Notes/Notes";
const Journal = () => {
  return (
    <div className="Journal">
      <div className="container">
        <NoteEntry />
        <Notes />
      </div>
    </div>
  );
};

export default Journal;
