import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./MoneyStats.css";
const MoneyStats = () => {
  const [earning, setEarning] = useState([]);
  const [spending, setSpending] = useState([]);
  let sum = 0;

  useEffect(() => {
    getEarning();
    getSpending();
  }, []);

  const getEarning = () => {
    Axios.get("https://api.everettdeleon.com/api/earn/read").then((res) => {
      const data = res.data;
      setEarning(data);
    });
  };

  const getSpending = () => {
    Axios.get("https://api.everettdeleon.com/api/spend/read").then((res) => {
      const data = res.data;
      setSpending(data);
    });
  };

  const totalEarning = () => {
    if (earning.length > 0) {
      const earnAmount = earning.map(({ amount }) => amount);
      for (let x = 0; x < earnAmount.length; x++) {
        sum += Math.floor(earnAmount[x]);
        console.log("amount" + earnAmount[x]);
      }
    }

    return sum;
  };

  console.log(totalEarning());
  return (
    <div className="MoneyStats">
      {/* <div className="money-stats-container">{totalEarning()}</div> */}
    </div>
  );
};

export default MoneyStats;
