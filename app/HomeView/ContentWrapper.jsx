import React from "react";
import DecorativeImage from "./DecorativeImage";
import TextContent from "./TextContent";

function ContentWrapper() {
  return (
    <div className="flex relative flex-col max-md:max-w-full">
      {/* THIS IS OLD BACKGROUND GRID IMAGE MAYBE. */}
      {/* <DecorativeImage /> */}
      <TextContent />
    </div>
  );
}

export default ContentWrapper;