import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "500", "700"] });

function SomeFeaturedProjects() {
  return (
    <section className="flex flex-wrap gap-7 items-center text-4xl leading-none text-center text-white ml-28 mt-14
                        max-md:ml-5 max-md:gap-4 max-md:text-2xl">
      <h2 id="SomeFeaturedProjects" className="self-stretch my-auto max-md:max-w-full ring-offset-8">
        <TextAnimate animation="slideUp" by="word" className={ubuntu.className}>
          Some Featured projects
        </TextAnimate>
      </h2>
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