"use client"; // Ensure this runs on the client side

import { useState } from "react";

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition relative"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
