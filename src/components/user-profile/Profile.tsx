import React from "react";
import { Button } from "../ui/button";
import { FaFacebook, FaTwitter, FaInstagram, FaUserFriends, FaRegFileAlt, FaChartLine } from "react-icons/fa";
import Image from "next/image";

const UserProfile = () => {
  return (
    <div className="dark:bg-[#2E2B2B] bg-white p-6 rounded-lg md:mx-20 mt-10 shadow-md flex flex-col md:flex-row justify-between">
      {/* Left Section */}
      <div className="flex flex-col gap-4 md:w-1/2">
        {/* Profile Image and Info */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/profile.jpeg"
            width={64}
            height={64}
            alt="Profile"
            className="rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold flex items-center">
              Rajat Jain <span className="ml-2">⭐</span>
            </h2>
            <p className="text-sm text-gray-400">Digital Marketer | Content Creator</p>
            <p className="text-xs text-gray-500">
              Founder @shortcoder | #DigitalMarketing Consultant, #SocialMedia Expert, #Influencer
            </p>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex gap-2 mt-4 text-gray-500">
          <FaFacebook size={20} />
          <FaTwitter size={20} />
          <FaInstagram size={20} />
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-4">
          <Button variant='default'>Digital Marketing</Button>
          <Button variant="default">Technology</Button>
          <Button variant="default">Business</Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col justify-between">
        {/* Tracking Info and Claim Button */}
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">Tracked since Sep 23, 2024. Updated 7 hours ago.</p>
          <Button className="bg-red-500 text-white">Claim</Button>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-4 mt-4">
          {/* Followers */}
          <div className="flex-1 p-4 shadow-md text-center">
            <div className="flex items-center justify-center gap-2">
              <FaUserFriends className="text-gray-500" size={16} />
              <p className="text-2xl font-bold">561</p>
            </div>
            <p className="text-sm text-gray-400">Followers</p>
            <p className="text-xs text-green-500">+1 (0.2%)</p>
          </div>
          {/* Posts */}
          <div className="flex-1 p-4 shadow-md text-center">
            <div className="flex items-center justify-center gap-2">
              <FaRegFileAlt className="text-gray-500" size={16} />
              <p className="text-2xl font-bold">153</p>
            </div>
            <p className="text-sm text-gray-400">Posts</p>
            <p className="text-xs text-green-500">+1 (0.2%)</p>
          </div>
          {/* Engagement */}
          <div className="flex-1 p-4 shadow-md text-center">
            <div className="flex items-center justify-center gap-2">
              <FaChartLine className="text-gray-500" size={16} />
              <p className="text-2xl font-bold">14.71%</p>
            </div>
            <p className="text-sm text-gray-400">Engagement</p>
            <p className="text-xs text-green-500">+1 (0.2%)</p>
          </div>
        </div>

        {/* Engagement Bar */}
        <div className="mt-4 h-2 bg-gray-600 rounded-full overflow-hidden">
          <div className="bg-red-500 h-full w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
