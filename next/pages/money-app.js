import React from "react";

import Spending from "../components/Spending";
import Earning from "../components/Earning";
const MoneyApp = () => {
  const lazyRoot = React.useRef(null);
  return (
    <div className="MoneyApp" ref={lazyRoot}>
      <Spending />
      {/* <Earning /> */}
    </div>
  );
};

export default MoneyApp;
