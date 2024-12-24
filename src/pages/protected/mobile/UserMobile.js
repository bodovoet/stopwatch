import React from "react";
import MobilePageLayout from "@/components/shared/protected/mobile/MobilePageLayout";

const UserMobile = ({ closeMenu }) => {
  return (
    <MobilePageLayout onClose={closeMenu}>
      <h1>User Page</h1>
      <p>This is the User page content.</p>
    </MobilePageLayout>
  );
};

export default UserMobile;