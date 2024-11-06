import StatsSection from "@/components/dashboard-chart/Chart";
import Tabs from "@/components/dashboard-tabs/Tabs";
import ImportantUpdate from "@/components/ImportantUpdate/ImportantUpdate";
import StatsCards from "@/components/stats-card/StatsCard";
import UserProfile from "@/components/user-profile/Profile";
import React from "react";

const page = () => {
  return (
    <div>
      <ImportantUpdate />
      <Tabs />
      <UserProfile />
      <StatsCards/>
      <StatsSection/>
    </div>
  );
};

export default page;
