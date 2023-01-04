import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main/main.css";
import "./styles/CyberButton/cyberbtn.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import PostProject from "./pages/PostProject/PostProject";
import ImproveForm from "./pages/ImproveForm/ImproveForm";
import BooksRead from "./pages/BooksRead/BooksRead";
import { ReactComponent as Moon } from "./styles/images/moon.svg";
import { ReactComponent as Sun } from "./styles/images/sun.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "./pages/Library/Library";
import Journal from "./pages/Journal/Journal";
export default function App() {
  const [theme, setTheme] = useState("light");
  const techName = document.querySelectorAll(".svg-tech-names");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      Array.from(techName).forEach((techName) => {
        techName.style.fill = "rgb(228, 227, 222)";
      });
    } else {
      setTheme("light");

      Array.from(techName).forEach((techName) => {
        techName.style.fill = "rgb(44, 50, 59)";
      });
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <UserAuthContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Home className={`${theme}`} />
                </div>
              }
            />
            <Route
              path="/login"
              element={
                <div>
                  <Login className={`${theme}`} />
                </div>
              }
            />
            <Route
              path="/books-read"
              element={
                <div>
                  <BooksRead className={`${theme}`} />
                </div>
              }
            />
            <Route
              exact
              path="/enter-project"
              element={
                <ProtectedRoute>
                  <PostProject className={`${theme}`} />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/library"
              element={
                <ProtectedRoute>
                  <Library className={`${theme}`} />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/journal"
              element={
                <ProtectedRoute>
                  <Journal className={`${theme}`} />
                </ProtectedRoute>
              }
            />
            {/* <Route exact path="/enter-improvement" element={<ImproveForm />} /> */}
          </Routes>
        </UserAuthContextProvider>
        <Footer />

        {theme === "light" ? (
          <Moon className="svg-theme-btn" onClick={toggleTheme} />
        ) : (
          <Sun className="svg-theme-btn" onClick={toggleTheme} />
        )}
      </Router>
    </div>
  );
}
