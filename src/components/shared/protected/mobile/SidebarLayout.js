import React from "react";
import MobileCloseButton from "./MobileCloseButton";
import SidebarFooter from "./SidebarFooter";

const SidebarLayout = ({ onClose, children }) => {
  return (
    <div className="mobile-sidebar">
      {/* Close Button */}
      <MobileCloseButton onClose={onClose} />

      {/* Sidebar Content */}
      <div className="mobile-sidebar-content">{children}</div>

      {/* Footer */}
      <SidebarFooter />
    </div>
  );
};

export default SidebarLayout;