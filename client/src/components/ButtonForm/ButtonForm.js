import React from "react";
import "./ButtonForm.css";
const ButtonForm = ({
  option0,
  option1,
  option2,
  option3,
  option4,
  option5,
}) => {
  return (
    <div className="ButtonForm">
      <form>
        <h2>{option0}</h2>
        <div className="buttons">
          <button>{option1}</button>
          <button>{option2}</button>
          <button>{option3}</button>
          <button>{option4}</button>
          <button>{option5}</button>
        </div>
      </form>
    </div>
  );
};

export default ButtonForm;
