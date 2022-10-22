import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Axios from "axios";
import Link from "next/link";

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
      timestamp: date,
    });
  };

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const date = mm + "/" + dd + "/" + yyyy;

  return (
    <div className="Spending">
      <form>
        <h1>🧧 - Spending</h1>

        <div className="amount">
          <p>💸 - Amount</p>
          <input
            step="any"
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
                  setStore("Trustworthy company");
                }}
              >
                😇 - Trustworthy.
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <p>
          Record an earning?{" "}
          <Link href="/earn" className="green">
            (earn)
          </Link>
        </p>
        <button
          className="submit-btn"
          onClick={() => {
            postSpend();
          }}
        >
          Submit
        </button>
        <p className="warning">(bank notifications and recipes)</p>
      </form>
      <h1>
        {cost.length > 0 &&
          category.length > 0 &&
          card.length > 0 &&
          store.length > 0 && (
            <h2>
              Your spending $<span>{cost}</span> on <span>{category}</span> with
              a <span>{card}</span> card at a <span>{store}</span>
            </h2>
          )}
      </h1>
    </div>
  );
};

export default Spending;
