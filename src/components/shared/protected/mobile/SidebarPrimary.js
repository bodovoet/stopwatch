import React from "react";
import Link from "next/link";
import { TfiClose } from "react-icons/tfi"; // Close button icon
import {
  PiCaretCircleRightLight,
  PiPlusCircleLight,
  PiTimerLight,
  PiGearSixLight,
} from "react-icons/pi"; // New icons for menu links
import SidebarFooter from "@/components/shared/protected/mobile/SidebarFooter"; // Updated footer import
import EmptyScrollSpace from "@/components/shared/protected/mobile/EmptyScrollSpace";

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

      {/* Scrollable Content */}
      <div className="mobile-sidebar-content">
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

        {/* Empty Scroll Space */}
        <EmptyScrollSpace />
      </div>

      {/* Footer */}
      <SidebarFooter toggleSidebar={closeMenu} />
    </div>
  );
};

export default SidebarPrimary;