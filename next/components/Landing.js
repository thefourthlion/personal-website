import Image from "next/image";
import React from "react";

export default function Home() {
  const lazyRoot = React.useRef(null);
  return (
    <div id="Home" ref={lazyRoot}>
      <div className="Home">
        <Image
          lazyRoot={lazyRoot}
          width="125px"
          height="125px"
          src="/../public/images/theforthlion.jpg"
          alt="creators-image"
          className="my-img"
        />
        <h1 className="name">Everett De Leon</h1>
        <h3 className="description">Full Stack Developer, Web3 Enthusiast</h3>
        <a href="https://github.com/thefourthlion">
          <Image
            lazyRoot={lazyRoot}
            width="42px"
            height="42px"
            src="/../public/images/github.png"
            alt="github logo"
            className="social-logo"
          />
        </a>
        <a href="https://twitter.com/The_FourthLion">
          <Image
            lazyRoot={lazyRoot}
            width="51px"
            height="42px"
            src="/../public/images/twitter.png"
            alt="twitter logo"
            className="social-logo twitter"
          />
        </a>
        <a href="https://www.linkedin.com/in/theforthlion/">
          <Image
            lazyRoot={lazyRoot}
            width="42px"
            height="42px"
            src="/../public/images/linkedin.png"
            alt="linkedin logo"
            className="social-logo linked"
          />
        </a>
      </div>
    </div>
  );
}
