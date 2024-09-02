import React from 'react'
import Link from 'next/link';

const HaveIdeaAboutProject = () => {
  return (
    <>
      <section id='HaveIdeaAboutProject' className='flex flex-col gap-5
                                                    max-sm:mx-5 max-mb:mx-5'>
        <div className="flex flex-wrap gap-7 items-center leading-none text-center text-white
                        max-sm:mb-5 max-mb:mb-5 max-sm:mt-7 max-mb:mt-7 ">
          <h1 className="text-4xl self-stretch my-auto 
                          max-md:max-w-full max-sm:text-xl max-md:text-2xl">
            Have Idea About Project?
          </h1>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/114e2af9913c687a0a4bf51163cb275023a08c71a2160a14c47cedc90958ec62?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
          />
        </div>

        <div className='flex flex-col'>
          <span className='w-[50vw]
                          max-sm:w-full max-md:w-full'>
            Ever since childhood, I have been captivated by the evolution of technology. Watching the arrival of new devices, operating
            systems, and networking technologies sparked a deep curiosity in me about how these innovations function. As I grew older, I
            discovered that programming and technology were at the heart of these advancements, and this realization ignited my passion. I
            dove into learning everything I could about these technologies and quickly developed a profound interest in coding and
            programming. This journey has fueled my dedication and enthusiasm for the tech world.
          </span>

          <div id='SendAMessage' className='transition hover:scale-105 w-44 mt-5'>
            <Link href='mailto:diptangshuroybusiness@gmail.com' className="px-5 py-3.5 text-base font-medium text-center text-black border border-indigo-400 border-solid bg-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] rounded-[40px] 
                                                                            max-sm:mt-5 max-mb:mt-5">
              <button id='SendAMessage' className='outline-none'>
                Send a message
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HaveIdeaAboutProject;
