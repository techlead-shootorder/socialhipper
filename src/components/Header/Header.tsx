"use client";
import { useState, useEffect } from 'react';
import { FaMoon, FaSearch, FaSun } from 'react-icons/fa';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    if (isDark) document.body.classList.add('dark');
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <header className={`flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 ${darkMode ? "bg-[#2E2B2B]" : "bg-white"} dark:bg-[#2E2B2B]`}>
      <div className="flex items-center">
        <img src="images/logo-original.png" alt="Social Hipper Logo" className="h-5" />
        <div className="relative flex items-center ml-4">
          <Input
            type="text"
            placeholder="Search Profile"
            className=""
          />
          <div className="absolute left-0 flex items-center justify-center w-10 h-10 bg-[#FF4500] rounded-l-full">
            <FaSearch className="w-5 h-5 text-white" /> {/* White search icon */}
          </div>
        </div>
      </div>
      <nav className="flex items-center space-x-6">
        <a href="#contributors" className={`hover:text-red-500 ${darkMode ? "text-gray-300" : "text-gray-800"}`}>Top Contributors</a>
        <a href="#pricing" className={`hover:text-red-500 ${darkMode ? "text-gray-300" : "text-gray-800"} border-r border-gray-200 dark:border-gray-700 pr-4`}>Pricing</a>
        <div className="flex items-center space-x-2">
          <span className={`hover:text-red-500 ${darkMode ? "text-gray-300" : "text-gray-800"}`}>EN</span>
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
            {darkMode ? <FaMoon className="icon text-white" /> : <FaSun className="icon text-yellow-500" />}
          </span>
        </label>
        <Button variant="orange">Sign Up</Button>
      </nav>
    </header>
  );
}
