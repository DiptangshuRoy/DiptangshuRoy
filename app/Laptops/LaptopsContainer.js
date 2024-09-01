import React from 'react'
import Image from 'next/image';
import GameIconLeft from '../GameIconLeft';
import GameIconDown from '../GameIconDown';
import GameIconRight from '../GameIconRight';
import Link from 'next/link';

const LaptopsContainer = () => {
  return (
    <>
      <section className='m-24
                          max-sm:m-0 max-md:m-0 max-sm:mt-10 max-md:mt-24 max-sm:mx-10 max-md:mx-10'>
        <div target='_blank' className='flex justify-center items-center
                                        max-sm:block max-md:block'>
          <Link className='mr-5' href="https://my-netflix-clone-two.vercel.app/">
            <Image className='hover:scale-105 transition ' src='/Laptops/Netflix.png' height={1700} width={1700} alt='' />
          </Link>
          <span>I designed Netfix&apos;s clone site to enhance my css skills, This time I made this website fully responsive, making this my first well-working responsive site.
            I also worked with Tailwind but made the responsiveness with css&apos;s @media query only. I became very happy✨ after making my first responsive site!✨😄
            also to add the images in the proper position & to make the Home picture look like exact Netflix&apos;s site was the tricky part here but I could manage it later.
          </span>
          <GameIconLeft />
        </div>

        <div className='flex justify-center items-center
                        max-sm:block max-md:block'>
          <GameIconDown />
          <span>Later, I created this password manager web app. Made two versions of it- 1. is with local-storage and 2. is with MongoDB&apos;s cloud storage. I am looking forward
            to find a free hosting service where I can publish my 2nd version of this project because, Vercel is giving so many errors for backend of my site, like backend
            not running even if I add commands in vercel.json file.
          </span>
          <Link className='ml-5' href="https://password-manager-with-localstorage.vercel.app/">
            <Image className='hover:scale-105 transition ' src='/Laptops/PassOP.png' height={1700} width={1700} alt='' />
          </Link>
        </div>

        <div className='flex justify-center items-center
                        max-sm:block max-md:block'>
          <Link className='mr-5' href="https://space-x-clone-kohl.vercel.app/">
            <Image className='hover:scale-105 transition ' src='/Laptops/SpaceX.png' height={1500} width={1500} alt='' />
          </Link>
          <span>I built my first website by cloning Elon Musk&apos;s SpaceX website. This is a static website I built using html, css and javascript only. I was not perfect in
            adding responsiveness on those days so there is a flaw in this site in mobile devices only but yeah, it boosted me to create such more amazing works in incoming
            days..
          </span>
          <GameIconLeft />
        </div>

        <div className='flex justify-center items-center
                        max-sm:block max-md:block'>
          <GameIconRight />
          <span>Then, for levelling up I created this web app. I used React library here and implemented browser&apos;s local-storage for storing user data.</span>
          <Link className='ml-5' href="https://to-do-list-app-gilt-two.vercel.app/">
            <Image className='hover:scale-105 transition ' src='/Laptops/iTask.png' height={700} width={700} alt='' />
          </Link>
        </div>

        <div className='flex justify-center items-center
                        max-sm:block max-md:block'>
          <Link className='mr-5' href="https://my-twitter-clone-mu.vercel.app/">
            <Image className='hover:scale-105 transition ' src='/Laptops/Twitter.png' height={700} width={700} alt='' />
          </Link>
          <span>Made this website for sharpening my skills. This project sharpened my skills in developing a full-fledged website UI. Used Tailwind library.</span>
          <GameIconDown />
        </div>
      </section>
    </>
  )
}

export default LaptopsContainer;
