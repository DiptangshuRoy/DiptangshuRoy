"use client";
import React from "react";
import { ConfettiButton } from "@/components/magicui/confetti";

const GoDownButton = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight + 9, // Scrolls down by one full viewport height
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center items-center w-full max-md:hidden">
      <div className="relative"
        onClick={handleScroll}>
        <ConfettiButton
          options={{
            get angle() {
              return Math.random() * 360;
            },
          }}
          className="flex justify-center items-center gap-2 mt-7 bg-slate-200 text-black px-5 py-[6px] rounded-md font-sans text-xl leading-none font-medium shadow-md hover:bg-white transition-all duration-[850ms]"
        >
          <lord-icon
            src="https://cdn.lordicon.com/xcrjfuzb.json"
            trigger="loop"
            colors="primary:#6c16c7"
            delay="2000"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
          Go Down
        </ConfettiButton>
      </div>
    </div>
  );
};

export default GoDownButton;
