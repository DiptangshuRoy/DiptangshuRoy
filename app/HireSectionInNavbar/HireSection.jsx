import React from 'react';
import HireButton from './HireButton';
import GradientIcon from './GradientIcon';
import NavbarButtonForMobile from '../NavbarButtonForMobile/Navbar';

function HireSection() {
  return (
    <section className="flex flex-col max-w-[162px]">
      <div className="flex items-center gap-2
                      max-sm:hidden max-md:hidden">
        <HireButton />
        <div className="flex flex-col w-[49px]">
          <GradientIcon />
        </div>
      </div>
      <NavbarButtonForMobile />
    </section>
  );
}

export default HireSection;