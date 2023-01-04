import React from "react";
import "./Book.css";
const Book = ({ title, author, bookFinished, bookCover }) => {
  return (
    <div className="Book">
      <div className="container" id={title}>
        <a href={`https://www.google.com/search?q=${title} by ${author} book`}>
          <img src={bookCover} alt={`cover-for-${title}-by-${author}`} />
        </a>
        <h1 className="title">{title}</h1>
        <h2 className="author">by {author}</h2>
        <p className="book-finished">{bookFinished}</p>
      </div>
    </div>
  );
};

export default Book;
