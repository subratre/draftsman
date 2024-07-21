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
  600: {
    items: 3,
    margin: 5,
  },
  768: {
    items: 2.5,
    margin: 10,
  },
  1024: {
    items: 6,
    margin: 20,
  },
};

export default function Slider() {
  return (
    <div className="container" data-aos="fade-up">
      <OwlCarousel
        responsive={Responsive}
        loop={true}
        autoplay
        dots={true}
        className="owl-carousel owl-theme footer_owl"
      >
        <div className="item">
          <img src="/assets/images/04.jpg" />
        </div>
        <div className="item">
          <img src="/assets/images/02.jpg" />
        </div>
        <div className="item">
          <img src="/assets/images/03.jpg" />
        </div>
        <div className="item">
          <img src="/assets/images/07.jpg" />
        </div>
        <div className="item">
          <img src="/assets/images/04.jpg" />
        </div>
        <div className="item">
          <img src="/assets/images/02.jpg" />
        </div>
        <div className="item">
          <img src="/assets/images/03.jpg" />
        </div>
        <div className="item">
          <img src="/assets/images/07.jpg" />
        </div>
      </OwlCarousel>
    </div>
  );
}
