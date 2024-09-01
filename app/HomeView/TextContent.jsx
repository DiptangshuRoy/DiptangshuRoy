import Image from "next/image";
import Link from "next/link";
import React from "react";
import Twitter from "../Icons/Twitter";
import X from "../Icons/X";
import Github from "../Icons/Github";
import Linkedin from "../Icons/Linkedin";

function TextContent() {
  return (
    <div className="flex flex-col items-center px-44 mt-5 max-md:px-5 max-md:max-w-full
                    max-sm:mt-0 max-md:mt-0">
      <h1 className="text-3xl leading-[56px] max-md:max-w-full">
        I am a Full Stack Developer_
      </h1>
      <span className="mt-3 leading-6 max-md:max-w-full text-center">
        I use MERN technologies to seamlessly build websites with both backend and frontend components.
        {/* <Image className="ml-[2px] mr-1
                          max-2xl:hidden" src='Techicons/React.svg' height={25} width={25} alt=""></Image> */}
      </span>
      {/* <button className="py-2.5 pr-7 pl-7 mt-3 max-w-full font-medium leading-snug border-indigo-400 border-solid bg-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] border-[1.5px] min-h-[43px] rounded-[72.09px] text-neutral-900 w-[119px] max-md:px-5">
        Hire me
      </button> */}
      <div className="flex gap-10 mt-10 justify-center items-center
                      max-sm:mt-14 max-md:mt-14">
        <Github />
        <X />
        <Linkedin />
        {/* <Twitter /> */}
      </div>
    </div>
  );
}

export default TextContent;