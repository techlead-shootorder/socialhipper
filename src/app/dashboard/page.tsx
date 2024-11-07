import StatsSection from "@/components/dashboard-chart/Chart";
import Tabs from "@/components/dashboard-tabs/Tabs";
import Summary from "@/components/Faqs/Summary";
import ImportantUpdate from "@/components/ImportantUpdate/ImportantUpdate";
import StatsCards from "@/components/stats-card/StatsCard";
import HashTags from "@/components/tags/HashTags";
import UserProfile from "@/components/user-profile/Profile";
import React from "react";

const page = () => {
  return (
    <div>
      <ImportantUpdate />
      <Tabs />
      <UserProfile />
      <StatsCards />
      <StatsSection />
      <HashTags />
      <Summary/>
    </div>
  );
};

export default page;
