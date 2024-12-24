import React from "react";
import Link from "next/link";
import { TfiClose } from "react-icons/tfi"; // Close button icon
import { PiHouseSimpleLight, PiBookLight, PiHeadsetLight, PiUserLight as PiUserIcon } from "react-icons/pi"; // Footer icons
import {
  PiCaretCircleRightLight,
  PiPlusCircleLight,
  PiTimerLight,
  PiGearSixLight,
} from "react-icons/pi"; // New icons for menu links

const SidebarPrimary = ({ closeMenu }) => {
  // Centralized links array
  const links = [
    { path: "/protected/mobile/WorkersMobile", label: "Workers", icon: <PiCaretCircleRightLight /> },
    { path: "/protected/mobile/LinesMobile", label: "Lines", icon: <PiCaretCircleRightLight /> },
    { path: "/protected/mobile/IncidentsMobile", label: "Incidents", icon: <PiCaretCircleRightLight /> },
    { path: "/protected/mobile/AddIncidentMobile", label: "Add Incident", icon: <PiPlusCircleLight /> },
    { path: "/protected/mobile/StopwatchMobile", label: "Stopwatch", icon: <PiTimerLight /> },
    { path: "/protected/mobile/SetupMobile", label: "Setup", icon: <PiGearSixLight /> },
  ];

  return (
    <div className="mobile-sidebar">
      {/* Close Button */}
      <button className="close-sidebar-button" onClick={closeMenu}>
        <TfiClose />
      </button>

      {/* Navigation Links */}
      <ul className="mobile-sidebar-menu">
        {links.map((link) => (
          <li key={link.path} className="mobile-sidebar-item">
            <Link href={link.path} passHref>
              <button className="mobile-sidebar-link">
                <span className="link-label">{link.label}</span> {/* Label */}
                <span className="link-icon">{link.icon}</span> {/* Icon */}
              </button>
            </Link>
          </li>
        ))}
      </ul>

      {/* Sidebar Footer */}
      <footer className="mobile-sidebar-footer">
        {/* Left Buttons */}
        <div className="footer-buttons-left">
          <button className="footer-button">
            <PiHouseSimpleLight />
          </button>
          <button className="footer-button">
            <PiBookLight />
          </button>
        </div>

        {/* Right Buttons */}
        <div className="footer-buttons-right">
          <button className="footer-button">
            <PiHeadsetLight />
          </button>
          <button className="footer-button">
            <PiUserIcon />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SidebarPrimary;