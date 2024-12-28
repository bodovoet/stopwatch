import React from "react";
import MobileLayout from "@/components/shared/protected/mobile/MobileLayout";

const WorkersMobile = () => {

  return (
    <MobileLayout title="Workers">
      <div className="workers-container">
        <h1 className="page-title">Workers</h1>
        <p className="page-description">
          Manage workers and view their metrics here.
        </p>
        <div className="workers-metrics">
          <p>Worker metrics will be displayed here.</p>
        </div>
      </div>
    </MobileLayout>
  );
};

export default WorkersMobile;