import React from 'react'
import { TextAnimate } from "@/components/magicui/text-animate";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "500", "700"] }); 

const ClientTestimonials = () => {
  return (
    <section className="flex flex-wrap gap-7 items-center text-4xl leading-none text-center text-white 
                        max-sm:text-2xl max-md:text-2xl max-sm:mx-5 max-md:mx-5 max-sm:mt-10 max-md:mt-10 max-sm:mb-5 max-md:mb-5">
      <h2 className="self-stretch my-auto">
            <TextAnimate animation="slideUp" by="word" className={ubuntu.className}>
                    Client Testimonials
                  </TextAnimate>
      </h2>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/114e2af9913c687a0a4bf51163cb275023a08c71a2160a14c47cedc90958ec62?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
      />
    </section>
  )
}

export default ClientTestimonials;
