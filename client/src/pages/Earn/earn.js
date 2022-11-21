import React from "react";
import Earning from "../../components/Earning/Earning";
import Earned from "../../components/Earned/Earned";
import MoneyStats from "../../components/MoneyStats/MoneyStats";
const Earn = () => {
  return (
    <div className="Earn">
      <div className="MoneyApp">
        <Earning />
        <MoneyStats />
        <Earned />
      </div>
    </div>
  );
};

export default Earn;
