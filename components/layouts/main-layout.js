import React from "react";
import Carousel from "../Carousel";
import MoveTop from "../MoveTop";
import Footer from "./footer";
import Navigation from "./navigtion";
import TopHeader from "./topheader";

const MainLayout = (props) => {
  return (
    <>
      <TopHeader />
      <Navigation />
      <main>
        {props.children}
        <Carousel />
      </main>
      <Footer />
      <MoveTop />
    </>
  );
};

export default MainLayout;
