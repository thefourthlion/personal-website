import Landing from "../components/Landing";
import Bio from "../components/Bio";
import Tech from "../components/Tech";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import Navbar from "../components/Navigation";
export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Landing />
      <Bio />
      <Tech />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
