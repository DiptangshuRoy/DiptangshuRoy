import React from "react";
import ImageItem from "./ImageItem";

const images = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/417688d7128cd6e674217bd362bb4adfa78de726d49e7dc197e3b31ef4a769b6?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39", alt: "Image 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f87278e927aea2dfb82ea34a132c06daceb5c064de1eb7b0de6a0698d1c5f40c?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39", alt: "Image 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccb6a96017a059a5678a963b8f73db7c6045305f6922e9ed96110747e9067126?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39", alt: "Image 3" }
];

function ImageGallery() {
  return (
    <>
      <section className="flex flex-col pb-3 max-w-[56px] relative">
        {images.map((image, index) => (
          <ImageItem
            key={index}
            src={image.src}
            alt={image.alt}
            className={index === 1 ? "mt-80" : index === 2 ? "mt-56" : ""}
          />
        ))}
        <div className="bg-white bg-opacity-20 w-[1px] max-w-[1px] min-h-[699px] absolute left-6 top-8"></div>
      </section>
    </>
  );
}

export default ImageGallery;