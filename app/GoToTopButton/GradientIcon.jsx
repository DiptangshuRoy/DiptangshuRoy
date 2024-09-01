import React from 'react';

function GradientIcon() {
  return (
    <div className="flex flex-col justify-center items-center px-2.5 rounded-full bg-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] fill-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] h-[49px] stroke-[1px] stroke-indigo-400 w-[49px]">
      <div className="flex overflow-hidden flex-col px-1 py-0.5">
        <div className="flex shrink-0 w-2 h-2 rounded-full border-2 border-black border-solid" />
        <div className="flex shrink-0 h-2 rounded-full border-2 border-black border-solid" />
      </div>
    </div>
  );
}

export default GradientIcon;