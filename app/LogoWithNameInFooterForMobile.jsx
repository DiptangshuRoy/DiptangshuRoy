import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <>
      <Link href='#DiptangshuRoy'>
        <header className="flex items-center gap-3.5 text-2xl text-white whitespace-nowrap
                            max-md:gap-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7181cf828b5f313fb11080fbe11a068360b7c91ed2a86e5bbaba08aaae9affb?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
            className="object-contain shrink-0 my-auto aspect-[1.3] w-[39px]
                        max-md:w-6"
            alt="Portfolio logo"
          />
          <h1 id='DiptangshuRoy' className="text-2xl text-white
                                          max-md:text-base">
            Diptangshu Roy
          </h1>
        </header>
      </Link>
    </>
  );
}

export default Logo;