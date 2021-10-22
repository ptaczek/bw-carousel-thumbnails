import React from "react";
import { render } from "react-dom";

// import { ImageCarousel } from "./ImageCarousel";
import { CarouselThumbnailsScroller } from "./CarouselThumbnailsScroller";

// Render these styled components like normal react components.
// They will pass on all props and work
// like normal react components – except they're styled!

const imgUrls = [
  "https://image.shutterstock.com/image-illustration/modern-technology-business3d-rendering-260nw-661572196.jpg",
  "https://image.shutterstock.com/image-vector/isometric-laptop-multiple-screen-store-260nw-1157394175.jpg",
  "https://image.shutterstock.com/image-vector/programming-software-development-web-page-260nw-1682028748.jpg",
  "https://image.shutterstock.com/image-vector/smart-city-intelligent-building-concept-260nw-2050005320.jpg",
  "https://www.w3schools.com/images/w3lynx_200.png",
  "https://techstacker.com/static/695197f9845f4e2da7a3da0e77e784f4/4148e/css.png"
];

const App = () => <CarouselThumbnailsScroller imgUrls={imgUrls} />;

render(<App />, document.getElementById("root"));
