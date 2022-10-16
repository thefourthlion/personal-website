import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Axios from "axios";

const Spending = () => {
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");
  const [card, setCard] = useState("");
  const [store, setStore] = useState("");

  const postSpend = () => {
    Axios.post("http://localhost:3001/api/money/spend", {
      cost: cost,
      category: category,
      store: store,
      card: card,
    });
  };

  return (
    <div className="Spending">
      <form>
        <h1>🧧 - Spending</h1>

        <div className="amount">
          <p>💸 - Amount</p>
          <input
            type="number"
            placeholder="$100"
            onChange={(e) => {
              setCost(e.target.value);
            }}
          />
        </div>
        <br />

        <div className="dropdown-menus">
          <Dropdown className="dropdown">
            <Dropdown.Toggle className="dropdown-name" variant="light">
              🐈‍⬛ - Cat.
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("Food");
                }}
              >
                🌮 - Food
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("Health Care");
                }}
              >
                ❤️‍🩹 - Health Care
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("Education");
                }}
              >
                📖 - Learn
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("Gas");
                }}
              >
                ⛽ - Gas
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("Work");
                }}
              >
                ⚒️ - Work
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("Subscriptions");
                }}
              >
                🎬 - Subscriptions
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("Sick Care");
                }}
              >
                🤒 - Sick Care
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("Maintenance");
                }}
              >
                🏢 - Maint.
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("Jewelry");
                }}
              >
                💎 - Jewelry
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("Doo Dads");
                }}
              >
                🪀 - Doo Dads
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("Flower");
                }}
              >
                🪴 - Flower
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="dropdown">
            <Dropdown.Toggle className="dropdown-name" variant="light">
              🃏 - Card
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("Discover");
                }}
              >
                💳 - Disc
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("US Bank");
                }}
              >
                🏦 - USBANK
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("Capital One");
                }}
              >
                🏧 - CAPT1
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("PayPal");
                }}
              >
                💶 - PayPal
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("Chase Amazon");
                }}
              >
                💱 - Chase
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("BOFA");
                }}
              >
                🚩 - BOFA
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("BOFA");
                }}
              >
                ⬛ - BlockFI
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="dropdown">
            <Dropdown.Toggle className="dropdown-name" variant="light">
              🏪 - Store
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setStore("Ma & Pa");
                }}
              >
                💳 - Ma & Pa
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setStore("Cooperation");
                }}
              >
                🏭 - Corp.
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setStore("Cooperation");
                }}
              >
                😇 - Trustworthy.
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <button className="submit-btn">Submit</button>
        <p className="warning">(please keep recipes)</p>
        <p className="warning">(record all bank notifications)</p>
      </form>
      <h1>
        {cost.length > 0 &&
          category.length > 0 &&
          card.length > 0 &&
          store.length > 0 && (
            <h2>
              Your spending ${cost} on {category} with a {card} card at a{" "}
              {store}
            </h2>
          )}
      </h1>
    </div>
  );
};

export default Spending;
