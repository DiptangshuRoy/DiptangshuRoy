import React from "react";
import ContentWrapper from "./ContentWrapper";

function ContentSection() {
  return (
    <section className=" flex relative flex-col grow shrink-0 px-20 pt-16 pb-72 basis-0 min-h-[567px] w-fit max-md:px-5 max-md:pb-24 max-md:max-w-full items-center">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7049251d932a870212a0a0617306d39691a0bcaf24af42af1c734327ef1e1159?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <ContentWrapper />
    </section>
  );
}

export default ContentSection;