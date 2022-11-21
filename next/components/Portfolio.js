import React, { useState, useEffect } from "react";
import Axios from "axios";
import Image from "next/image";
export default function Portfolio() {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    Axios.get("https://api.everettdeleon.com/api/posts/read").then((res) => {
      setProjectList(res.data);
    });
  }, []);

  function PortfolioEntry(props) {
    const lazyRoot = React.useRef(null);
    return (
      <div className="portfolio-component" ref={lazyRoot}>
        <a href={props.webLink}>
          <Image
            loader={() => props.imageLink}
            src={props.imageLink}
            width="500px"
            height="250px"
            alt="portfolio"
            className="portfolio-pic"
          />
        </a>
        <a href={props.webLink} className="header-link">
          <h2 className="portfolio-header">
            <b>{props.title}</b>
          </h2>
        </a>
        <a href={props.githubLink} className="portfolio-githublink">
          Check out the code on github.
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
