import * as React from "react";
import IconGroup from "./IconGroup";

const MyComponent = () => {
  const icons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6700bede2fba8d187475c5b5d13491866dfc81d662fc063d56c2a53c83d4d7a?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39", 
      alt: "Description for image 2", href: "https://x.com/DiptangshuRoy_" },
    // { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce06057b8c4a88ff7af0a32deec68820db81fb15b82ea9f318b248bf359007b5?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39", alt: "Description for image 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d075279c090ed692a7aa625a0dab96accc2a36dd4ccd4ff1c3e8202c39bfd39?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39", 
      alt: "Description for image 1", href: "https://x.com/DiptangshuRoy_" },
    // { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8da71261e3a99582e0e53bd0a3fed9bfffc6f3dc030143f7ddaa87792e859aaa?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39", alt: "Description for image 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/50e0203e931bae2a7ddfc1a15ec6c7ef9d04fb41821a193c0590390a9b8624ec?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39", 
      alt: "Description for image 4", href: "https://www.linkedin.com/in/diptangshuroy/" },
    // { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b58206a944767dbf3051e0f6a4c25ad376d25498aba22f56335b66eab403ad05?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39", alt: "Description for image 4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a376ccd3c0d8a0144a9f010b23a2a54d453b8c757414b561b86e3f5e19a9321a?placeholderIfAbsent=true&apiKey=2385614b975c4d60b71bd5d3792c2e39", 
      alt: "Description for image 3", href: "https://github.com/DiptangshuRoy" },
  ];

  return <IconGroup icons={icons} />;
};

export default MyComponent;