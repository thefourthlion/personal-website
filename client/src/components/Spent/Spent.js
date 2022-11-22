import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Spent.css";
const Spent = () => {
  const [spending, setSpending] = useState([]);

  useEffect(() => {
    getSpending();
  }, []);

  const getSpending = () => {
    Axios.get("https://api.everettdeleon.com/api/spend/read").then((res) => {
      const data = res.data;
      setSpending(data);
    });
  };

  const deleteSpending = (id) => {
    Axios.delete(`https://api.everettdeleon.com/api/spend/delete/${id}`).then(
      () => {}
    );
  };

  return (
    <div className="Spent">
      <h1>Money Spent</h1>
      <div className="spent-container">
        {spending.map((val, key) => {
          return (
            <div key={val._id} className="spending">
              <h1>
                <span className="category">{val.category}</span>{" "}
                <span className="cost">${val.cost}🔻</span>
                <p>{val.timestamp}</p>
                <button
                  className="red-outline-btn"
                  onClick={(e) => {
                    deleteSpending(val._id);
                  }}
                >
                  Delete
                </button>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Spent;
