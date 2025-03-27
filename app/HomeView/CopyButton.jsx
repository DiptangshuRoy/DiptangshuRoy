"use client";
import { useState } from "react";
import Image from "next/image";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <div className="absolute flex justify-center items-center gap-[7px] right-5 z-50">
        <span className="text-sm text-stone-400">diptangshuroybusiness@gmail.com</span>
        <button
          onClick={handleCopy}
          className="relative rounded-md active:bg-white transition cursor-copy">
          <Image src='/copy.png' height={13} width={13} />
          {/* {copied ? "Copied!" : "Copy"} */}
          {copied && (
            <span className="absolute -top-7 left-0 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded-md">
              Copied!
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default CopyButton;
