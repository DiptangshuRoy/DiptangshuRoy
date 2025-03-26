import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Nextjs } from './Nextjs';
import { React_img } from './React_img';


export const metadata = {
  title: "Tech Resources I Utilize Daily",
  description: "Tech resources of various technologies",
};

const page = () => {
  return (
    <>
      <section className='flex flex-col gap-7 mt-10'>
<div className='flex justify-center items-center gap-10 max-md:flex-col'>
<Nextjs />
<React_img />
{/* <Nextjs /> */}
</div>

        <div className='flex bg-slate-800 mx-10 rounded-md py-5 px-10 transition hover:scale-[1.02]'>
          <div className='flex flex-col justify-around'>
            <Link className='flex w-fit justify-center items-center gap-1 transition hover:scale-110' href='https://nextjs.org/docs' target='_blank'>
              <h2 className=''>Next.js Docs</h2>
              <Image height={12} width={12} src='/RedirectIcon.svg' />
            </Link>
            <span className='transition hover:scale-[1.01]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur cumque in esse nemo cupiditate, reiciendis amet fugit illo adipisci. Cum minus totam aspernatur rem ad, magnam repellendus doloremque ut ea?</span>
          </div>

          <div className='flex flex-col items-center justify-center'>
            {/* <div className='absolute'>
              <Image height={15} width={15} src='/RedirectIcon.svg' />
            </div> */}
            <Link href='https://nextjs.org/docs' target='_blank'>
              <Image className='transition hover:scale-[1.05]' height={300} width={300} src='/MyPhoto.png' />
            </Link>
          </div>
        </div>

        <div className='flex bg-slate-800 mx-10 rounded-md py-5 px-10 transition hover:scale-[1.02]'>
          <div className='flex flex-col justify-around'>
            <Link className='flex w-fit' href='https://nextjs.org/docs' target='_blank'>
              <h2 className=''>Next.js Docs</h2>
            </Link>
            <span className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur cumque in esse nemo cupiditate, reiciendis amet fugit illo adipisci. Cum minus totam aspernatur rem ad, magnam repellendus doloremque ut ea?</span>
          </div>

          <div className=''>
            <Link href='https://nextjs.org/docs' target='_blank'>
              <Image height={300} width={300} src='/MyPhoto.png' />
            </Link>
          </div>
        </div>

        <div className='flex bg-slate-800 mx-10 rounded-md py-5 px-10 transition hover:scale-[1.02]'>
          <div className='flex flex-col justify-around'>
            <Link className='flex w-fit' href='https://nextjs.org/docs' target='_blank'>
              <h2 className=''>Next.js Docs</h2>
            </Link>
            <span className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur cumque in esse nemo cupiditate, reiciendis amet fugit illo adipisci. Cum minus totam aspernatur rem ad, magnam repellendus doloremque ut ea?</span>
          </div>

          <div className=''>
            <Link href='https://nextjs.org/docs' target='_blank'>
              <Image height={300} width={300} src='/MyPhoto.png' />
            </Link>
          </div>
        </div>

        <div className='flex bg-slate-800 mx-10 rounded-md py-5 px-10 transition hover:scale-[1.02]'>
          <div className='flex flex-col justify-around'>
            <Link className='flex w-fit' href='https://nextjs.org/docs' target='_blank'>
              <h2 className=''>Next.js Docs</h2>
            </Link>
            <span className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur cumque in esse nemo cupiditate, reiciendis amet fugit illo adipisci. Cum minus totam aspernatur rem ad, magnam repellendus doloremque ut ea?</span>
          </div>

          <div className=''>
            <Link href='https://nextjs.org/docs' target='_blank'>
              <Image height={300} width={300} src='/MyPhoto.png' />
            </Link>
          </div>
        </div>


      </section >
    </>
  )
}

export default page;
