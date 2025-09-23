import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import sampleImage from "../src/assets/sample.jpg"; // correct path for Vite/React

function Login({ setUser }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const name = email.split('@')[0];
    setUser({
      name: name,
      email: email,
      occupation: "Software Developer",
      lastLogin: new Date().toLocaleString()
    });
    navigate("/");
  }

  return (
    <div className="auth-container">
      <div className="auth-card split-card">
        {/* Image Section */}
        <div className="card-image">
          <img src={sampleImage} alt="Login Illustration" />
        </div>

        {/* Form + Intro Section */}
        <div className="card-content">
          <h2>Login</h2>
          <p className="intro-text">
            Welcome back! Please login to access your stress dashboard.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input name="password" type="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="auth-button">Login</button>
          </form>
          <p>
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
