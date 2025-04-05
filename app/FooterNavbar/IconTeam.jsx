import * as React from "react";

const IconItem = ({ src, alt }) => {
  return (
    <div
      className="flex gap-1.5 justify-center items-center self-stretch my-auto w-[52px] outline-none"
      role="button"
      tabIndex="0"
    >
      <img loading="lazy" src={src} alt={alt} className="object-contain self-stretch my-auto w-5 aspect-square brightness-75 hover:brightness-200 transition duration-200" />
    </div>
  );
};

export default IconItem;