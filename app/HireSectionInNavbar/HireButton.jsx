import Link from 'next/link';
import React from 'react';

function HireButton() {
  return (
    <Link href='https://www.linkedin.com/in/diptangshuroy'>
      <button className="gap-1.5 self-stretch px-5 py-3.5 text-base font-medium text-center text-black
                        bg-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] rounded-[40px]">
        Hire me
      </button>
    </Link>
  );
}

export default HireButton;

