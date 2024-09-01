import React from 'react';
import GoToTopButton from './GoToTopButton';
import GradientIcon from './GradientIcon';
import NavbarButtonForMobile from '../NavbarButtonForMobile/Navbar';

function GoToTopSection() {
  return (
    <section className="flex flex-col max-w-[160px]">
      <div className="flex items-start
                      max-sm:hidden max-md:hidden">
        <GoToTopButton />
        {/* <div className="flex flex-col w-[49px]">
          <GradientIcon />
        </div> */}
      </div>
      {/* <NavbarButtonForMobile /> */}
    </section>
  );
}

export default GoToTopSection;