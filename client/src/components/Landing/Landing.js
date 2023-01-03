import "./landing.css";
import theforthlion from "../../styles/images/theforthlion.jpg";
import githubImg from "../../styles/images/lime-green-github-icon.png";
import twitterImg from "../../styles/images/lime-green-twitter-icon.png";
import linkedinImg from "../../styles/images/lime-green-linkedin-icon.png";
export default function Landing() {
  return (
    <div className="Landing" id="Landing">
      <img src={theforthlion} alt="creators-image" className="my-img"></img>
      <h1 className="name">Everett De Leon</h1>
      <h3 className="description">Full Stack Developer, Web3 Enthusiast</h3>
      <a href="https://github.com/thefourthlion">
        <img src={githubImg} alt="github logo" className="social-logo" />
      </a>
      <a href="https://twitter.com/The_FourthLion">
        <img
          src={twitterImg}
          alt="twitter logo"
          className="social-logo twitter"
        />
      </a>
      <a href="https://www.linkedin.com/in/theforthlion/">
        <img
          src={linkedinImg}
          alt="linkedin logo"
          className="social-logo linked"
        />
      </a>
    </div>
  );
}
