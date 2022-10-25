import React, { useState, useEffect } from "react";
import "./portfolio.css";
import Axios from "axios";
export default function Portfolio() {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    Axios.get("https://www.apis.everettdeleon.com/api/posts/read").then(
      (res) => {
        setProjectList(res.data);
      }
    );
  }, []);

  function PortfolioEntry(props) {
    return (
      <div className="portfolio-component">
        <a href={props.webLink}>
          <img
            src={props.imageLink}
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
        {/* <PortfolioEntry
          src={trax}
          website="https://trax-cointracker.netlify.app/"
          github="https://github.com/theforthli0n/trax-cointracker"
          name="Trax Crypto Tracker"
          description="Trax is a cryptocurrency tracker written with React that uses a coingecko api. All data is live and accurate."
        />
        <PortfolioEntry
          src={sr}
          website="https://www.savagerabbits.io/"
          github="https://github.com/theforthli0n/savage-rabbits-website"
          name="Savage Rabbits NFTs"
          description="The Savage Rabbits are interactive nfts, built on the Cardano blockchain."
        />
        <PortfolioEntry
          src={horoscope}
          website="https://daily-scopes.netlify.app/"
          github="https://github.com/theforthli0n/horoscope"
          name="Free Daily Horoscope"
          description="This horoscope website is a React application that generates a daily horoscope based on a horoscope api."
        />
        <PortfolioEntry
          src={gif}
          website="https://theforthlion-gif-search.netlify.app/"
          github="https://github.com/theforthli0n/gifSearchEngine"
          name="Gif Search Engine"
          description="Using the most used gif api in the world Giphy. I created a gif search engine, which of course automatically searches cute cats."
        />
        <PortfolioEntry
          src={flappy}
          website="https://flappy-copy.netlify.app/"
          github="https://github.com/theforthli0n/flappy-init"
          name="Flappy Bird Clone"
          description="Definitely not the first of its kind. But this is a very simply flappy bird clone written in JavaScript. "
        />
        <PortfolioEntry
          src={notation}
          website="https://notation-notes.netlify.app/"
          github="https://github.com/theforthli0n/notation-notes"
          name="Notation"
          description="Notation is a note taking app that i wrote when i first learned React. It's simple but sweet."
        />
        <PortfolioEntry
          src={joke}
          website="https://got-a-joke.netlify.app/"
          github="https://github.com/theforthli0n/got-a-joke"
          name="Joke Generator"
          description="This application was written using React and uses an api to generate random jokes. I love to lighten the mood, so i made an app for it."
        /> */}
      </div>
    </div>
  );
}
