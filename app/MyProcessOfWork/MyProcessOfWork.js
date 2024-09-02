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
                      max-sm:ml-5 max-md:ml-5 max-sm:text-2xl max-md:text-2xl max-md:mb-1">
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
        <div className='max-md:hidden'>
          <Numbers />
        </div>

        <div className='flex-col leading-9 mt-5
                        max-md:leading-7'>
          <div>
            <GameIconRight />
            <h1 className='text-2xl mt-8 mb-2.5'>Step1: Planning and Design</h1>
            <ul className='opacity-80 font-light'>
              <li><b>Requirement Gathering:</b> Understand the project&apos;s requirements, including features, user interface, and user experience.</li>
              <li><b>Wireframing and Prototyping:</b> Create wireframes and prototypes to visualize the layout and design of the website.</li>
              <li><b>Technology Stack Planning:</b> Decide on the specific libraries, tools, and services you&apos;ll use, such as React components, Express middleware, and MongoDB schema design.</li>
            </ul>
            <Link href='#SomeFeaturedProjects' className="flex mt-4 w-44 h-14 justify-center items-center bg-gradient-to-r from-orange-200 to-blue-400 rounded-[290px]">
              <div className='flex font-light justify-center items-center bg-black h-[51px] w-[171px] rounded-[290px]'>
                See Examples
              </div>
            </Link>
          </div>

          <div className='mt-[59px]
                          max-md:mt-14'>
            <GameIconDown />
            <h1 className='text-2xl mt-8 mb-2.5'>Step2: Development</h1>
            <ul className='opacity-80 font-light'>
              <li><b>Frontend Development (React.js):</b> Build the user interface, ensuring it&apos;s responsive and user-friendly. Focus on components, state management, and API integration.</li>
              <li><b>Backend Development (Express.js & Node.js):</b> Develop the server-side logic, create RESTful APIs, and handle authentication, data validation, and business logic.</li>
              <li><b>Database Integration (MongoDB):</b> Design the database schema, implement CRUD operations, and manage data connections.</li>
            </ul>
          </div>

          <div className='mt-[53px]
                          max-sm:mt-12 max-md:mt-12'>
            <GameIconLeft />
            <h1 className='text-2xl mt-8 mb-2.5'>Step3: Testing and Deployment</h1>
            <ul className='opacity-80 font-light'>
              <li><b>Testing:</b> Perform unit testing, integration testing, and end-to-end testing to ensure the website functions as expected. Tools like Jest, Mocha, or Postman are commonly used.</li>
              <li><b>Debugging and Optimization:</b> Identify and fix any issues or bugs, optimize performance, and ensure security best practices are followed.</li>
              <li><b>Deployment:</b> Deploy the website to a hosting service like Hostinger, Vercel, Netlify, or AWS. Set up CI/CD pipelines and monitor the website post-deployment to ensure it runs smoothly.</li>
            </ul>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default MyProcessOfWork;
