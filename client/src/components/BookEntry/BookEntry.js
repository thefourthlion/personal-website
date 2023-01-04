import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import "./BookEntry.css";
const BookEntry = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookCover, setBookCover] = useState("");
  const [dateFinished, setDateFinished] = useState("");

  function refreshPage() {
    window.location.reload(false);
  }

  const sendForm = () => {
    Axios.post("https://api.everettdeleon.com/api/library/create", {
      title: title,
      author: author,
      bookCover: bookCover,
      dateFinished: dateFinished,
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
    <div className="BookEntry">
      <div className="container">
        <h1 className="content-header">Library Entry</h1>
        <FloatingLabel className="form-label" label="Book Title">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Book Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </FloatingLabel>

        <FloatingLabel className="form-label" label="Book Author">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Book Author"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </FloatingLabel>

        <FloatingLabel className="form-label" label="Date Book Finished">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Date Book Finished"
            value={date}
            onChange={(e) => {
              setDateFinished(e.target.value);
            }}
          />
        </FloatingLabel>

        <FloatingLabel className="form-label" label="Book Cover Link">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Book Cover Link"
            onChange={(e) => {
              setBookCover(e.target.value);
            }}
          />
        </FloatingLabel>

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

export default BookEntry;
