import React from "react";

function ImageItem({ src, alt, className }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain w-full aspect-square z-10 ${className}`}
    />
  );
}

export default ImageItem;