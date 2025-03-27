import Link from 'next/link';
import React from 'react';

function Linkedin() {
  return (
    <Link href='https://www.linkedin.com/in/diptangshuroy' target='_blank'>
      <div className="p-[2px] bg-white rounded-full">
        <div className="p-[14px] bg-black rounded-full bg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/50e0203e931bae2a7ddfc1a15ec6c7ef9d04fb41821a193c0590390a9b8624ec?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
            className="object-contain w-full aspect-square max-w-[35px] transition hover:scale-110  max-md:w-[30px]"
            alt="Linkedin"
          />
        </div>
      </div>
    </Link>
  );
}

export default Linkedin;