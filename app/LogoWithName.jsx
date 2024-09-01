import React from 'react';

function Logo() {
  return (
    <>
      <header className="flex gap-3.5 text-2xl text-white whitespace-nowrap items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7181cf828b5f313fb11080fbe11a068360b7c91ed2a86e5bbaba08aaae9affb?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
          className="object-contain shrink-0 my-auto aspect-[1.3] w-[39px]"
          alt="Portfolio logo"
        />
        <h1 id='DiptangshuRoy' className="text-2xl text-white
                                          max-md:text-xl">
          Diptangshu Roy
        </h1>
      </header>
    </>
  );
}

export default Logo;