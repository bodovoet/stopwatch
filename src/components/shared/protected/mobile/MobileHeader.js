import React from "react";
import Image from "next/image";
import { PiListLight } from "react-icons/pi"; // Import the hamburger icon
import logo from "/public/logo-black-mobile.svg";

const MobileHeader = ({ title, toggleMenu }) => {
  return (
    <header className="mobile-header">
      {/* Logo */}
      <div className="header-logo">
        <Image src={logo} alt="Logo" width={80} />
      </div>

      {/* Title */}
      <div className="header-title">
        <h3>{title}</h3>
      </div>

      {/* Hamburger Menu */}
      <button className="hamburger-button" onClick={toggleMenu}>
        <PiListLight />
      </button>
    </header>
  );
};

export default MobileHeader;