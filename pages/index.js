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
          background: "url('assets/images/hero-bg.jpg') center center",
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
                  <h4>Why Choose Draftsmans Technologies ?</h4>
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
                  <a href="AboutUs.aspx" className="more-btn">
                    Read More <i className="bx bx-chevron-right"></i>
                  </a>
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
                        Process, Piping, Equipment, Civil &amp; Structural,
                        Electrical &amp; Instrumentation
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
                        Process, Piping, Equipment, Civil &amp; Structural,
                        Electrical &amp; Instrumentation
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
                        Laser Scan 3D Modeling
                      </h2>
                      <p>
                        Process, Piping, Equipment, Civil &amp; Structural,
                        Electrical &amp; Instrumentation
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
                    <a href="">Building Information Modeling (BIM)</a>
                  </h5>
                  <p class="card-text">
                    BIM is increasingly essential for modern construction
                    industries. Here in Draftsman...
                  </p>
                  <div class="read-more">
                    <Link href="/">
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
                    <a href="">Structural Steel Detailing</a>
                  </h5>
                  <p class="card-text">
                    Draftsman Technologies supports your organization by
                    providing accurate and cost...
                  </p>
                  <div class="read-more">
                    <Link href="/">
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
                    <a href="">Rebar &amp; Precast Detailing</a>
                  </h5>
                  <p class="card-text">
                    Rebar detailing is a detailed process of preparing Shop
                    Drawing in steel...
                  </p>
                  <div class="read-more">
                    <Link href="/">
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
                    <a href="">Plant Engineering Design Services</a>
                  </h5>
                  <p class="card-text">
                    Draftsman Technologies provides wide range of services in
                    Plant Design Engineering...
                  </p>
                  <div class="read-more">
                    <Link href="/">
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
