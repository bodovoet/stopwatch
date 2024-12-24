import React, { useState } from "react";
import MobileHeader from "@/components/shared/protected/mobile/MobileHeader";
import SidebarPrimary from "@/components/shared/protected/mobile/SidebarPrimary";
import UserSidebar from "@/components/shared/protected/mobile/SidebarUser";
import SupportSidebar from "@/components/shared/protected/mobile/SidebarSupport";
import HelpSidebar from "@/components/shared/protected/mobile/SidebarHelp";
import SidebarFooter from "@/components/shared/protected/mobile/SidebarFooter";

const MobileLayout = ({ children, title, links }) => {
  const [activeSidebar, setActiveSidebar] = useState(null); // Tracks the active sidebar

  const toggleSidebar = (sidebar) => {
    setActiveSidebar((prev) => (prev === sidebar ? null : sidebar)); // Toggles the sidebar
  };

  return (
    <div className="mobile-layout">
      {/* Header */}
      <MobileHeader title={title} toggleMenu={() => toggleSidebar("primary")} />

      {/* Sidebars */}
      {activeSidebar === "primary" && (
        <div className="mobile-sidebar-wrapper">
          <SidebarPrimary links={links} closeMenu={() => toggleSidebar(null)} />
        </div>
      )}
      {activeSidebar === "user" && (
        <div className="mobile-sidebar-wrapper">
          <UserSidebar closeMenu={() => toggleSidebar(null)} />
        </div>
      )}
      {activeSidebar === "support" && (
        <div className="mobile-sidebar-wrapper">
          <SupportSidebar closeMenu={() => toggleSidebar(null)} />
        </div>
      )}
      {activeSidebar === "help" && (
        <div className="mobile-sidebar-wrapper">
          <HelpSidebar closeMenu={() => toggleSidebar(null)} />
        </div>
      )}

      {/* Main Content */}
      <main className="mobile-content">{children}</main>

      {/* Sidebar Footer */}
      <SidebarFooter toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default MobileLayout;