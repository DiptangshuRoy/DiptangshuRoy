"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Nextjs } from './Nextjs';
import { React_img } from './React_img';
import { MagicUI } from './MagicUI';
import { ShadcnUI } from './ShadcnUI';

// export const metadata = {
//   title: "Tech Resources I Utilize Daily",
//   description: "Tech resources of various technologies",
// };

const Page = () => {     // <-- Fixed here
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <>
      {showAnnouncement && (
        <div className="flex items-center justify-between bg-orange-200 px-4 py-1 text-gray-900 max-md:hidden">
          <span> </span>

          <p className="text-center font-medium">
            This page is under continuous development.
            <span className='hover:underline cursor-default'>page will get ready very soon.</span>
          </p>

          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => setShowAnnouncement(false)}
            className="rounded-full border border-gray-300 bg-white p-1.5 shadow-sm transition-colors hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <section className='flex flex-col gap-7 mt-3'>
        <div className='flex justify-center items-center gap-10 max-md:flex-col'>
          <Nextjs />
          <React_img />
        </div>
        <div className='flex justify-center items-center gap-10 max-md:flex-col'>
          <MagicUI />
          <ShadcnUI />
        </div>
      </section >
    </>
  )
}

export default Page;   // <-- Export same
