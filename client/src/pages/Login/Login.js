import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import "./Login.css";
const Login = () => {
  const { logOut, user } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="Login">
      <h2>Log In</h2>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <FloatingLabel className="form-label" label="Email ">
            <Form.Control
              className="form-input"
              type="email"
              autoComplete="true"
              placeholder="Email "
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <FloatingLabel className="form-label" label="Password ">
            <Form.Control
              className="form-input"
              type="password"
              autoComplete="true"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>

        <button className="green-outline-btn">Log In</button>
      </Form>

      {user && (
        <button className="red-outline-btn logout-btn" onClick={handleLogout}>
          Log Out
        </button>
      )}
    </div>
  );
};

export default Login;
