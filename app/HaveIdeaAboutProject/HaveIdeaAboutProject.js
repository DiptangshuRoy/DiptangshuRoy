import React from 'react'
import Link from 'next/link';
import { MagicCard } from "@/components/magicui/magic-card";
import {FormField} from '../FormField';
import { TextAnimate } from "@/components/magicui/text-animate";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "500", "700"] });

const HaveIdeaAboutProject = () => {
  return (
    <>
      <section id='HaveIdeaAboutProject' className='flex flex-col gap-5 max-md:gap-0
                                                    max-md:mx-5 max-mb:mx-5'>
        <div className="flex gap-7 max-md:gap-1 flex-wrap items-center leading-none text-white
                        max-sm:mb-5 max-mb:mb-5 max-sm:mt-7 max-mb:mt-7 ">
          <h2 className="text-4xl self-stretch my-auto 
                          max-md:max-w-full max-sm:text-xl max-md:text-2xl">
                <TextAnimate animation="slideUp" by="word" className={ubuntu.className}>
                        Have Idea About Project ?
                      </TextAnimate>
          </h2>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/114e2af9913c687a0a4bf51163cb275023a08c71a2160a14c47cedc90958ec62?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
          />
        </div>

        <div className='flex flex-col'>
          {/* <span className='w-[50vw]
                          max-sm:w-full max-md:w-full'>
            If you have any project ideas, feel free to send me a message.
            I'm always open to discussing new and exciting concepts.
            Whether it's web development or tech innovation, let's build something great.
            Drop me a message, and let's bring ideas to life!
          </span> */}

          <FormField />

          {/* <div id='SendAMessage' className='transition hover:scale-105 w-44 mt-6
                                            max-md:mt-8 max-md:mb-2'>
            <Link href='mailto:diptangshuroybusiness@gmail.com' className="px-5 py-3.5 text-base font-medium text-center text-black border border-indigo-400 border-solid bg-[linear-gradient(90deg,#7A87FB_0%,#FFD49C_100%)] rounded-[40px] 
                                                                            max-sm:mt-5 max-mb:mt-5">
              <button id='SendAMessage' className='outline-none'>
                Send a message
              </button>
            </Link>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default HaveIdeaAboutProject;
