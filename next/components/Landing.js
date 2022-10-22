import Image from "next/image";
import React from "react";
import fourthLionImage from "../public/images/theforthlion.jpg";
import githubImage from "../public/images/github.png";
import twitterImage from "../public/images/twitter.png";
import linkdInImage from "../public/images/linkedin.png";
export default function Home() {
  const lazyRoot = React.useRef(null);
  return (
    <div id="Home" ref={lazyRoot}>
      <div className="Home">
        <Image
          lazyRoot={lazyRoot}
          width="125px"
          height="125px"
          src={fourthLionImage}
          alt="creators-image"
          className="my-img"
        />
        <h1 className="name">Everett De Leon</h1>
        <h3 className="description">Full Stack Developer, Web3 Enthusiast</h3>
        <a href="https://github.com/thefourthlion" className="social-a">
          <Image
            lazyRoot={lazyRoot}
            width="42px"
            height="42px"
            src={githubImage}
            alt="github logo"
            className="social-logo"
          />
        </a>
        <a href="https://twitter.com/The_FourthLion" className="social-a">
          <Image
            lazyRoot={lazyRoot}
            width="51px"
            height="42px"
            src={twitterImage}
            alt="twitter logo"
            className="social-logo twitter"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/theforthlion/"
          className="social-a"
        >
          <Image
            lazyRoot={lazyRoot}
            width="42px"
            height="42px"
            src={linkdInImage}
            alt="linkedin logo"
            className="social-logo linked"
          />
        </a>
      </div>
    </div>
  );
}
