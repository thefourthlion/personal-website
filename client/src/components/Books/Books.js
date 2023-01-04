import React, { useEffect, useState } from "react";
import "./Books.css";
import Book from "../Book/Book";
import Axios from "axios";
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBook();
  }, []);

  const getBook = () => {
    Axios.get("http://localhost:3001/api/library/read").then((res) => {
      const data = res.data;
      setBooks(data);
      console.log(data);
    });
  };

  return (
    <div className="Books">
      <div className="container">
        {books.map((val, key) => {
          return (
            <Book
              id={key}
              title={val.title}
              author={val.author}
              bookFinished={val.bookFinished}
              bookCover={val.bookCover}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Books;
