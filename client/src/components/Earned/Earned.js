import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Earned.css";
const Earned = () => {
  const [Earning, setEarning] = useState([]);

  useEffect(() => {
    getEarning();
  }, []);

  const deleteEarning = (id) => {
    Axios.delete(`https://api.everettdeleon.com/api/earn/delete/${id}`).then(
      () => {}
    );
  };

  const getEarning = () => {
    Axios.get("https://api.everettdeleon.com/api/earn/read").then((res) => {
      const data = res.data;
      setEarning(data);
    });
  };

  return (
    <div className="Earned">
      <h1>Money Earned</h1>

      <div className="earned-container">
        {Earning.map((val, key) => {
          return (
            <div key={val._id} className="earning">
              <h1>
                <span className="category">{val.activity}</span>{" "}
                <span className="cost">${val.amount} 💵</span>
                <p>{val.timestamp}</p>
                <button
                  className="red-outline-btn"
                  onClick={(e) => {
                    deleteEarning(val._id);
                  }}
                >
                  Delete
                </button>
              </h1>
              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Earned;
