import React from "react";
import { SignOutButton } from "@clerk/nextjs";

function SignOutContent() {
  return (
    <div>
      Are you sure? &nbsp;&nbsp;&nbsp; <SignOutButton className="sign-out-button" />
    </div>
  );
}

export default SignOutContent;