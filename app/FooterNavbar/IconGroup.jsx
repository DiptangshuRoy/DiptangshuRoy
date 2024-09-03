import * as React from "react";
import IconItem from './IconTeam';
import Link from "next/link";

const IconGroup = ({ icons }) => {
  return (
    <section className="flex w-5/12 min-w-80 gap-10 justify-center items-center py-1.5 border-2 border-indigo-400 border-solid bg-zinc-900 rounded-[290px] 
                        max-sm:gap-5 max-md:gap-5 transition hover:scale-110">
      {icons.map((icon, index) => (
        <Link key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
          <IconItem key={index} src={icon.src} alt={icon.alt} />
        </Link>
      ))}
    </section>
  );
};

export default IconGroup;