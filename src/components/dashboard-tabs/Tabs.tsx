"use client";
import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Button } from "../ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineDown } from "react-icons/ai";

type Tab = "overview" | "projections" | "engagement" | "media" | "influencer" | "social";

interface TabsProps {
  onTabSelect: (tab: Tab) => void;
}

const Tabs: React.FC<TabsProps> = ({ onTabSelect }) => {
  const [selectedTab, setSelectedTab] = useState<Tab>("overview");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleTabClick = (tab: Tab) => {
    setSelectedTab(tab);
    onTabSelect(tab); // Notify the parent component of the selected tab
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex items-center flex-wrap justify-between p-4 mt-12 rounded-lg bg-white md:mx-20 dark:bg-[#2E2B2B] space-x-4 relative">
      {/* Social Media Buttons */}
      <div className="flex space-x-4">
        <Button variant="orange" className="flex items-center rounded-[15px]">
          <FaInstagram /> Instagram
        </Button>
        <Button className="flex items-center gap-2 bg-gray-200 text-black rounded-[15px]">
          <FaXTwitter className="text-black" /> Twitter
        </Button>
        <Button className="flex items-center gap-2 bg-gray-200 text-black rounded-[15px]">
          <FaLinkedin className="text-black" /> LinkedIn
        </Button>
        <Button className="flex items-center gap-2 bg-gray-200 text-black rounded-[15px]">
          <FaYoutube className="text-black" /> YouTube
        </Button>
      </div>

      {/* Tab Buttons */}
      <div className="flex items-center space-x-4">
        <Button
          variant="custom"
          className={`font-bold ${selectedTab === "overview" ? "text-orange-600" : ""}`}
          onClick={() => handleTabClick("overview")}
        >
          Overview
        </Button>
        <Button
          variant="custom"
          className={`font-bold ${selectedTab === "projections" ? "text-orange-600" : ""}`}
          onClick={() => handleTabClick("projections")}
        >
          Future Projections
        </Button>
        <Button
          variant="custom"
          className={`font-bold ${selectedTab === "engagement" ? "text-orange-600" : ""}`}
          onClick={() => handleTabClick("engagement")}
        >
          Engagement Stats
        </Button>
        <Button
          variant="custom"
          className={`font-bold ${selectedTab === "media" ? "text-orange-600" : ""}`}
          onClick={() => handleTabClick("media")}
        >
          Media Stats
        </Button>

        {/* More Button with Dropdown */}
        <div className="relative">
          <Button
            variant="default"
            className="flex items-center gap-2 rounded-full bg-black font-bold dark:bg-black dark:text-white"
            onClick={toggleDropdown}
          >
            More <AiOutlineDown />
          </Button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleTabClick("influencer")}
              >
                Influencer Stats
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleTabClick("social")}
              >
                Social Stats
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
