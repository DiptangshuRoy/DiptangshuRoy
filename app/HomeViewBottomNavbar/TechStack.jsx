import React from 'react';
import TechItem from './TechItem';
import Image from 'next/image';

const techItems = [
  { name: 'Framer', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/903e64402f72d903a7a0de3d735ec9280ae5315e800235e7ac7ac3f483220ea0?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39' },
  { name: 'Webflow', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e0b2a0dfb3fdd85d008b1d05be83c79354750297be8ddc91a38a30f04906b11e?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39' },
  { name: 'Figma', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/31944566a2754a59e573d7a477a2fb27606d1c0b198afe3708348f18321a7ca0?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39' },
  { name: 'Notion', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee5b225e0578b42393c26155c4c27109ea9ff4fea053ee87e48808f59a615e37?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39' }
];

function TechStack() {
  return (
    <section className="flex overflow-hidden group cursor-pointer py-5 text-xl border-t border-b border-white border-opacity-30
                        max-sm:h-24 max-md:h-24">
      {/* {techItems.map((item, index) => (
        <TechItem key={index} name={item.name} iconSrc={item.iconSrc} />
      ))} */}
      <div className='flex animate-loop-scroll gap-10 group-hover:paused'>
        <Image src='/TechIcons/React.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Bootstrap.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Chatgpt.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Css.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Figma.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Git.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Github.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Html.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Javascript.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Mongodb.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Mongoose.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Nextjs.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Nextjs2.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Nodejs.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Npm.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Npm2.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Postman.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Pug.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        {/* <Image src='/TechIcons/Sass.svg' height={70} width={70} className='max-w-none' alt=''></Image> */}
        <Image src='/TechIcons/Tailwind.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Vite.svg' height={70} width={70} className='max-w-none' alt=''></Image>
      </div>
      <div className='flex animate-loop-scroll gap-10 group-hover:paused' aria-hidden='true'>
        <Image src='/TechIcons/React.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Bootstrap.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Chatgpt.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Css.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Figma.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Git.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Github.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Html.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Javascript.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Mongodb.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Mongoose.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Nextjs.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Nextjs2.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Nodejs.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Npm.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Npm2.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Postman.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Pug.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        {/* <Image src='/TechIcons/Sass.svg' height={70} width={70} className='max-w-none' alt=''></Image> */}
        <Image src='/TechIcons/Tailwind.svg' height={70} width={70} className='max-w-none' alt=''></Image>
        <Image src='/TechIcons/Vite.svg' height={70} width={70} className='max-w-none' alt=''></Image>
      </div>
    </section>
  );
}

export default TechStack;