import Landing from "../components/Landing";
import Bio from "../components/Bio";
import Tech from "../components/Tech";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
// import Navbar from "../components/Navigation";
export default function Home() {
  return (
    <>
      <Navigation />
      <div>
        <main></main>
        {/* <Navbar /> */}
        <Landing />
        <Bio />
        <Tech />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
