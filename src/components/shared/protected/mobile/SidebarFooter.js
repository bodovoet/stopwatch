import React from "react";
import { PiHouseSimpleLight, PiBookLight, PiHeadsetLight, PiUserLight as PiUserIcon } from "react-icons/pi";

const SidebarFooter = ({ toggleSidebar }) => {
  return (
    <footer className="mobile-sidebar-footer">
      <div className="footer-buttons-left">
        <button className="footer-button" onClick={() => toggleSidebar("primary")}>
          <PiHouseSimpleLight />
        </button>
        <button className="footer-button" onClick={() => toggleSidebar("help")}>
          <PiBookLight />
        </button>
      </div>
      <div className="footer-buttons-right">
        <button className="footer-button" onClick={() => toggleSidebar("support")}>
          <PiHeadsetLight />
        </button>
        <button className="footer-button" onClick={() => toggleSidebar("user")}>
          <PiUserIcon />
        </button>
      </div>
    </footer>
  );
};

export default SidebarFooter;