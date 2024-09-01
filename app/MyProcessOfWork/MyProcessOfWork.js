import React from 'react'
import Numbers from '../123/ImageGallery';
import GameIconRight from '../GameIconRight';
import GameIconDown from '../GameIconDown';
import GameIconLeft from '../GameIconLeft';
import Link from 'next/link';

const MyProcessOfWork = () => {
  return (
    <>
        <div className="flex flex-wrap gap-7 items-center text-4xl leading-none text-center text-white ml-20 mt-12 mb-14
                        max-sm:ml-5 max-md:ml-5 max-sm:text-2xl max-md:text-2xl">
          <h1 id="MyProcessOfWork" className="self-stretch my-auto max-md:max-w-full">
            My Process Of Work
          </h1>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/114e2af9913c687a0a4bf51163cb275023a08c71a2160a14c47cedc90958ec62?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
          />
        </div>

        <section className='flex gap-10 ml-36
                            max-sm:ml-5 max-md:ml-5'>
          <div>
            <Numbers />
          </div>

          <div className='flex-col leading-[70px] mt-5
                          max-sm:mt-3 max-md:mt-3'>

            <div>
              <GameIconRight />
              <h1 className='text-2xl mt-8'>Step1: Product Design Research</h1>
              <span className='opacity-80 font-light'>This is initial step</span>
              <Link href='#SomeFeaturedProjects' className="flex w-44 h-14 justify-center items-center bg-gradient-to-r from-orange-200 to-blue-400 rounded-[290px]">
                <div className='flex font-light justify-center items-center bg-black h-[53px] w-[171px] rounded-[290px]'>
                  See Examples
                </div>
              </Link>
            </div>

            <div className='mt-32
                            max-sm:mt-20 max-md:mt-20'>
              <GameIconDown />
              <h1 className='text-2xl mt-8'>Step2: Product Design Research</h1>
              <span className='opacity-80 font-light'>This is initial step</span>
            </div>

            <div className='mt-24
                            max-sm:mt-12 max-md:mt-12'>
              <GameIconLeft />
              <h1 className='text-2xl mt-8'>Step3: Product Design Research</h1>
              <span className='opacity-80 font-light'>This is initial step</span>

            </div>

          </div>
        </section>
    </>
  )
}

export default MyProcessOfWork;
