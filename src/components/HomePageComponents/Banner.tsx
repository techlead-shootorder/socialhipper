import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      className="relative z-0 pt-36  flex flex-col items-center  justify-center dark:bg-gray-900 bg-gray-100 h-[600] sm:h-[998px]"
      style={{
        backgroundImage: "url(/images/background.png)", // Set background image
        backgroundSize: "cover", // Cover the container without distortion
        backgroundPosition: "center", // Center the image
      
      }}
    >
      {/* Centered Content */}
      <div className="relative flex flex-col items-center w-full max-w-4xl px-4 sm:px-0">
        <h1 className="text-2xl sm:text-[60px] font-bold text-center text-gray-900 dark:text-gray-700 mb-4 sm:mb-6 leading-tight sm:leading-[90px] mt-4 sm:mt-20">
          Powerful In-Depth<br /> Analytics for Instagram
        </h1>
        <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-700 mb-6 sm:mb-8 max-w-md">
          Sociallyser offers powerful in-depth analytics and actionable insights
          for brands, influencers, and agencies.
        </p>

        {/* Rounded Input with Button Inside */}
        <div className="relative w-full max-w-md mb-8 sm:mb-12">
          <input
            type="text"
            placeholder="Search any account"
            className="w-full p-3 sm:p-4 pr-24 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
            style={{ paddingRight: "4rem" }}
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 sm:px-8 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:ring-2 focus:ring-red-500">
            Find
          </button>
        </div>

        {/* Foreground Analytics Image */}
        <div className="relative w-full mt-12  md:mb-12">
          <div className="flex justify-center">
            <Image
              src="/images/top-image.png"
              alt="Analytics Overview"
              width={1200} // Reduced width for mobile
              height={400} // Reduced height for mobile
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
