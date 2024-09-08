import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function Logo() {
  let a = '</>'
  return (
    <>
      <Link href='#DiptangshuRoy'>
        <header className="flex items-center gap-3.5 text-2xl text-white whitespace-nowrap
                            max-md:gap-2.5">
          <div className="flex flex-col justify-center items-center rounded-full border-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] 
                          fill-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] h-[49px] stroke-[1px] stroke-indigo-400 w-[49px]">
            <Image className='rounded-full' src='/MyPhoto.png' height={40} width={40} alt=''></Image>
          </div>
          <h2 id='DiptangshuRoy' className="text-2xl text-white mt-2
                                          max-md:text-base">
            Diptangshu Roy {a}
          </h2>
        </header>
      </Link>
    </>
  );
}

export default Logo;