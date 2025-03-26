"use client";

import { useEffect, useState } from "react";

export default function ScrollDownButton() {
  const [isBouncing, setIsBouncing] = useState(false); // Initially false

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsBouncing(true); // Start bouncing after 3 seconds
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  const handleScroll = () => {
    setIsBouncing(false); // Stop animation when clicked
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: "smooth",
    });

    // Restart animation after 4 seconds if not clicked again and not at bottom
    setTimeout(() => {
      if (!isAtBottom()) {
        setIsBouncing(true);
      }
    }, 4000);
  };

  const isAtBottom = () => {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY === 0) {
        setIsBouncing(true); // Restart animation when back at the top
      } else if (isAtBottom()) {
        setIsBouncing(false); // Stop animation at the bottom
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <button
      onClick={handleScroll}
      className={`z-50 fixed bottom-5 right-8 px-6 py-3 rounded-full bg-stone-700 text-stone-300 text-lg font-semibold shadow-lg transition-all duration-300 
        border-2 border-transparent hover:bg-indigo-800 hover:scale-105 hover:border-yellow-400 ${
          isBouncing ? "animate-bounce" : ""
        } outline-none focus:ring-0 focus:outline-none`}
    >
      ↓
    </button>
  );
}
