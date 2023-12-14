import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>Draftsman | About</title>
      </Head>
      <section className="contact-banner"></section>
      <section id="about1" style={{ backgroundColor: "white" }}>
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12">
              <section style={{ backgroundColor: "white" }} className="p-0">
                <h2 style={{ fontSize: "xLarge", color: "#0094ff" }}>
                  {" "}
                  ABOUT US
                </h2>
                <div class="row">
                  <div class="col-lg-6">
                    <p align="Justify">
                      Draftsmans.com is an emerging engineering solution
                      company. We offer wide-ranging solutions to the Structural
                      & Non-Structural Steel detailing needs of wide array of
                      clients ranging from construction companies, EPC
                      contractors, leading engineering & manufacturing firms,
                      refineries, petrochemical industries, consultants &
                      contractors.
                    </p>

                    <p align="Justify">
                      Our team is of highly qualified and experienced engineers
                      with booming software such as Tekla, AutoCAD, ASW, Revit
                      with latest Editions. Our team has extensive experience
                      working with all international standards, in both Imperial
                      and Metric systems. We are able to cater the specific
                      requirements of our prospective clients around the world.
                      Quality is our state of mind and achieving client
                      delighters through excellence in project management is the
                      foundation stone of our organization. We furnish quality
                      solutions & Services for detailing and Design Calculation
                      using SAP 2000, Idea Statica for complete projects.
                    </p>
                    <br />

                    <p>
                      <b>We are expertise in</b>
                    </p>
                    <ul>
                      <li>
                        All type of structural steel works like Ware houses,
                        Mezzanine floor, Platforms, Steel Stairs, Decking works,
                        Gratings etc.
                      </li>
                      <li>
                        Non-Structural Steel Works like Handrailing, Glass
                        Balustrade, Stainless steel Handrail, Aluminum Pergola,
                        Steel Pergola, Caged ladder, Tornado/Spiral style stair,
                        Floating stair, Walkways, Mashrabia Panels works etc.
                      </li>
                      <li>
                        Educational Institute & Laboratory, Hospital, Parking
                        Space, Shopping Mall, Business Spaces & Warehouses.
                      </li>
                      <li>Airports, Bridges & Stadium & Sport Hubs.</li>
                      <li>Conveyor & Material handling Systems.</li>
                      <li>Pipe rack & Platform work.</li>
                      <li>Oil & Gas Structures.</li>
                      <li>Milscellaneous Steel Structures etc.</li>
                    </ul>
                  </div>

                  <div class="col-lg-6" align="center">
                    <div class="row">
                      <div class="col-lg-6">
                        <br />
                        <img
                          src="/assets/images/00-High-Rise-Buildings.jpg"
                          alt=""
                          width="100%"
                        />
                      </div>
                      <div class="col-lg-6">
                        <br />
                        <img
                          src="/assets/images/04-warehouse.jpg"
                          alt=""
                          width="100%"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <br />
                        <img
                          src="/assets/images/01-BIM.jpg"
                          alt=""
                          width="100%"
                        />
                      </div>
                      <div class="col-lg-6">
                        <br />
                        <img
                          src="/assets/images/03-rebarDetailing.jpg"
                          alt=""
                          width="100%"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <br />
                        <img
                          src="/assets/images/02-oilandgas.jpg"
                          alt=""
                          width="100%"
                        />
                      </div>
                      <div class="col-lg-6">
                        <br />
                        <img
                          src="/assets/images/05-Indust-comercial-buildings.jpg"
                          alt=""
                          width="100%"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <br />
                        <img
                          src="/assets/images/06-Misc-structures.jpg"
                          alt=""
                          width="100%"
                        />
                      </div>
                      <div class="col-lg-6">
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
