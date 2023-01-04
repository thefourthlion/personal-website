import React from "react";
import "./Book.css";
const Book = ({ title, author, bookFinished, bookCover }) => {
  return (
    <div className="Book">
      <div className="container">
        <img src={bookCover} alt={`cover-for-${title}-by-${author}`} />
        <h1>{title}</h1>
        <h2>by {author}</h2>
        <p>{bookFinished}</p>
      </div>
    </div>
  );
};

export default Book;
