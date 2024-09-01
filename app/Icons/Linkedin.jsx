import Link from 'next/link';
import React from 'react';

function Linkedin() {
  return (
    <Link href='https://www.linkedin.com/in/diptangshuroy' target='_blank'>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/50e0203e931bae2a7ddfc1a15ec6c7ef9d04fb41821a193c0590390a9b8624ec?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
        className="object-contain w-full aspect-square max-w-[48px]"
        alt="Linkedin"
      />
    </Link>
  );
}

export default Linkedin;