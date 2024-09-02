import React from "react";
import ClientInfo from "./ClientInfo";
import TestimonialContent from "./TestimonialContent";

function ClientTestimonial() {
  return (
    <article className="relative flex overflow-hidden flex-col justify-center p-[2px] mr-11 text-white rounded-3xl bg-neutral-900 bg-opacity-40 gradient-border
                        max-md:mr-0">
      <div className="bg-black p-4 rounded-3xl">
        <ClientInfo
          name="Client Name"
          role="Product designer"
          avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/292a21e2af17678a6dde9ca5743758de75f0f80fe44df4932d43ac53294e6a72?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
        />
        <TestimonialContent />
      </div>
    </article>
  );
}

export default ClientTestimonial;