import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Axios from "axios";

const Earning = () => {
  const [amount, setAmount] = useState("");
  const [activity, setActivity] = useState("");
  const [deposit, setDeposit] = useState("");
  const [enjoyment, setEnjoyment] = useState("");

  const postEarn = () => {
    Axios.post("https://api.everettdeleon.com/api/earn/create", {
      amount: amount,
      activity: activity,
      enjoyment: enjoyment,
      deposit: deposit,
      timestamp: date,
    });
  };

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const date = mm + "/" + dd + "/" + yyyy;
  return (
    <div className="Earning">
      <form>
        <h1>💰 Earning</h1>

        <div className="amount">
          <p>💵 Amount</p>
          <input
            step="any"
            type="number"
            placeholder="$100"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <br />

        <div className="dropdown-menus">
          <Dropdown className="dropdown">
            <Dropdown.Toggle className="dropdown-name" variant="light">
              🤔 How
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setActivity("🏢 9-5");
                }}
              >
                🏢 9-5
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setActivity("🪴 Business");
                }}
              >
                🪴 Business
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setActivity("🍀 Found it");
                }}
              >
                🍀 Found it
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setActivity("⚒️ Side Job");
                }}
              >
                ⚒️ Side Job
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setActivity("💹 Interest");
                }}
              >
                💹 Interest
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setActivity("💉 Stimulus");
                }}
              >
                💉 Stimulus
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="dropdown">
            <Dropdown.Toggle className="dropdown-name" variant="light">
              🏦 Dep.
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setDeposit("💶 USBANK");
                }}
              >
                💶 USBANK
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setDeposit("💷 Ally Bank");
                }}
              >
                💷 Ally Bank
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setDeposit("🔮 Crypto ");
                }}
              >
                🔮 Crypto
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setDeposit("📁 Wallet");
                }}
              >
                📁 Wallet
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setDeposit("🧷 Safe");
                }}
              >
                🧷 Safe
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="dropdown">
            <Dropdown.Toggle className="dropdown-name" variant="light">
              🎉 Enjoy
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setEnjoyment("🥱 SSDD 1-3");
                }}
              >
                🥱 SSDD 1-3
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setEnjoyment("😤 Worthwhile 3-6");
                }}
              >
                😤 Worthwhile 3-6
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setEnjoyment("🙃 Enjoyable 6-10");
                }}
              >
                🙃 Enjoyable 6-10
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <p>
          Record a transaction?{" "}
          <a href="/spend" className="green">
            (spend)
          </a>
        </p>
        <button
          className="submit-btn"
          onClick={() => {
            postEarn();
          }}
        >
          Submit
        </button>

        <p className="warning">(record all forms of cash flow)</p>
      </form>
      <h1>
        {amount.length > 0 &&
          activity.length > 0 &&
          deposit.length > 0 &&
          enjoyment.length > 0 && (
            <h2>
              Your depositing $<span className="green">{amount}</span> into{" "}
              <span className="green">{deposit}</span> for working on{" "}
              <span className="green">{activity}</span>. And its been{" "}
              <span className="green">{enjoyment}</span>
            </h2>
          )}
      </h1>
    </div>
  );
};

export default Earning;
