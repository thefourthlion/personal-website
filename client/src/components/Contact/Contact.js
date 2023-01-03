import "./contact.css";
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Axios from "axios";
export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitResponse, setSubmitResponse] = useState("");

  const date = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  function refreshPage() {
    window.location.reload(false);
  }

  const sendForm = () => {
    Axios.post("http://localhost:3001/api/contact/create", {
      name: name,
      email: email,
      message: message,
      timestamp: date,
    }).then(() => {
      refreshPage();
    });
  };

  return (
    <div className="Contact" id="Contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <hr />
        <div className="form-top">
          <h1>Name</h1>

          <FloatingLabel className="form-label" label="Name">
            <Form.Control
              className="form-input"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FloatingLabel>

          <h1>Email</h1>

          <FloatingLabel className="form-label" label="Email">
            <Form.Control
              className="form-input"
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FloatingLabel>
        </div>
        <h1>Message</h1>

        <textarea
          className="input-message"
          type="text"
          name="message"
          placeholder="Message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <p className="empty-form red"></p>

        <p className="message-submitted">{submitResponse}</p>
        <div className="cyber-btn-container">
          <button
            className="cybr-btn"
            onClick={() => {
              sendForm();
            }}
          >
            Send_Message_
            <span aria-hidden id="glitch" className="cybr-btn__glitch">
              Send_Message_
            </span>
            <span aria-hidden id="tag" className="cybr-btn__tag">
              ED5
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
