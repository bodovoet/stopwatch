import React from "react";
import { TfiClose } from "react-icons/tfi";

const SidebarSupport = ({ closeMenu }) => {
  const handleFileUpload = () => {
    // Logic for opening the phone's camera or file picker
    console.log("Open camera or file picker");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Support form submitted");
  };

  return (
    <div className="mobile-sidebar">
      {/* Close Button */}
      <button className="close-sidebar-button" onClick={closeMenu}>
        <TfiClose />
      </button>

      {/* Support Form Introduction */}
      <div className="support-intro">
        <p>
          Need help? Submit a support request with details about your issue. You
          can also upload photos or videos to provide additional context for
          your request.
        </p>
      </div>

      {/* Support Form */}
      <form className="support-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter a short title for your issue"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            placeholder="Describe your issue in detail"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="file">Add Photo or Video</label>
          <button
            type="button"
            id="file"
            className="file-upload-button"
            onClick={handleFileUpload}
          >
            Upload Photo/Video
          </button>
        </div>

        <div className="form-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>

    </div>
  );
};

export default SidebarSupport;