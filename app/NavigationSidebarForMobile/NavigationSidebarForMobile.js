// "use client"
// import React from 'react'
// import Link from 'next/link'
// import Round from '../Icons/Round'

// const NavigationSidebarForMobile = () => {
//   return (
//     <section id='NavigationSidebarForMobile' className='hidden w-[89vw] h-[37vh] bg-slate-900 p-7 rounded-2xl m-5'>
//       <ul className="flex flex-col gap-10 list-none">
//         <div>
//           <li><Link className='text-xl' href="/#SomeFeaturedProjects">Projects</Link></li>
//           <hr />
//         </div>
//         <div>
//           <li><Link className='text-xl' href="/#SendAMessage">Contact me</Link></li>
//           <hr />
//         </div>
//         <div>
//           <div className='flex gap-4 items-center'>
//             <li><Link className='text-xl' href="/techresources_route">Tech Resources</Link></li>
//             <Round />
//           </div>
//           <hr />
//         </div>
//       </ul>
//     </section>
//   )
// }

// export default NavigationSidebarForMobile;


"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Round from "../Icons/Round";
// import IconButton from './IconButton';
import IconButton from "../NavbarButtonForMobile/IconButton";

const NavigationSidebarForMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scrolling when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <div
        onClick={() => setIsOpen(true)}
        className="z-50 fixed right-4 top-5 flex gap-8 justify-center items-center  border-indigo-400 border-solid bg-zinc-900 border-2 rounded-[218.975px] "
      >
        <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/a66523dde5546ab3ab9c8f9ab112900630213634381d824e1178f20253ff22a0?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39" alt="Navigation icon" />
      </div>

      {/* Overlay (Blur Background) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"
          onClick={() => setIsOpen(false)} // Clicking outside closes the menu
        ></div>
      )}

      {/* Sidebar */}
      <motion.section
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-screen h-screen bg-transparent p-7 rounded-l-2xl shadow-2xl z-50"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-3 text-white text-xl bg-black font-bold py-2 px-4 rounded-full"
        >
          ✕
        </button>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-3 list-none float-right mt-12">
          <div>
            <li>
              <Link className="flex float-right text-lg font-sans text-white" href="/#SomeFeaturedProjects">
                Projects
              </Link>
            </li>
          </div>
          <div className=" bg-zinc-500 p-[0.1px]"></div>
          <div>
            <li>
              <Link className=" flex float-right text-lg font-sans text-white" href="/#SendAMessage">
                Contact me
              </Link>
            </li>
          </div>
          <div className=" bg-zinc-500 p-[0.1px]"></div>
          <div>
            <div className="flex gap-4 items-center">
              <li>
                <Link className=" flex float-right items-center gap-9 text-lg font-sans text-white" href="/techresources_route">
                  <Round />
                  Personal Tech Resources
                </Link>
              </li>
            </div>
          </div>
            {/* <div className=" bg-white p-[0.1px]"></div> */}
        </ul>
      </motion.section>
    </>
  );
};

export default NavigationSidebarForMobile;
