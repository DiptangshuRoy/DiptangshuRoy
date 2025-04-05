"use client"
import HomeView from './HomeView/MyComponent'
import TechStack from './HomeViewBottomNavbar/TechStack';
import SomeFeaturedProjects from './SomeFeaturedProjects';
import LaptopsContainer from './Laptops/LaptopsContainer';
import HaveIdeaAboutProject from './HaveIdeaAboutProject/HaveIdeaAboutProject';
import FooterNavbar from './FooterNavbar/MyComponent';
import LogoWithName from './LogoWithName';
import ImageComponent from './HaveIdeaAboutProject/ImageComponent';
import ClientTestimonials from './ClientTestimonials/ClientTestimonials';
import ClientTestimonialsCard1 from './ClientTestimonialsCards/Card1/ClientTestimonial';
import ClientTestimonialsCard2 from './ClientTestimonialsCards/Card2/ClientTestimonial';
import ClientTestimonialsCard3 from './ClientTestimonialsCards/Card3/ClientTestimonial';
import ClientTestimonialsCard4 from './ClientTestimonialsCards/Card4/ClientTestimonial';
import MyProcessOfWork from './MyProcessOfWork/MyProcessOfWork';
import GoToTop from './GoToTopButton/GoToTopSection';
import NavigationSidebarForMobile from './NavigationSidebarForMobile/NavigationSidebarForMobile';
import LogoWithNameInFooterForMobile from './LogoWithNameInFooterForMobile'
import LaptopContainerForMobile from './Laptops/LaptopContainerForMobile'
import LogoWithNameForFooter from './LogoWithNameForFooter';
import Script from 'next/script';

import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { TerminalDemo } from './TerminalDemo';
import { FileTreeDemo } from './FileTreeDemo';
import GoDownButton from './GoDownButton';
import { FormField } from './FormField';
import Carousel from './CarouselForMobile';
import CarouselForMobile from './CarouselForMobile';
import { date } from 'zod';


export default function Home() {
  return (
    <>
      <Script src="https://cdn.lordicon.com/lordicon.js"></Script>

      <div className='absolute left-[2px] top-72 z-50 max-lg:hidden'>
        <FileTreeDemo />
      </div>

      <div className='absolute right-0 top-64 bg-stone-700 pl-[34px] pr-6 rounded-tl-2xl rounded-bl-2xl max-2xl:hidden'>
        <TerminalDemo />
      </div>

      <div className='md:hidden'>
        <NavigationSidebarForMobile />
      </div>

      <HomeView />
      {/* <div className="bg-neutral-700 p-[0.4px] w-full"></div> */}
      {/* <div className="bg-neutral-700 p-[0.1px] mt-[1px] w-full"></div> */}
      <TechStack />
      <div className="bg-neutral-700 p-[0.1px] w-full"></div>
      <div className='flex'>
        <div className="bg-neutral-700 p-[0.1px] mt-[2px] w-10/12"></div>
        <div className="bg-neutral-500 p-[0.1px] mt-[2px] w-20 ml-5"></div>
        <div className="bg-indigo-950 p-[0.1px] mt-[2px] w-20 ml-4"></div>
        <div className="bg-fuchsia-950 p-[0.1px] mt-[2px] w-20 ml-4"></div>
        <div className="bg-amber-900 p-[0.1px] mt-[2px] w-24 ml-4"></div>
      </div>

      {/* <GoDownButton /> */}

      <MyProcessOfWork />

      <SomeFeaturedProjects />

      <div>
        <LaptopsContainer />
        <LaptopContainerForMobile />
      </div>

      {/* MAKE THIS RESPONSIVE */}
      <section className='mx-36 mt-12 mb-24 
                          max-sm:m-0 max-md:m-0'>
        <ClientTestimonials />
        <div className='max-md:hidden'>
          <div className='mt-14 mx-5
                        max-md:mt-0'>
            <div className='flex justify-center items-center mb-7
                          max-sm:block max-md:block'>
              <ClientTestimonialsCard2 />
              <ClientTestimonialsCard1 />
            </div>
            <div className='flex justify-center items-center
                          max-md:block'>
              <ClientTestimonialsCard3 />
              <ClientTestimonialsCard4 />
            </div>
          </div>
        </div>

        <div className='hidden max-md:block mb-8'>
          <CarouselForMobile />
          <div className='w-full flex justify-center items-center gap-5 mt-1.5'>
            <span className='p-1 bg-stone-600 rounded-full'></span>
            <span className='p-1 bg-stone-600 rounded-full'></span>
            <span className='p-1 bg-stone-600 rounded-full'></span>
            <span className='p-1 bg-stone-600 rounded-full'></span>
          </div>
        </div>
      </section>

      <div className='flex justify-between items-center mx-36 mb-28
                      max-sm:m-0 max-md:m-0'>
        <HaveIdeaAboutProject />
        <ImageComponent />
      </div>

      {/* MAKE THIS RESPONSIVE */}
      <footer className='flex justify-around items-center mb-2
                          max-sm:flex-col-reverse max-md:flex-col-reverse max-sm:mt-10 max-md:mt-10 '>
        <div className='max-sm:hidden max-md:hidden'>
          <LogoWithNameForFooter />
        </div>
        <FooterNavbar />
        <div className='max-md:hidden'>
          <GoToTop />
        </div>
      </footer>
      <div className='flex justify-center items-center'>
        <span className='text-sm text-gray-500 ml-[119px] max-md:hidden'>Diptangshu Roy | since 2022-{new Date().getFullYear()}</span>
      </div>

      <div className='mt-5 mb-2 ml-2
                      md:hidden'>
        <LogoWithNameInFooterForMobile />
        {/* <GoToTop /> */}
      </div>
    </>
  );
}
