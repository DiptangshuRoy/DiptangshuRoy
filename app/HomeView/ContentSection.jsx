// import React from "react";
// import ContentWrapper from "./ContentWrapper";

// function ContentSection() {
//   return (
//     <section className=" flex relative flex-col grow shrink-0 px-20 pt-16 pb-72 basis-0 min-h-[567px] w-fit max-md:px-5 max-md:pb-24 max-md:max-w-full items-center">
//       <img
//         loading="lazy"
//         // THIS IS THE BACKGROUND IMAGE
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/7049251d932a870212a0a0617306d39691a0bcaf24af42af1c734327ef1e1159?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39"
//         alt=""
//         className="object-cover absolute inset-0 size-full"
//       />
//       <ContentWrapper />
//     </section>
//   );
// }

// export default ContentSection;


import React from "react";
import ContentWrapper from "./ContentWrapper";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import CopyButton from "./CopyButton";

import { Meteors } from "@/components/magicui/meteors";

function ContentSection() {
  return (
    <>
      <div className="max-md:hidden">
        <CopyButton text="diptangshuroybusiness@gmail.com" />
      </div>
      <section className="relative flex flex-col grow shrink-0 px-20 pt-16 pb-72 basis-0 min-h-[567px] w-fit max-md:px-5 max-md:pb-24 max-md:max-w-full items-center overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 max-md:h-[100vh]">
          <div>
            <Meteors number={30} />
          </div>
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 w-full"
            )}
          />
        </div>

        <ContentWrapper />
      </section>
    </>
  );
}

export default ContentSection;
