import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <div>dropdown menu</div>
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div>user login</div>
      </nav>
    </div>
  );
}
