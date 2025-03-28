"use client";

import React from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";

function GoToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div onClick={handleScrollToTop}>
      <Button
        onClick={handleClick}
        className="gap-1.5 self-stretch px-5 py-3.5 text-base font-medium text-center text-black border border-indigo-400 border-solid bg-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] rounded-[40px] outline-none max-md:scale-90"
      >
        Go to Top
      </Button>
    </div>
  );
}

export default GoToTopButton;
