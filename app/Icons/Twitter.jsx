import Link from "next/link";
import React from "react";

function Twitter() {
  return (
    <Link href='https://x.com/DiptangshuRoy_' target="_blank" className="">
      <div className="p-[2px] bg-white rounded-full">
        <div className="p-[14px] bg-black rounded-full bg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6700bede2fba8d187475c5b5d13491866dfc81d662fc063d56c2a53c83d4d7a?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
            alt="Twitter"
            className="object-contain w-full aspect-[1.2] max-w-[35px] transition hover:scale-110  max-md:w-[30px]"
          />
        </div>
      </div>
    </Link>
  );
}

export default Twitter;