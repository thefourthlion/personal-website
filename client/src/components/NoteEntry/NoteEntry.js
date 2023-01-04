import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import "./NoteEntry.css";
const NoteEntry = () => {
  const [header, setHeader] = useState("");
  const [entry, setEntry] = useState("");

  function refreshPage() {
    window.location.reload(false);
  }

  const sendForm = () => {
    Axios.post("http://localhost:3001/api/journal/create", {
      header: header,
      entry: entry,
      timestamp: date,
    }).then(() => {
      refreshPage();
    });
  };

  const date = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <div className="NoteEntry">
      <div className="container">
        <h1 className="content-header">Journal Entry</h1>
        <FloatingLabel className="form-label" label="Journal Header">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Journal Header"
            onChange={(e) => {
              setHeader(e.target.value);
            }}
          />
        </FloatingLabel>

        <textarea
          className="input-message"
          type="text"
          name="message"
          placeholder="Journal Entry"
          onChange={(e) => {
            setEntry(e.target.value);
          }}
        />

        <button
          className="green-outline-btn"
          onClick={() => {
            sendForm();
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default NoteEntry;
