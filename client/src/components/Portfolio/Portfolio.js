import React, { useState, useEffect } from "react";
import "./portfolio.css";
import Axios from "axios";
export default function Portfolio() {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    Axios.get("https://api.everettdeleon.com/api/posts/read").then((res) => {
      setProjectList(res.data);
    });
  }, []);

  function PortfolioEntry(props) {
    return (
      <div className="portfolio-component">
        <a className="website-link" href={props.webLink}>
          <img
            src={props.imageLink}
            alt="portfolio"
            className="portfolio-pic"
          />
          <h1 className="view-website">View Website</h1>
        </a>
        <a href={props.webLink} className="header-link">
          <h2 className="portfolio-header">
            <b>{props.title}</b>
          </h2>
        </a>
        <a href={props.githubLink} className="portfolio-githublink">
          <p>Check out the code on github.</p>
        </a>
        <p className="portfolio-description">{props.projectDescription}</p>
      </div>
    );
  }

  return (
    <div className="Portfolio" id="Portfolio">
      <div className="portfolio-content">
        {projectList.map((val, key) => {
          return (
            <div key={val._id}>
              <PortfolioEntry
                imageLink={val.imageLink}
                webLink={val.webLink}
                githubLink={val.githubLink}
                title={val.title}
                projectDescription={val.projectDescription}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
