import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Button } from '../ui/button';

const Tabs = () => {
  return (
    <div className="flex items-center flex-wrap justify-between p-4 mt-12 rounded-lg bg-white md:mx-20 dark:bg-[#2E2B2B] space-x-4">
      {/* Social Media Buttons */}
      <div className="flex space-x-4">
        <Button className="flex items-center gap-2 bg-gray-200 text-black">
          <FaInstagram className="text-black" /> Instagram
        </Button>
        <Button className="flex items-center gap-2 bg-gray-200 text-black">
          <FaTwitter className="text-black" /> Twitter
        </Button>
        <Button className="flex items-center gap-2 bg-gray-200 text-black">
          <FaLinkedin className="text-black" /> LinkedIn
        </Button>
        <Button className="flex items-center gap-2 bg-gray-200 text-black">
          <FaYoutube className="text-black" /> YouTube
        </Button>
      </div>

      {/* Right Side Options */}
      <div className="flex items-center space-x-4">
        <Button variant="custom">Overview</Button>
        <Button variant="custom">Future Projections</Button>
        <Button variant="custom">Engagement Stats</Button>
        <Button variant="custom">Media Stats</Button>
        <Button variant="default" className='rounded-full bg-black dark:bg-black dark:text-white'>More</Button>
      </div>
    </div>
  );
}

export default Tabs;
