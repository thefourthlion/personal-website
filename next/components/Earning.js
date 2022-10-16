import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
const Earning = () => {
  return (
    <div className="Earning">
      <form>
        <h1>💰 - Earning</h1>

        <input type="number" placeholder="$100" />
        <br />

        <div className="dropdown-menus">
          <Dropdown className="dropdown">
            <Dropdown.Toggle className="dropdown-name" variant="light">
              🐈‍⬛ - Cat.
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item className="dropdown-item">🌮 - Food</Dropdown.Item>
              <Dropdown.Item className="dropdown-item">
                🏢 - Maint.
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-item">⚒️ - Work</Dropdown.Item>
              <Dropdown.Item className="dropdown-item">
                📖 - Learn
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="dropdown">
            <Dropdown.Toggle className="dropdown-name" variant="light">
              🃏 - Card
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item className="dropdown-item">💳 - Disc</Dropdown.Item>
              <Dropdown.Item className="dropdown-item">
                🏦 - USBANK
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-item">
                🏧 - CAPT1
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-item">
                💱 - Chase
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="dropdown">
            <Dropdown.Toggle className="dropdown-name" variant="light">
              🏪 - Store
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item className="dropdown-item">
                💳 - Ma & Pa
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-item">
                🏦 - Corp.
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </form>
    </div>
  );
};

export default Earning;
