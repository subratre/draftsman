import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
  0: {
    items: 1.5,
    margin: 5,
  },
  768: {
    items: 2.5,
    margin: 10,
  },
  1024: {
    items: 3,
    margin: 20,
  },
};

export default function DynamicCarousel(props) {
  return (
    <OwlCarousel
      responsive={Responsive}
      loop={true}
      autoplay
      dots={true}
      className="owl-carousel owl-theme"
    >
      {props.children}
    </OwlCarousel>
  );
}
