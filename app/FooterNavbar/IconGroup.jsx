import * as React from "react";
import IconItem from './IconTeam';

const IconGroup = ({ icons }) => {
  return (
    <section className="flex w-5/12 min-w-80 gap-10 justify-center items-center py-1.5 border-indigo-400 border-solid bg-zinc-900 border-[1.5px] rounded-[290px] 
                        max-sm:gap-5 max-md:gap-5">
      {icons.map((icon, index) => (
        <IconItem key={index} src={icon.src} alt={icon.alt} />
      ))}
    </section>
  );
};

export default IconGroup;