import React from 'react';

function ImageComponent() {
  return (
    <div className="flex flex-col max-w-[392px]">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28bc51d059721aba6b198b7fed9b4a9046f03074c1993f150e26ee0a177b27df?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39" 
        className="object-contain w-full aspect-square
                    max-md:hidden" 
        alt="Description of the image"
      />
    </div>
  );
}

export default ImageComponent;