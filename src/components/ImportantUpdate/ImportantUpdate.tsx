import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const ImportantUpdate = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between bg-white dark:bg-[#2E2B2B] p-4 md:mx-20 text-center rounded-lg mt-8 w-full">
        {/* Important Update Text */}
        <div className="flex items-center justify-between">
          <Image src="/images/Vector.png" width={24} height={24} alt="vector" className="mr-2" />
          <p className="text-black dark:text-white text-[13px]">
            IMPORTANT UPDATE: Our LinkedIn integration has been enhanced for
            better performance. Refresh your connection today to keep your posts
            going out smoothly.
          </p>
        </div>

        {/* Button */}
        <Button variant="orange">Visit Channels Page</Button>
      </div>
    </div>
  );
};

export default ImportantUpdate;
