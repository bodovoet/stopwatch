import React from "react";
import { UserProfile } from "@clerk/nextjs";
import { TfiClose } from "react-icons/tfi";
import SidebarFooter from "@/components/shared/protected/mobile/SidebarFooter";
import EmptyScrollSpace from "@/components/shared/protected/mobile/EmptyScrollSpace";

const SidebarUser = ({ closeMenu }) => {
  return (
    <div className="mobile-sidebar">
      {/* Close Button */}
      <button className="close-sidebar-button" onClick={closeMenu}>
        <TfiClose />
      </button>

      {/* Scrollable Content */}
      <div className="mobile-sidebar-content">
        {/* Title */}
        <h1>User Profile</h1>

        {/* Clerk UserProfile Component */}
        <div className="user-profile-container">
        <UserProfile
          routing="hash"
          appearance={{
            elements: {
              rootBox: "custom-root-box-class", // Wrapper around the component
              formFieldInput: "custom-input-class", // Styling for input fields
              formButtonPrimary: "custom-button-class", // Styling for the primary buttons
            },
            layout: {
              logoPlacement: "none", // Hides the default logo
              showOptionalFields: false, // Hides optional fields
            },
          }}
        />
        </div>

        {/* Empty Scroll Space */}
        <EmptyScrollSpace />
      </div>

      {/* Footer */}
      <SidebarFooter toggleSidebar={closeMenu} />
    </div>
  );
};

export default SidebarUser;