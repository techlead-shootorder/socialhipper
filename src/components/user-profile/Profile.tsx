import React from "react";
import { Button } from "../ui/button";
import {
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import { HiOutlineLockOpen } from "react-icons/hi";
import { RiGroupLine } from "react-icons/ri";
import { BiMessageAltMinus } from "react-icons/bi";


const UserProfile = () => {
  return (
    <div className="dark:bg-[#2E2B2B] bg-white p-6 py-16 rounded-[25px] md:mx-20 mt-16 shadow-md flex flex-col md:flex-row justify-between">
      {/* Left Section */}
      <div className="flex flex-col justify-between gap-8 md:w-1/2">
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
            <p className="text-sm text-gray-400">
              Digital Marketer | Content Creator
            </p>
            <p className="text-xs text-gray-500">
              Founder @shortcoder | #DigitalMarketing Consultant, #SocialMedia
              Expert, #Influencer
            </p>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex items-center gap-20">
          <div className="flex gap-8 mt-4 text-gray-500">
            <FaFacebook size={20} />
            <FaTwitter size={20} />
          </div>
          <div className="flex gap-2 mt-4">
            <Button variant="customGray">Digital Marketing</Button>
            <Button variant="customGray">Technology</Button>
            <Button variant="customGray">Business</Button>
          </div>
        </div>

        {/* Tags */}
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col justify-between">
        {/* Tracking Info and Claim Button */}
        <div className="flex justify-between items-center">
          <p className="text-xs text-black dark:text-white leading-[14.52px] font-[400] ">
            Tracked since Sep 23, 2024. Updated 7 hours ago.
          </p>
          <Button variant="orange">
            <HiOutlineLockOpen /> Claim
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-4 mt-4">
          {/* Followers */}
          <div className="flex-1 p-4 dark:bg-[#1A1919] shadow-md text-left rounded-xl">
            <div className="flex items-center justify-start gap-2">
              <p className="text-2xl font-bold">
                561 <span className="text-lg text-green-500">+1 (0.2%)</span>
              </p>
            </div>
            <p className="text-md text-[#4F4F4F] mt-4 dark:text-white font-bold flex items-center ">
              <RiGroupLine className=" mr-3" size={24} /> Followers
            </p>
          </div>
          {/* Posts */}
          <div className="flex-1 p-4 dark:bg-[#1A1919] shadow-md text-left rounded-xl">
            <div className="flex items-center justify-start gap-2">
              <p className="text-2xl font-bold">
                153 <span className="text-lg text-green-500">+1 (0.2%)</span>
              </p>
            </div>
            <p className="text-md text-[#4F4F4F] mt-4 dark:text-white font-bold flex items-center ">
              <BiMessageAltMinus className=" mr-3" size={24} /> Posts
            </p>
          </div>
          {/* Engagement */}
          <div className="flex-1 p-4 dark:bg-[#1A1919] shadow-md rounded-xl text-left">
            <div className="flex items-center justify-start gap-2">
              <p className="text-2xl font-bold">
                14.71% <span className="text-lg text-green-500">+1 (0.2%)</span>
              </p>
            </div>
            <p className="text-md text-[#4F4F4F] mt-4 dark:text-white font-bold flex items-center ">
              <RiGroupLine className=" mr-3" size={24} /> Engagement
            </p>
          </div>
        </div>

        {/* Engagement Bar */}
        <div className="mt-5 h-[15px] bg-gray-600 rounded-full overflow-hidden ">
          <div className="bg-[#EE2020] h-full w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
