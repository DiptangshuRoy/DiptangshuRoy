"use client";

import React from "react";

function GoToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="gap-1.5 self-stretch px-5 py-3.5 text-base font-medium text-center text-black border border-indigo-400 border-solid bg-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] rounded-[40px] outline-none"
    >
      Go to Top
    </button>
  );
}

export default GoToTopButton;
