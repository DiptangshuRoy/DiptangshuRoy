import React from 'react';
import Image from 'next/image';

function TechItem({ name, iconSrc }) {
  return (
    <>
      <div className="self-stretch my-auto">{name}</div>
      <img loading="lazy" src={iconSrc} alt={`${name} icon`} className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
    </>
  );
}

export default TechItem;