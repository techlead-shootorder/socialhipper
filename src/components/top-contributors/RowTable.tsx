// components/ProfileCard.tsx

import { BiMessageAltMinus } from "react-icons/bi";
import { Button } from "../ui/button";
import { RiGroupLine } from "react-icons/ri";

export default function RowTable() {
  return (
    <div className="grid grid-cols-12 gap-16 items-center my-8 p-6 bg-white rounded-[15px] shadow-md md:mx-20">
      {/* Profile Picture and Basic Info */}
      <div className="col-span-2 flex flex-col items-center">
        <div className="relative">
          <img
            src="/images/profile.jpeg"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <span className="absolute top-1 right-1 bg-blue-500 text-white rounded-full  px-1 text-xs">
            ✓
          </span>
        </div>
        <div className="mt-3 text-center">
          <p className="font-semibold text-lg">Rajat Jain</p>
          <p className="text-sm text-gray-500">Hyderabad, India</p>
        </div>
      </div>

      {/* Statistics Section - Middle, occupies 7 columns */}
      <div className="col-span-8 grid grid-cols-3 gap-4">
        {/* Followers */}
        <div className="flex flex-col p-4 dark:bg-[#1A1919] shadow-md text-left rounded-xl">
          <div className="flex items-center justify-start gap-2">
            <p className="text-[32px] font-bold">
              561{" "}
              <span className="text-[16px] text-green-500">+1 (0.2%)</span>
            </p>
          </div>
          <p className="text-md text-[#4F4F4F] mt-4 dark:text-white font-bold flex items-center">
            <RiGroupLine className="mr-3" size={24} /> Followers
          </p>
        </div>

        {/* Posts */}
        <div className="flex flex-col p-4 dark:bg-[#1A1919] shadow-md text-left rounded-xl">
          <div className="flex items-center justify-start gap-2">
            <p className="text-[32px] font-bold">
              153{" "}
              <span className="text-[16px] text-green-500">+1 (0.2%)</span>
            </p>
          </div>
          <p className="text-md text-[#4F4F4F] mt-4 dark:text-white font-bold flex items-center">
            <BiMessageAltMinus className="mr-3" size={24} /> Posts
          </p>
        </div>

        {/* Engagement */}
        <div className="flex flex-col p-4 dark:bg-[#1A1919] shadow-md text-left rounded-xl">
          <div className="flex items-center justify-start gap-2">
            <p className="text-[32px] font-bold">
              14.71%{" "}
              <span className="text-[16px] text-green-500">+1 (0.2%)</span>
            </p>
          </div>
          <p className="text-md text-[#4F4F4F] mt-4 dark:text-white font-bold flex items-center">
            <RiGroupLine className="mr-3" size={24} /> Engagement
          </p>
        </div>
      </div>

      {/* Action Buttons - Right, occupies 3 columns */}
      <div className="col-span-2 flex flex-col space-y-4">
        <Button variant="orange" className="rounded-[15px]">Get Report</Button>
        <Button variant="outline" className="w-full rounded-[15px]">
          View Contacts
        </Button>
      </div>
    </div>
  );
}
