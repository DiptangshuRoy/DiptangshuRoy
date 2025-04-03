// import React from 'react';

// function ImageComponent() {
//   return (
//     <div className="flex flex-col max-w-[392px]">
//       <img 
//         loading="lazy" 
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/28bc51d059721aba6b198b7fed9b4a9046f03074c1993f150e26ee0a177b27df?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39" 
//         className="object-contain w-full aspect-square
//                     max-md:hidden" 
//         alt="Description of the image"
//       />
//     </div>
//   );
// }

// export default ImageComponent;



"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Particles  from "@/components/magicui/particles";

function ImageComponent() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#ffffff");
  }, [resolvedTheme]);

  return (
    <div className="relative  flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      {/* <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none">
        Particles
      </span> */}
      <Particles
        className="absolute inset-0 "
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
export default ImageComponent;