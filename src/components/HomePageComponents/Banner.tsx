import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center dark:bg-gray-900 bg-gray-100"
      style={{
        backgroundImage: "url(/images/background.png)", // Set background image
        backgroundSize: "cover", // Cover the container without distortion
        backgroundPosition: "center", // Center the image
        height: "998px", // Set height to 998px as required
      }}
    >
      {/* Centered Content */}
      <div className="relative flex flex-col items-center w-full max-w-4xl p-8 sm:p-20">
        <h1 className="text-3xl sm:text-[60px] font-bold text-center text-gray-900 dark:text-gray-100 mb-6 leading-tight sm:leading-[90px]">
          Powerful In-Depth Analytics for Instagram
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
          Sociallyser offers powerful in-depth analytics and actionable insights
          for brands, influencers, and agencies.
        </p>

        {/* Rounded Input with Button Inside */}
        <div className="relative w-full max-w-md mb-12">
          <input
            type="text"
            placeholder="Search any account"
            className="w-full p-4 pr-24 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
            style={{ paddingRight: "4rem" }} // Add extra padding to make room for button
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-8 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:ring-2 focus:ring-red-500">
            Find
          </button>
        </div>

        {/* Foreground Analytics Image */}
        <div className="relative w-full max-w-3xl mt-16">
          <div className="flex justify-center">
            <Image
              src="/images/top-image.png"
              alt="Analytics Overview"
              width={900} // Adjust width for appropriate scaling
              height={400} // Adjust height to control image size
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
