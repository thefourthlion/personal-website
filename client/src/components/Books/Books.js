import React, { useEffect, useState } from "react";
import "./Books.css";
import Book from "../Book/Book";
import Axios from "axios";
// import { motion } from "framer-motion";
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBook();
  }, []);

  const getBook = () => {
    Axios.get("https://api.everettdeleon.com/api/library/read").then((res) => {
      const data = res.data;
      setBooks(data);
      // console.log(data);
    });
  };

  return (
    <div className="Books">
      <h1>I've Finished {books.length} Books. </h1>
      <h2>(Since 2020)</h2>
      <h3>“The more you know, the more you know you don't know.”</h3>
      <h3>- Aristotle</h3>
      <hr />
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
