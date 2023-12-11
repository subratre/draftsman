import React from "react";
import Footer from "./footer";
import Navigation from "./navigtion";
import TopHeader from "./topheader";

const MainLayout = (props) => {
  return (
    <>
      <TopHeader />
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
