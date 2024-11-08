"use client";
import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaChevronDown } from "react-icons/fa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { RiSearch2Line } from "react-icons/ri";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
    if (isDark) document.body.classList.add("dark");
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <header
      className={`flex items-center justify-between p-4 md:px-20 shadow-xl dark:border-gray-700 ${
        darkMode ? "bg-[#2E2B2B]" : "bg-white"
      } dark:bg-[#2E2B2B]`}
    >
      <div className="flex items-center">
        <img
          src="images/logo-original.png"
          alt="Social Hipper Logo"
          className="h-5"
        />
        <div className="relative flex items-center ml-8">
          <Input type="text" placeholder="Search Profile" className="" />
          <div className="absolute left-0 flex items-center justify-center w-10 h-10 bg-[#FF4500] rounded-l-full">
            <RiSearch2Line className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <nav className="flex items-center space-x-6">
        <a
          href="#contributors"
          className={`hover:text-red-500 ${
            darkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          Top Contributors
        </a>
        <a
          href="#pricing"
          className={`hover:text-red-500 ${
            darkMode ? "text-gray-300" : "text-gray-800"
          } border-r border-gray-200 dark:border-gray-700 pr-4`}
        >
          Pricing
        </a>
        <div className="flex items-center relative">
          <select
            className={`bg-transparent outline-none appearance-none px-1 pr-1 ${
              darkMode ? "text-gray-300" : "text-gray-800"
            } hover:text-red-500 cursor-pointer`}
          >
            <option value="EN">EN</option>
            <option value="HIN">HINDI</option>
          </select>
          <FaChevronDown
            className={`absolute right-1 pointer-events-none ${
              darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          />
        </div>
        <input
          type="checkbox"
          className="checkbox hidden"
          id="checkbox"
          checked={darkMode}
          onChange={handleToggle}
        />
        <label htmlFor="checkbox" className="checkbox-label">
          <span className="ball">
            {darkMode ? (
              <FaMoon className="icon text-white" />
            ) : (
              <FaSun className="icon text-yellow-500" />
            )}
          </span>
        </label>
        <Button variant="orange">Sign Up</Button>
      </nav>
    </header>
  );
}
