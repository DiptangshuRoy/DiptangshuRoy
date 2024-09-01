import React from 'react';

function NavigationItem({ text }) {
  return (
    <li className="self-stretch my-auto">
      <a href={`#${text.toLowerCase().replace(' ', '-')}`} className="text-base text-center text-white">
        {text}
      </a>
    </li>
  );
}

export default NavigationItem;