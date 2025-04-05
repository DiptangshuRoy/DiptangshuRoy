import * as React from "react";
import IconItem from './IconTeam';
import Link from "next/link";
import Image from "next/image";

const IconGroup = ({ icons }) => {
  return (
    <>
      <section className="flex w-5/12 min-w-80 gap-2 justify-center items-center max-md:gap-5">
        {icons.map((icon, index) => (
          <Link key={index} href={icon.href} target="_blank" rel="noopener noreferrer"
            className="transition hover:scale-105 duration-200 ease-in-out">
            <IconItem key={index} src={icon.src} alt={icon.alt} />
          </Link>
        ))}
      </section>
    </>
  );
};

export default IconGroup;