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
          <a className="nav-contact" href="./#Contact">
            Contact
          </a>
        </li>
        <li>
          <a>
            <button
              className="mode-btn cybr-btn"
              onClick={function () {
                const modeBtn = document.querySelector(".mode-btn");
                const root = document.querySelector("body");
                const home = document.querySelector(".nav-home");
                const bio = document.querySelector(".nav-bio");
                const portfolio = document.querySelector(".nav-portfolio");
                const contact = document.querySelector(".nav-contact");
                const tech = document.querySelector(".nav-tech");
                const name = document.querySelector(".name");
                const description = document.querySelector(".description");
                const glitch = document.getElementById("glitch");
                const techName = document.querySelectorAll(".svg-tech-names");
                const navLinks = document.querySelector(".nav-links");
                const navbar = document.querySelector(".Navbar");

                if (modeBtn.innerHTML === "Light Mode_") {
                  home.style.color = "rgb(44, 50, 59)";
                  bio.style.color = "rgb(44, 50, 59)";
                  portfolio.style.color = "rgb(44, 50, 59)";
                  contact.style.color = "rgb(44, 50, 59)";
                  tech.style.color = "rgb(44, 50, 59)";
                  home.innerHTML = "Home";
                  bio.innerHTML = "Bio";
                  tech.innerHTML = "Tech";
                  portfolio.innerHTML = "Portfolio";
                  contact.innerHTML = "Contact";
                  root.style.color = "rgb(44, 50, 59)";
                  root.style.backgroundColor = "rgb(228, 227, 222)";
                  if (window.matchMedia("(max-width: 900px)").matches) {
                    navLinks.style.backgroundColor = "rgb(228, 227, 222)";
                    navbar.style.backgroundColor = "rgb(228, 227, 222)";
                  }
                  // name.innerHTML = "Everett De Leon";
                  // description.innerHTML = "Software Engineer, Web3 Enthusiast";
                  navLinks.style.backgroundColor = "rgb(228, 227, 222)";
                  window.location.reload();
                  modeBtn.innerHTML = "Dark Mode_";
                  glitch.innerHTML = "Dark Mode_";

                  Array.from(techName).forEach((techName, index) => {
                    techName.style.fill = "rgb(44, 50, 59)";
                  });
                } else {
                  home.style.color = "rgb(205, 217, 229)";
                  bio.style.color = "rgb(205, 217, 229)";
                  portfolio.style.color = "rgb(205, 217, 229)";
                  contact.style.color = "rgb(205, 217, 229)";
                  tech.style.color = "rgb(205, 217, 229)";
                  // tech.innerHTML = "./Tech";
                  // home.innerHTML = "./Home";
                  // bio.innerHTML = "./Bio";
                  // portfolio.innerHTML = "./Portfolio";
                  // contact.innerHTML = "./Contact";
                  root.style.color = "rgb(205, 217, 229)";
                  root.style.backgroundColor = "rgb(44, 50, 59)";
                  if (window.matchMedia("(max-width: 900px)").matches) {
                    navLinks.style.backgroundColor = "rgb(44, 50, 59)";
                    navbar.style.backgroundColor = "rgb(44, 50, 59)";
                  }
                  // name.innerHTML = 'name="Everett De Leon"';
                  // description.innerHTML = "Software Engineer//Web3 Enthusiast_";
                  modeBtn.innerHTML = "Light Mode_";
                  glitch.innerHTML = "Light Mode_";
                  Array.from(techName).forEach((techName, index) => {
                    techName.style.fill = "rgb(205, 217, 229)";
                  });
                }
              }}
            >
              Dark Mode_
              <span aria-hidden id="glitch" className="cybr-btn__glitch">
                Dark Mode_
              </span>
              <span aria-hidden id="tag" className="cybr-btn__tag">
                ED5
              </span>
            </button>
          </a>
        </li>
      </ul>
      <h1 className="nav-title">Everett De Leon</h1>
      <div className="burger" onClick={() => setShowLinks(!showLinks)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}
