import "./HoverInput.css";
import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const HoverInput = ({ InputType, InputLabel, InputPlaceholder }) => {
  return (
    <div className="HoverInput">
      <FloatingLabel className="form-label" label={InputType}>
        <Form.Control
          className="form-input"
          type={InputLabel}
          placeholder={InputPlaceholder}
          autoComplete="true"
        />
      </FloatingLabel>
    </div>
  );
};

export default HoverInput;
