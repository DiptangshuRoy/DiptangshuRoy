import Link from 'next/link';
import React from 'react';

import { MorphingText } from "@/components/magicui/morphing-text";
const texts = [
  "Hi,",
  "I am_",
  "Diptangshu Roy",
  "Welcomee\"",
  "to my portfolio",
];

function Logo() {
  return (
    <>
      <Link href='/' className='flex items-center'>
        <header className="flex max-md:mt-3 items-center gap-3.5 text-2xl text-white whitespace-nowrap transition hover:scale-105">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7181cf828b5f313fb11080fbe11a068360b7c91ed2a86e5bbaba08aaae9affb?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
            className="object-contain shrink-0 my-auto aspect-[1.3] w-[39px]"
            alt="Portfolio logo"
          />
          <h2 id='DiptangshuRoy' className=" text-white ">
            <div className='max-xl:block hidden'>
              Diptangshu Roy
            </div>
            <div className='max-xl:hidden'>
              <MorphingText texts={texts} />
            </div>
            {/* MorphingText is relative position */}
          </h2>
        </header>
      </Link>
    </>
  );
}

export default Logo;