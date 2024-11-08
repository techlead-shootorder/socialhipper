"use client"
import React, { useState } from "react";
import Tabs from "./Tabs";
import UserProfile from "../user-profile/Profile";
import Projections from "../user-profile/Projections";


const ParentComponent = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  // Content render function based on selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case "overview":
        return <UserProfile />;
      case "projections":
        return <Projections />;
      case "engagement":
        return <div>Engagement Stats Content</div>;
      case "media":
        return <div>Media Stats Content</div>;
      case "influencer":
        return <div>Influencer Stats Content</div>;
      case "social":
        return <div>Social Stats Content</div>;
      default:
        return <div>Select a tab to see content</div>;
    }
  };

  return (
    <div>
      {/* Tabs Component */}
      <Tabs onTabSelect={setSelectedTab} />

      {/* Rendered Content based on selected tab */}
      <div className="">
        {renderContent()}
      </div>
    </div>
  );
};

export default ParentComponent;
