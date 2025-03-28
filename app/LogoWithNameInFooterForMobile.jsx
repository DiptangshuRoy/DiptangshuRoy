"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";

function Logo() {
  let a = '</>'

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
    <>
      {/* <Link href='#DiptangshuRoy'> */}
        <button onClick={handleClick}>
          <header className="flex items-center gap-3.5 text-2xl text-white whitespace-nowrap
                            max-md:gap-2.5">
            <div className="flex flex-col justify-center items-center rounded-full border-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] 
                          fill-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] h-[49px] stroke-[1px] stroke-indigo-400 w-[49px]">
              <Image className='rounded-full' src='/MyPhoto.png' height={40} width={40} alt=''></Image>
            </div>
            <h2 id='DiptangshuRoy' className="text-2xl text-white mt-2
                                          max-md:text-base">
              Diptangshu Roy {a}
            </h2>
          </header>
        </button>
      {/* </Link > */}
    </>
  );
}

export default Logo;