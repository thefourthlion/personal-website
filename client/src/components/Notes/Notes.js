import React, { useEffect, useState } from "react";
import "./Notes.css";
import Note from "../Note/Note";
import Axios from "axios";
const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNote();
  }, []);

  const getNote = () => {
    Axios.get("https://api.everettdeleon.com/api/journal/read").then((res) => {
      const data = res.data;
      setNotes(data);
      console.log(data);
    });
  };

  const deleteEntry = (id) => {
    Axios.get(`https://api.everettdeleon.com/api/journal/delete/${id}`).then(
      (res) => {
        const data = res.data;
        setNotes(data);
        console.log(data);
      }
    );
  };

  return (
    <div className="Notes">
      <div className="container">
        {notes.map((val, key) => {
          return (
            <div>
              <Note
                id={key}
                header={val.header}
                entry={val.entry}
                timestamp={val.timestamp}
              />

              <button
                onClick={() => {
                  deleteEntry(val._id);
                }}
                className="red-outline-btn"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
