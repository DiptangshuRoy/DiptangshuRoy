import Link from 'next/link';
import React from 'react';

function GoToTopButton() {
  return (
    <Link href='#DiptangshuRoy' className="gap-1.5 self-stretch px-5 py-3.5 text-base font-medium text-center text-black border border-indigo-400 border-solid bg-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] rounded-[40px]">
      <button className='outline-none'>
        Go to Top
      </button>
    </Link>
  );
}

export default GoToTopButton;