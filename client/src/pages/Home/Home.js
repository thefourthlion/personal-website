import "./home.css";
import theforthlion from "../../styles/images/theforthlion.jpg";
import githubImg from "../../styles/images/github.png";
import twitterImg from "../../styles/images/twitter.png";
import linkedinImg from "../../styles/images/linkedin.png";
export default function Home() {
  return (
    <div className="Home" id="Home">
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

      {/* <a href="https://docs.google.com/document/d/1-QRuT6GVHottHjKM9RH0aKFqaWPCIYPh#">
        <button className="cybr-btn">
          Resume_
          <span aria-hidden id="glitch" className="cybr-btn__glitch">
            Res_ume_
          </span>
          <span aria-hidden id="tag" className="cybr-btn__tag">
            ED5
          </span>
        </button>
      </a> */}
    </div>
  );
}
