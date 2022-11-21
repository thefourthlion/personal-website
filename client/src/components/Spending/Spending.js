import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Axios from "axios";

const Spending = () => {
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");
  const [card, setCard] = useState("");
  const [store, setStore] = useState("");
  const postSpend = () => {
    Axios.post("https://api.everettdeleon.com/api/spend/create", {
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
        <h1>🧧 Spending</h1>

        <div className="amount">
          <p>💸 Amount</p>
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
              🐈‍⬛ Cat.
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("🌮 Food");
                }}
              >
                🌮 Food
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("❤️‍🩹 Health Care");
                }}
              >
                ❤️‍🩹 Health Care
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("📖 Education");
                }}
              >
                📖 Education
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("⛽ Gas");
                }}
              >
                ⛽ Gas
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("🎬 Subscriptions");
                }}
              >
                🎬 Subscriptions
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("📄 Rent");
                }}
              >
                📄 Rent
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("🏢 Maint.");
                }}
              >
                🏢 Maint.
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("💎 Jewelry");
                }}
              >
                💎 Jewelry
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("🪀 Gifts");
                }}
              >
                🪀 Gifts
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("🪴 Flower");
                }}
              >
                🪴 Flower
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCategory("🤣 Doo Dads");
                }}
              >
                🤣 Doo Dads
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="dropdown">
            <Dropdown.Toggle className="dropdown-name" variant="light">
              🃏 Card
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("💳 Disc");
                }}
              >
                💳 Disc
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("🏦 USBANK");
                }}
              >
                🏦 USBANK
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("Ⓜ️ Amex");
                }}
              >
                Ⓜ️ Amex
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("🏧 CAPT1");
                }}
              >
                🏧 CAPT1
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("💶 PayPal");
                }}
              >
                💶 PayPal
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("💱 Chase");
                }}
              >
                💱 Chase
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("🚩 BOFA");
                }}
              >
                🚩 BOFA
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setCard("⬛ BlockFI");
                }}
              >
                ⬛ BlockFI
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="dropdown">
            <Dropdown.Toggle className="dropdown-name" variant="light">
              🏪 Store
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setStore("👨‍💻 Ma & Pa");
                }}
              >
                👨‍💻 Ma & Pa
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setStore("🏭 Corp.");
                }}
              >
                🏭 Corp.
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={(e) => {
                  setStore("😇 Trustworthy");
                }}
              >
                😇 Trustworthy
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <p>
          Record an earning?{" "}
          <a href="/earn" className="green">
            (earn)
          </a>
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
