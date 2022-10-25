import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/MoneyApp/MoneyApp.css";
import "./styles/main/main.css";
import "./styles/CyberButton/cyberbtn.css";

import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Tech from "./pages/Tech/Tech";
import Bio from "./pages/Bio/Bio";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import PostProject from "./pages/PostProject/PostProject";
import ImproveForm from "./pages/ImproveForm/ImproveForm";
import Earn from "./pages/Earn/earn";
import Spend from "./pages/Spend/spend";
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
          <Route exact path="/enter-improvement" element={<ImproveForm />} />
          <Route exact path="/spend" element={<Spend />} />
          <Route exact path="/earn" element={<Earn />} />
          {/* <Route exact path="/postProject" element={<PostProject />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
