import "./home.css";
import Landing from "../../components/Landing/Landing";
import Tech from "../../components/Tech/Tech";
import Bio from "../../components/Bio/Bio";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
export default function Home() {
  return (
    <div className="Home" id="Home">
      <Landing />
      <Bio />
      <Tech />
      <Portfolio />
      <Contact />
    </div>
  );
}
