import React from "react";
import Header from "./Header";
import ContentSection from "./ContentSection";
import ContentWrapper from "./ContentWrapper";

function MyComponent() {
  return (
    <div className="flex flex-col items-center px-16 text-base text-center text-white bg-neutral-900 
    max-md:px-0
    ">
      <div className="flex w-full max-md:max-w-full">
        <Header />
        <ContentSection />
        {/* <ContentWrapper /> */}
      </div>
    </div>
  );
}

export default MyComponent;