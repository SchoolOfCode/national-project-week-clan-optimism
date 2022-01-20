import React from "react";
import "./Navbar.css";
import menuicon from "./menu-icon.png";
import defaultuser from "./default-user.png";
import logo from "./co-clan-logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <img src={menuicon} alt="menu-icon" className="menu-icon"/>
        <div className="logo-container">
          <img src={logo} alt="co-clan-logo" className="logo" />
        </div>
        <img src={defaultuser} alt="default-user" className="default-user"/>
      </nav>
    </div>
  );
}
