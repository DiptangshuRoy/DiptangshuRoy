import * as React from "react";

const IconItem = ({ src, alt }) => {
  return (
    <div
      className="flex gap-1.5 justify-center items-center self-stretch px-4 py-2 my-auto bg-zinc-800 rounded-[40px] w-[52px] outline-none"
      role="button"
      tabIndex="0"
    >
      <img loading="lazy" src={src} alt={alt} className="object-contain self-stretch my-auto w-5 aspect-square" />
    </div>
  );
};

export default IconItem;