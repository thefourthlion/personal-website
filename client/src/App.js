import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main/main.css";
import "./styles/CyberButton/cyberbtn.css";

import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Tech from "./components/Tech/Tech";
import Bio from "./components/Bio/Bio";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PostProject from "./pages/PostProject/PostProject";
import ImproveForm from "./pages/ImproveForm/ImproveForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
                <Bio />
                <Tech />
                <Portfolio />
                <Contact />
                <Footer />
              </div>
            }
          />
          <Route exact path="/enter-project" element={<PostProject />} />
          {/* <Route exact path="/enter-improvement" element={<ImproveForm />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
