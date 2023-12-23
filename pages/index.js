import ExpertiseSection from "@/components/ExpertiseSection";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Draftsman</title>
      </Head>
      <section
        id="one"
        style={{
          width: "100%",
          height: "60vh",
          background: "url('assets/hom/homepage.jpg') center center",
          backgroundSize: "cover",
          position: "relative",
          zIndex: 1,
          padding: 0,
          marginBottom: "-185px",
        }}
      >
        {/* 
  <div className="container">
      
      <h1>Draftsman Technologies</h1>
      <h2>Specialist in Steel Detailing and BIM modelling in Tekla</h2>-->

      <div className="d-flex align-items-center">
          <br />
      
      </div>
  </div> */}
      </section>
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-5 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="content">
                <div align="center">
                  {/* <img src="assets/img/Top_Blue_Logo.jpg" className="img-fluid" /> */}
                  <h3>DraftsMan</h3>
                  <h4>Why Choose Draftsmans.com?</h4>
                </div>
                <p align="Justify">
                  Draftsmans.com is an emerging engineering solution company. We
                  offer wide-ranging solutions to the Structural &
                  Non-Structural Steel detailing needs of wide array of clients
                  ranging from construction companies, EPC contractors, leading
                  engineering & manufacturing firms, refineries, petrochemical
                  industries, consultants & contractors.
                </p>
                <div className="text-center">
                  <Link href="/about" className="more-btn">
                    Read More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 d-flex">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div
                    className="col-xl-4 d-flex align-items-stretch aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-receipt"></i>
                      <h2
                        style={{
                          fontSize: "large",
                          fontFamily: "arial",
                          color: "#000000",
                        }}
                      >
                        3D Modeling/CAD
                      </h2>
                      <p>
                        Using TEKLA, AutoCAD, Advance Steel Works (ASW), Revit,
                        Idea Statica etc to Define Structural & Non Structural
                        drawing works.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 d-flex align-items-stretch aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-cube-alt"></i>
                      <h2
                        style={{
                          fontSize: "large",
                          fontFamily: "arial",
                          color: "#000000",
                        }}
                      >
                        Design &amp; Details Engineering
                      </h2>
                      <p>
                        Structural Steel, Non Structural Steel, Tensile Membrane
                        Structure, Architectural Metal works Detailed Shop
                        drawing and Design Calculation Services.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 d-flex align-items-stretch aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-images"></i>
                      <h2
                        style={{
                          fontSize: "large",
                          fontFamily: "arial",
                          color: "#000000",
                        }}
                      >
                        Hire an Experienced Reviewer/Checker
                      </h2>
                      <p>
                        Hire a Gulf experienced Senior Engineers as reviewer or
                        checker for all the detailed shop drawings output and
                        Design Calculation for peace of mind and save time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="values" class="values">
        <div class="container">
          <div align="Center">
            <h2>Some of Our Services</h2>
            <p align="justify">
              Our team is of highly qualified and experienced engineers with
              booming software such as Tekla, AutoCAD, ASW, Revit with latest
              Editions. Our team has extensive experience working with all
              international standards, in both Imperial and Metric systems. We
              are able to cater the specific requirements of our prospective
              clients around the world. Quality is our state of mind and
              achieving client delighters through excellence in project
              management is the foundation stone of our organization. We furnish
              quality solutions & Services for detailing and Design Calculation
              using SAP 2000, Idea Statica for complete projects.
            </p>
          </div>
          <div class="row">
            <div
              class="col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
            >
              <div
                class="card"
                style={{ backgroundImage: "url(assets/images/values-1-1.jpg)" }}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">Non-Structure Steel Works</a>
                  </h5>
                  <p class="card-text">
                    We provide engineering Drawing services for non-structural &
                    Architectural metal segments for projects involving
                    Airports, Universities...
                  </p>
                  <div class="read-more">
                    <Link href="/non-structural-steel-works">
                      <i class="icofont-arrow-right"></i> Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                class="card"
                style={{ backgroundImage: "url(assets/images/values-2-1.jpg)" }}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">Structure Steel Works</a>
                  </h5>
                  <p class="card-text">
                    Structural steel drawing services involve creating detailed
                    shop drawings and plans for the fabrication and erection...
                  </p>
                  <div class="read-more">
                    <Link href="/structural-steel-works">
                      <i class="icofont-arrow-right"></i> Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 d-flex align-items-stretch mt-4 aos-init"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                class="card"
                style={{ backgroundImage: "url(assets/images/values-3.jpg)" }}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">Tensile Structural Works</a>
                  </h5>
                  <p class="card-text">
                    Tensile structure design and drawing services involve
                    creating plans and specifications for structures that
                    utilize tensile fabric...
                  </p>
                  <div class="read-more">
                    <Link href="/tensile-fabric-structure">
                      <i class="icofont-arrow-right"></i> Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 d-flex align-items-stretch mt-4 aos-init"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                class="card"
                style={{ backgroundImage: "url(assets/images/values-4.jpg)" }}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">Design Calculation And Analysis Service</a>
                  </h5>
                  <p class="card-text">
                    We provide complete engineering solution including design
                    calculation for steel structure or Non- structure works with
                    the facility...
                  </p>
                  <div class="read-more">
                    <Link href="/design-calculation-and-analysis-service">
                      <i class="icofont-arrow-right"></i> Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExpertiseSection />
    </>
  );
};

export default HomePage;
