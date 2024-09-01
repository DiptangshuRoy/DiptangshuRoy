import React from "react";

function SomeFeaturedProjects() {
  return (
    <section className="flex flex-wrap gap-7 items-center text-4xl leading-none text-center text-white ml-28 mt-14
                        max-sm:ml-5 max-md:ml-5 max-sm:text-2xl max-md:text-2xl">
      <h1 id="SomeFeaturedProjects" className="self-stretch my-auto max-md:max-w-full ring-offset-8">
        Some Featured projects
      </h1>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/114e2af9913c687a0a4bf51163cb275023a08c71a2160a14c47cedc90958ec62?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
      />
    </section>
  );
}

export default SomeFeaturedProjects;