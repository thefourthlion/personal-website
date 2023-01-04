import React from "react";
import "./Book.css";
const Book = ({ title, author, bookFinished, bookCover }) => {
  return (
    <div className="Book">
      <div className="container" id={title}>
        <a href={`https://www.google.com/search?q=${title} by ${author} book`}>
          <img src={bookCover} alt={`cover-for-${title}-by-${author}`} />
        </a>
        <h1>{title}</h1>
        <h2>by {author}</h2>
        <p>{bookFinished}</p>
      </div>
    </div>
  );
};

export default Book;
