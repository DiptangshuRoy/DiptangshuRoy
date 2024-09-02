import React from 'react';
import IconButton from './IconButton';

function NavBar() {
  return (
    <nav className="flex gap-8 justify-center items-center py-1.5 border-indigo-400 border-solid bg-zinc-900 border-2 rounded-[218.975px] 
                    sm:hidden md:hidden">
      <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/a66523dde5546ab3ab9c8f9ab112900630213634381d824e1178f20253ff22a0?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39" alt="Navigation icon" />
    </nav>
  );
}

export default NavBar;