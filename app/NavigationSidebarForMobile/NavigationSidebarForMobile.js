"use client"
import React from 'react'
import Link from 'next/link'
import Round from '../Icons/Round'

const NavigationSidebarForMobile = () => {
  return (
    <section id='NavigationSidebarForMobile' className='hidden w-[89vw] h-[37vh] bg-slate-900 p-7 rounded-2xl m-5'>
      <ul className="flex flex-col gap-10 list-none">
        <div>
          <li><Link className='text-xl' href="/#SomeFeaturedProjects">Projects</Link></li>
          <hr />
        </div>
        <div>
          <li><Link className='text-xl' href="/#SendAMessage">Contact me</Link></li>
          <hr />
        </div>
        <div>
          <div className='flex gap-4 items-center'>
            <li><Link className='text-xl' href="/techresources_route">Tech Resources</Link></li>
            <Round />
          </div>
          <hr />
        </div>
      </ul>
    </section>
  )
}

export default NavigationSidebarForMobile;
