import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-wrapper">
      <div className="landing-img-wrapper">
        <img
          className="landing-img"
          src={require("../../images/landing.jpg")}
          alt="women and dog siting on a sandy hill"
        />
      </div>
      <div className="landing-desc">
        <h2>InstaClone</h2>
        <Link to="/posts">Enter</Link>
      </div>
    </div>
  );
}
