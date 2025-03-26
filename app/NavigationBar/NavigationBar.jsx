import React from 'react';
import NavigationItem from './NavigationItem';
import Link from 'next/link';

function NavigationBar() {
  const navItems = ['About', 'Projects', 'Contact me'];

  return (
    <nav className="flex gap-10 justify-center items-center py-1.5 pr-8 pl-1.5 border-2 border-indigo-400 border-solid bg-zinc-900 rounded-[290px] transition hover:scale-105
                    max-sm:hidden max-md:hidden ml-[123px] max-xl:ml-0">
      <Link href="/">
        <div className="flex gap-1.5 justify-center items-center self-stretch px-4 py-2 my-auto bg-zinc-800 rounded-[40px] w-[52px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d7e68a46c04f3adfe57e8a577bbc961b545f3f9c1c32ef25e43c3563f31b6ea?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
          className="object-contain self-stretch my-auto w-5 aspect-square" alt="Home" />
        </div>
      </Link>
      <ul className="flex gap-10 list-none p-0 m-0">
        {/* {navItems.map((item, index) => (
          <NavigationItem key={index} text={item} />
        ))} */}
        <li><Link href="/#SomeFeaturedProjects">Projects</Link></li>
        <li><Link href="/#SendAMessage">Contact me</Link></li>
        <li><Link href="/techresources_route">Tech Resources</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
