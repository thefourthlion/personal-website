import React from "react";
import Spending from "../../components/Spending/Spending";
import Spent from "../../components/Spent/Spent";
const Spend = () => {
  return (
    <div className="Spend">
      <div className="MoneyApp">
        <Spending />
        <Spent />
      </div>
    </div>
  );
};

export default Spend;
