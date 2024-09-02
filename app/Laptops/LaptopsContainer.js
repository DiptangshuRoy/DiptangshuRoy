import React from 'react'
import Image from 'next/image';
import GameIconLeft from '../GameIconLeft';
import GameIconDown from '../GameIconDown';
import GameIconRight from '../GameIconRight';
import Link from 'next/link';
import ShineBorder from '@/components/magicui/shine-border';

const LaptopsContainer = () => {
  return (
    <>
      {/* <ShineBorder
        className="relative flex h-full w-[95vw] flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B",]}
      > */}
      <section className='m-24 
                            max-sm:m-0 max-md:m-0 max-sm:mt-10 max-md:mt-24 max-sm:mx-10 max-md:mx-10'>
        <div className='flex justify-center items-center 
                          max-sm:block max-md:block'>
          <Link className='mr-5' href="https://my-netflix-clone-two.vercel.app/">
            <Image className='hover:scale-105 transition ' src='/Laptops/Netflix.png' height={1700} width={1700} alt='Netflix' />
          </Link>

          <div className='flex flex-col'>
            <span>I designed Netfix&apos;s clone site to enhance my css skills, This time I made this website fully responsive, making this my first well-working responsive site.
              I also worked with Tailwind but made the responsiveness with css&apos;s @media query only. I became very happy✨ after making my first responsive site!✨😄
              also to add the images in the proper position & to make the Home picture look like exact Netflix&apos;s site was the tricky part here but I could manage it later.
            </span>
            <div className='mt-2 flex gap-2 items-center'>
              <span className='px-3 py-1 border-2 font-semibold border-red-900 text-xs rounded-2xl'>HTML</span>
              <span className='px-3 py-1 border-2 font-semibold border-red-900 text-xs rounded-2xl'>CSS</span>
              <span className='px-3 py-1 border-2 font-semibold border-red-900 text-xs rounded-2xl'>JS</span>
              <span className='px-3 py-1 border-2 font-semibold border-red-900 text-xs rounded-2xl'>Tailwind</span>
              <Link href='https://my-netflix-clone-two.vercel.app/'>
                <Image src='/RedirectIcon.svg' height={21} width={21} alt='visit'></Image>
              </Link>
            </div>
          </div>

          {/* <GameIconLeft /> */}
        </div>

        <div className='flex justify-center items-center
                          max-sm:block max-md:block'>
          {/* <GameIconDown /> */}

          <div className='flex flex-col'>
            <span>Later, I created this password manager web app. Made two versions of it- 1. is with local-storage and 2. is with MongoDB&apos;s cloud storage. I am looking forward
              to find a free hosting service where I can publish my 2nd version of this project because, Vercel is giving so many errors for backend of my site, like backend
              not running even if I add commands in vercel.json file.
            </span>
            <div className='mt-2 flex gap-2 items-center'>
              <span className='px-3 py-1 border-2 font-semibold border-green-700 text-xs rounded-2xl'>HTML</span>
              <span className='px-3 py-1 border-2 font-semibold border-green-700 text-xs rounded-2xl'>CSS</span>
              <span className='px-3 py-1 border-2 font-semibold border-green-700 text-xs rounded-2xl'>JS</span>
              <span className='px-3 py-1 border-2 font-semibold border-green-700 text-xs rounded-2xl'>Tailwind</span>
              <span className='px-3 py-1 border-2 font-semibold border-green-700 text-xs rounded-2xl'>React.js</span>
              <Link href='https://my-netflix-clone-two.vercel.app/'>
                <Image src='/RedirectIcon.svg' height={21} width={21} alt='visit'></Image>
              </Link>
            </div>
          </div>

          <Link className='ml-5' href="https://password-manager-with-localstorage.vercel.app/">
            <Image className='hover:scale-105 transition ' src='/Laptops/PassOP.png' height={1700} width={1700} alt='PassOP' />
          </Link>
        </div>

        <div className='flex justify-center items-center
                        max-sm:block max-md:block'>
          <Link className='mr-5' href="https://space-x-clone-kohl.vercel.app/">
            <Image className='hover:scale-105 transition ' src='/Laptops/SpaceX.png' height={1500} width={1500} alt='SpaceX' />
          </Link>

          <div className='flex flex-col'>
            <span>I built my first website by cloning Elon Musk&apos;s SpaceX website. This is a static website I built using html, css and javascript only. I was not perfect in
              adding responsiveness on those days so there is a flaw in this site in mobile devices only but yeah, it boosted me to create such more amazing works in incoming
              days..
            </span>
            <div className='mt-2 flex gap-2 items-center'>
              <span className='px-3 py-1 border-2 font-semibold border-blue-900 text-xs rounded-2xl'>HTML</span>
              <span className='px-3 py-1 border-2 font-semibold border-blue-900 text-xs rounded-2xl'>CSS</span>
              <span className='px-3 py-1 border-2 font-semibold border-blue-900 text-xs rounded-2xl'>JS</span>
              <span className='px-3 py-1 border-2 font-semibold border-blue-900 text-xs rounded-2xl'>Tailwind</span>
              <Link href='https://my-netflix-clone-two.vercel.app/'>
                <Image src='/RedirectIcon.svg' height={21} width={21} alt='visit'></Image>
              </Link>
            </div>
          </div>
          {/* <GameIconLeft /> */}
        </div>

        <div className='flex justify-center items-center
                        max-sm:block max-md:block'>
          {/* <GameIconRight /> */}

          <div className='flex flex-col'>
            <span>Then, for levelling up I created this web app. I used React library here and implemented browser&apos;s local-storage for storing user data.</span>
            <div className='mt-2 flex gap-2 items-center'>
              <span className='px-3 py-1 border-2 font-semibold border-violet-900 text-xs rounded-2xl'>HTML</span>
              <span className='px-3 py-1 border-2 font-semibold border-violet-900 text-xs rounded-2xl'>CSS</span>
              <span className='px-3 py-1 border-2 font-semibold border-violet-900 text-xs rounded-2xl'>JS</span>
              <span className='px-3 py-1 border-2 font-semibold border-violet-900 text-xs rounded-2xl'>Tailwind</span>
              <span className='px-3 py-1 border-2 font-semibold border-violet-900 text-xs rounded-2xl'>React.js</span>
              <Link href='https://my-netflix-clone-two.vercel.app/'>
                <Image src='/RedirectIcon.svg' height={21} width={21} alt='visit'></Image>
              </Link>
            </div>
          </div>

          <Link className='ml-5' href="https://to-do-list-app-gilt-two.vercel.app/">
            <Image className='hover:scale-105 transition ' src='/Laptops/iTask.png' height={700} width={700} alt='iTask' />
          </Link>
        </div>

        <div className='flex justify-center items-center
                        max-sm:block max-md:block'>
          <Link className='mr-5' href="https://my-twitter-clone-mu.vercel.app/">
            <Image className='hover:scale-105 transition ' src='/Laptops/Twitter.png' height={700} width={700} alt='Twitter' />
          </Link>

          <div className='flex flex-col'>
            <span>Made this website for sharpening my skills. This project sharpened my skills in developing a full-fledged website UI. Used Tailwind library.</span>
            <div className='mt-2 flex gap-2 items-center'>
              <span className='px-3 py-1 border-2 font-semibold border-slate-600 text-xs rounded-2xl'>HTML</span>
              <span className='px-3 py-1 border-2 font-semibold border-slate-600 text-xs rounded-2xl'>CSS</span>
              <span className='px-3 py-1 border-2 font-semibold border-slate-600 text-xs rounded-2xl'>JS</span>
              <span className='px-3 py-1 border-2 font-semibold border-slate-600 text-xs rounded-2xl'>Tailwind</span>
              <Link href='https://my-netflix-clone-two.vercel.app/'>
                <Image src='/RedirectIcon.svg' height={21} width={21} alt='visit'></Image>
              </Link>
            </div>
          </div>
          {/* <GameIconDown /> */}
        </div>
      </section>
      {/* </ShineBorder> */}
    </>
  )
}

export default LaptopsContainer;
