import React from 'react';
import Image from 'next/image';

import { CoolMode } from "@/components/magicui/cool-mode";

function GradientIcon() {
  return (
    <div title='wanna Bang🤛 me!?' className="flex flex-col justify-center items-center rounded-full border-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] 
                    fill-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] h-[49px] stroke-[1px] stroke-indigo-400 w-[49px] transition hover:scale-110 cursor-grabbing">
      {/* <div className="flex overflow-hidden flex-col px-1 py-0.5">
        <div className="flex shrink-0 w-2 h-2 rounded-full border-2 border-black border-solid" />
        <div className="flex shrink-0 h-2 rounded-full border-2 border-black border-solid" />
      </div> */}
      <CoolMode>
        <Image className='rounded-full' src='/MyPhoto.png' height={500} width={500} alt=''></Image>
      </CoolMode>
    </div>
  );
}

export default GradientIcon;