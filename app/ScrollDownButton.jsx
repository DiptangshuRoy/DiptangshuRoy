"use client";

import { useEffect, useState } from "react";

export default function ScrollDownButton() {
  const [isBouncing, setIsBouncing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsBouncing(true);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  const handleScroll = () => {
    setIsBouncing(false);
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: "smooth",
    });

    setTimeout(() => {
      if (!isNearBottom()) {
        setIsBouncing(true);
      }
    }, 4000);
  };

  // Hide the button when close to the bottom
  const isNearBottom = () => {
    const threshold = 40; // Adjust this value for earlier hiding
    return (
      document.body.offsetHeight - window.innerHeight - window.scrollY < threshold
    );
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollThreshold = 200; // Adjust threshold for first appearance

      if (!isNearBottom()) {
        setIsVisible(true); // Always visible unless near the bottom
      } else {
        setIsVisible(false); // Hide near the bottom
      }

      if (isNearBottom()) {
        setIsBouncing(false);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <button
      onClick={handleScroll}
      className={`fixed bottom-[10px] right-8 text-stone-300 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-110 z-40 max-md:right-1 max-md:bottom-2 max-md:scale-75
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"} 
        outline-none focus:ring-0 focus:outline-none`}
    >
      <lord-icon
        src="https://cdn.lordicon.com/xcrjfuzb.json"
        trigger="loop"
        delay="3500"
        colors="primary:#fae6d1"
        style={{ width: 40, height: 40 }}
      ></lord-icon>
    </button>
  );
}
