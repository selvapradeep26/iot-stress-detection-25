import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import sampleImage from "../src/assets/sample.jpg";

function Signup({ setUser }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
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
        <div className="card-image">
          <img src={sampleImage} alt="Signup Illustration" />
        </div>
        <div className="card-content">
          <h2>Sign Up</h2>
          <p className="intro-text">
            Join us and start tracking your stress levels effectively.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Name</label>
              <input name="name" type="text" placeholder="Enter your name" required />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input name="password" type="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
