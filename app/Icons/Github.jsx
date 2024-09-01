import Link from "next/link";
import React from "react";

function Github() {
  return (
    <Link href='https://github.com/DiptangshuRoy' target="_blank">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a376ccd3c0d8a0144a9f010b23a2a54d453b8c757414b561b86e3f5e19a9321a?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
        alt="Github"
        className="object-contain w-full aspect-[1.02] max-w-[48px]"
      />
    </Link>
  );
}

export default Github;