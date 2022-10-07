import "./contact.css";
import React, { useRef } from "react";

import emailjs from "emailjs-com";
export default function Contact() {
  const form = useRef();
  // e.preventDefault();

  function sendEmail(e) {
    e.preventDefault();
    let name = document.querySelector(".input-name").value;
    let email = document.querySelector(".input-email").value;
    let message = document.querySelector(".input-message").value;
    if (name === "" || email === "" || message === "") {
      document.querySelector(".empty-form").innerHTML =
        "You must fill out the entire form.";
    } else {
      if (email.includes("@") && email.includes(".")) {
        document.querySelector(".contact-btn").style.display = "none";
        document.querySelector(".message-submitted").innerHTML =
          "I just received your message and will get back to you as soon as i can.";
        emailjs
          .sendForm(
            "service_cx595vr",
            "template_4357a1r",
            form.current,
            "oYjwVLvs6iGkGWbAi"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      } else {
        document.querySelector(".empty-form").innerHTML =
          "Make sure you entered a valid email.";
      }
    }
  }
  return (
    <div className="Contact" id="Contact">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-top">
          <h1 className="form-label">Name</h1>

          <input
            className="form-text-input input-name"
            type="text"
            name="name"
            placeholder="Name"
          />

          <h1 className="form-label email">Email</h1>
          <input
            className="form-text-input input-email"
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <h1 className="message form-label">Message</h1>

        <textarea
          className="input-message"
          type="text"
          name="message"
          placeholder="Message..."
        />
        <p className="empty-form red"></p>

        <p className="message-submitted"></p>
        <button className="cybr-btn contact-btn" type="submit" value="Submit">
          Submit_
          <span aria-hidden id="glitch" className="cybr-btn__glitch">
            Sub_mit
          </span>
          <span aria-hidden id="tag" className="cybr-btn__tag">
            ED5
          </span>
        </button>
      </form>
    </div>
  );
}
