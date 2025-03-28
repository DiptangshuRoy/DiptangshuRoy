"use client";
import React, { useState } from "react";

const WarningForMobile = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Hide the component when closed

  return (
    <div className="md:hidden  bg-orange-400 flex justify-center items-center gap-2 px-4">
      <p className="text-[8.5px] leading-none font-sans font-light">
        Please disable any kind of dark-mode extensions to get the best possible experience
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className=" scale-50 w-5 h-4 flex items-center justify-center rounded-full bg-white text-[8.5px] font-bold text-black shadow-md border border-gray-300"
      >
        ✕
      </button>
    </div>
  );
};

export default WarningForMobile;
