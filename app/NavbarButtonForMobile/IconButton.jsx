"use client";
import React from 'react';

function IconButton({ src, alt }) {
  const handleClick = () => {
    const sidebar = document.getElementById('NavigationSidebarForMobile');
    if (sidebar) {
      // Toggle the display property between 'block' and 'none'
      sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
    } else {
      console.error("Element with ID 'NavigationSidebarForMobile' not found.");
    }
  };

  return (
    <button onClick={handleClick} className="outline-none flex gap-1.5 justify-center items-center self-stretch px-3 py-1.5 my-auto w-10 bg-zinc-800 rounded-[30px]" aria-label={alt}>
      <img loading="lazy" src={src} alt={alt} className="object-contain self-stretch my-auto w-4 aspect-square" />
    </button>
  );
}

export default IconButton;


// DEFAULT CODE

// import React from 'react';

// function IconButton({ src, alt }) {
//   return (
//     <button className="flex gap-1.5 justify-center items-center self-stretch px-3 py-1.5 my-auto w-10 bg-zinc-800 rounded-[30px]" aria-label={alt}>
//       <img loading="lazy" src={src} alt={alt} className="object-contain self-stretch my-auto w-4 aspect-square" />
//     </button>
//   );
// }

// export default IconButton;