import React from "react";
import "./ImproveForm.css";
import ButtonForm from "../../components/ButtonForm/ButtonForm";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const ImproveForm = () => {
  return (
    <div className="ImproveForm">
      <h1>Enter An Improvement</h1>

      <ButtonForm
        option0="Pick A Number!"
        option1="0-1"
        option2="2-3"
        option3="4-5"
        option4="6-7"
        option5="8-9"
      />

      <div className="container">
        <FloatingLabel className="form-label" label="What Are You Doing?">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="What Are You Doing?"
            autoComplete="true"
          />
        </FloatingLabel>

        <FloatingLabel
          className="form-label"
          label="Type Of Task? (biology, environment, systems, mentality)"
        >
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Type Of Task? (biology, environment, systems, mentality)"
            autoComplete="true"
          />
        </FloatingLabel>

        <FloatingLabel className="form-label" label="How Long Will It Take?">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="How Long Will It Take?"
            autoComplete="true"
          />
        </FloatingLabel>

        <FloatingLabel
          className="form-label"
          label="How Many Attempts To Benefit?(1-10) "
        >
          <Form.Control
            className="form-input"
            type="text"
            placeholder="How Many Attempts To Benefit?(1-10)"
            autoComplete="true"
          />
        </FloatingLabel>

        <FloatingLabel className="form-label" label="Benefit Rating?(1-10)">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Benefit Rating?(1-10)"
            autoComplete="true"
          />
        </FloatingLabel>

        <FloatingLabel
          className="form-label"
          label="Longevity Of Benefits?(1-10)"
        >
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Longevity Of Benefits?(1-10)"
            autoComplete="true"
          />
        </FloatingLabel>

        <FloatingLabel
          className="form-label"
          label="Positive Impact On Others?(1-10)"
        >
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Positive Impact On Others?(1-10)"
            autoComplete="true"
          />
        </FloatingLabel>

        <FloatingLabel className="form-label" label="Total Improvement Score">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Total Improvement Score"
            autoComplete="true"
          />
        </FloatingLabel>
      </div>
    </div>
  );
};

export default ImproveForm;
