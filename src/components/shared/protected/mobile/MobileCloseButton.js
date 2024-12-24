import React from "react";
import { TfiClose } from "react-icons/tfi";

const MobileCloseButton = ({ onClose }) => {
  return (
    <button className="close-sidebar-button" onClick={onClose}>
      <TfiClose />
    </button>
  );
};

export default MobileCloseButton;