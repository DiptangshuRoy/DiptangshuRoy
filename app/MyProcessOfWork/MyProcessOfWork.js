import React from 'react'
import Numbers from '../123/ImageGallery';
import GameIconRight from '../GameIconRight';
import GameIconDown from '../GameIconDown';
import GameIconLeft from '../GameIconLeft';
import Link from 'next/link';

import { TextAnimate } from "@/components/magicui/text-animate";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { AuroraText } from "@/components/magicui/aurora-text";

const MyProcessOfWork = () => {
  return (
    <>


      <div className="flex flex-wrap gap-7 items-center text-4xl leading-none text-center text-white ml-20 mt-12 mb-14
                      max-sm:ml-5 max-md:ml-5 max-sm:text-2xl max-md:text-2xl max-md:mb-1">
        <h2 id="MyProcessOfWork" className="self-stretch my-auto max-md:max-w-full">
          <TextAnimate animation="blurIn" className=''>
            My Process Of Work
          </TextAnimate>
        </h2>

        {/* TO COPY THIS ☆ IN OTHER COMPONENTS COPY THIS DIV WITH CLASSNAME GROUP */}
        <div className="group cursor-none">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/114e2af9913c687a0a4bf51163cb275023a08c71a2160a14c47cedc90958ec62?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square transition-all duration-200 group-hover:filter group-hover:invert-[30%] group-hover:sepia-[100%] group-hover:saturate-[500%] group-hover:hue-rotate-[30deg] group-hover:brightness-150 group-hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] group-hover:scale-110"
          />
        </div>


      </div>

      <section className='flex gap-10 ml-36
                        max-md:mx-5'>
        {/* THIS IS 1 2 3 NUMBERS BESIDE STEP1: , STEP:2 , STEP3: */}
        {/* <div className='max-md:hidden'>
          <Numbers />
        </div> */}

        <div className='flex-col leading-9 mt-5
                        max-md:leading-7'>
          <div>
            <GameIconRight />
            <h2 className='text-2xl mt-8 mb-2.5'>
              <TextAnimate animation="fadeIn" by="line" delay={0.1} >
                Step1: Planning and Design
              </TextAnimate>
            </h2>
            <ul className='opacity-80 font-light'>
              {/* <TextAnimate animation="blurInUp" by="character" duration={5}> */}
              <li><b><TextAnimate animation="blurInUp" by="character" duration={0.5}>Requirement Gathering:</TextAnimate></b><TextAnimate animation="slideUp" by="word" delay={0.7}> Understand the project&apos;s requirements, including features, user interface, and user experience.</TextAnimate></li>
              <li><b><TextAnimate animation="blurInUp" by="character" duration={0.5}>Wireframing and Prototyping:</TextAnimate></b> <TextAnimate animation="slideUp" by="word" delay={0.7}>Create wireframes and prototypes to visualize the layout and design of the website.</TextAnimate></li>
              <li><b><TextAnimate animation="blurInUp" by="character" duration={0.5}>Technology Stack Planning:</TextAnimate></b> <TextAnimate animation="slideUp" by="word" delay={0.7}>Decide on the specific libraries, tools, and services you&apos;ll use, such as React components, Express middleware, and MongoDB schema design.</TextAnimate></li>
              {/* </TextAnimate> */}
            </ul>
            <Link href='#SomeFeaturedProjects' className="flex mt-4 w-44 h-14 justify-center items-center bg-gradient-to-r from-orange-200 to-blue-400 rounded-[290px]">
              <div className='flex font-light justify-center items-center bg-black h-[51px] w-[171px] rounded-[290px]'>
                <SparklesText text="See Examples" />
                {/* See Examples */}
              </div>
            </Link>
          </div>

          <div className='mt-[59px]
                          max-md:mt-14'>
            <GameIconDown />
            <h2 className='text-2xl mt-8 mb-2.5'>
              <TextAnimate animation="fadeIn" by="line" delay={0.1} >
                Step2: Development
              </TextAnimate>
            </h2>
            <ul className='opacity-80 font-light'>
              <li><b><TextAnimate animation="blurInUp" by="character" duration={0.5}>Frontend Development (React.js):</TextAnimate></b> <TextAnimate animation="slideUp" by="word" delay={0.7}>Build the user interface, ensuring it&apos;s responsive and user-friendly. Focus on components, state management, and API integration.</TextAnimate></li>
              <li><b><TextAnimate animation="blurInUp" by="character" duration={0.5}>Backend Development (Express.js & Node.js):</TextAnimate></b> <TextAnimate animation="slideUp" by="word" delay={0.7}>Develop the server-side logic, create RESTful APIs, and handle authentication, data validation, and business logic.</TextAnimate></li>
              <li><b><TextAnimate animation="blurInUp" by="character" duration={0.5}>Database Integration (MongoDB):</TextAnimate></b> <TextAnimate animation="slideUp" by="word" delay={0.7}>Design the database schema, implement CRUD operations, and manage data connections.</TextAnimate></li>
            </ul>
          </div>

          <div className='mt-[53px]
                          max-sm:mt-12 max-md:mt-12'>
            <GameIconLeft />
            <h2 className='text-2xl mt-8 mb-2.5 flex gap-2 items-center'>
              <TextAnimate animation="fadeIn" by="line" delay={0.1} >
                Step3: Testing and Deployment
              </TextAnimate>
              {/* <AuroraText className='text-3xl font-bold'>Deployment</AuroraText> */}
            </h2>
            <ul className='opacity-80 font-light'>
              <li><b><TextAnimate animation="blurInUp" by="character" duration={0.5}>Testing:</TextAnimate></b> <TextAnimate animation="slideUp" by="word" delay={0.7}>Perform unit testing, integration testing, and end-to-end testing to ensure the website functions as expected. Tools like Jest, Mocha, or Postman are commonly used.</TextAnimate></li>
              <li><b><TextAnimate animation="blurInUp" by="character" duration={0.5}>Debugging and Optimization:</TextAnimate></b> <TextAnimate animation="slideUp" by="word" delay={0.7}>Identify and fix any issues or bugs, optimize performance, and ensure security best practices are followed.</TextAnimate></li>
              <li><b><TextAnimate animation="blurInUp" by="character" duration={0.5}>Deployment:</TextAnimate></b> <TextAnimate animation="slideUp" by="word" delay={0.7}>Deploy the website to a hosting service like Hostinger, Vercel, Netlify, or AWS. Set up CI/CD pipelines and monitor the website post-deployment to ensure it runs smoothly.</TextAnimate></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyProcessOfWork;
