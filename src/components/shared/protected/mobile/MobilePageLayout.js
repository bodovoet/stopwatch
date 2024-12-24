import React from "react";
import MobileCloseButton from "./MobileCloseButton";
import SidebarFooter from "./SidebarFooter";

const MobilePageLayout = ({ children, onClose }) => {
  return (
    <div className="mobile-sidebar">
      {/* Close Button */}
      <MobileCloseButton onClose={onClose} />

      {/* Page Content */}
      <div className="mobile-page-content">{children}</div>

      {/* Footer */}
      <SidebarFooter />
    </div>
  );
};

export default MobilePageLayout;