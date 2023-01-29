import "./Navigation.css";
import React, { useState } from "react";
export default function Navigation() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="Navbar" id="Navbar">
      <ul
        className="nav nav-links"
        id={showLinks ? "nav-active" : "nav-hidden"}
      >
        <li className="nav-item">
          <a className="nav-home" href="./#Home">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-bio" href="./#Bio">
            Bio
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-tech" href="./#Tech">
            Tech
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-portfolio" href="./#Portfolio">
            Portfolio
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-portfolio" href="./books-read">
            Books Read
          </a>
        </li>

        <li>
          <div className="cyber-btn-container">
            <a className="nav-contact" href="./#Contact">
              <button className="mode-btn cybr-btn">
                Contact_Me_
                <span aria-hidden id="glitch" className="cybr-btn__glitch">
                  Contact_Me_
                </span>
                <span aria-hidden id="tag" className="cybr-btn__tag">
                  ED5
                </span>
              </button>
            </a>
          </div>
        </li>
      </ul>{" "}
      <a href="/">
        <h1 className="nav-title">Everett IV</h1>
      </a>
      <div className="burger" onClick={() => setShowLinks(!showLinks)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}
