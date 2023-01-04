import React from "react";
import BookEntry from "../../components/BookEntry/BookEntry";
import Books from "../../components/Books/Books";
import "./Library.css";
const Library = () => {
  return (
    <div className="Library">
      <div className="container">
        <BookEntry />
        <Books />
      </div>
    </div>
  );
};

export default Library;
