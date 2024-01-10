import DynamicCarousel from "@/components/DyamicCarousel";
import Head from "next/head";
import React from "react";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Draftsman | Our Projects</title>
      </Head>{" "}
      <section className="dynamic-carousel p-0">
        {" "}
        <DynamicCarousel>
          <div className="item">
            <img src="/assets/non-structural/glass balustrade 03.webp" />
          </div>
          <div className="item">
            <img src="/assets/non-structural/Glass balustrade 01.webp" />
          </div>
          <div className="item">
            <img src="/assets/non-structural/Grating 01.webp" />
          </div>

          <div className="item">
            <img src="/assets/non-structural/handrail 02.webp" />
          </div>

          <div className="item">
            <img src="/assets/non-structural/pegola 02.webp" />
          </div>
          <div className="item">
            <img src="/assets/non-structural/pergola 01.webp" />
          </div>
          <div className="item">
            <img src="/assets/non-structural/spiral stair.webp" />
          </div>
          <div className="item">
            <img src="/assets/non-structural/spiral stair 01.webp" />
          </div>
          <div className="item">
            <img src="/assets/non-structural/staircase 01.webp" />
          </div>
          <div className="item">
            <img src="/assets/non-structural/staircase 02.webp" />
          </div>
          <div className="item">
            <img src="/assets/non-structural/staircase 03.webp" />
          </div>
        </DynamicCarousel>
      </section>
      <section className="p-5">
        <div className="container">
          <center>
            <h2>Scope Of Works</h2>
            <h5>Hardscape External Non Structural Works</h5>
          </center>
        </div>
      </section>
      <section className="non-ul-data-project mt-0 p-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul class="tensil-fabric">
                <li>
                  <span>
                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                  </span>
                  <span>Aluminium Mashrabiya Shades.</span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                  </span>
                  <span> Entrance Canopy Mashrabiya Shades</span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                  </span>
                  <span>Ship Ladders.</span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                  </span>
                  <span>Cat Ladders.</span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                  </span>
                  <span>Umbrella Type PVC Car Parking Shades.</span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                  </span>
                  <span>Cantilever type HDPE BUS parking Shades.</span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                  </span>
                  <span> Waiting Area Shades.</span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                  </span>
                  <span>G.I Gratings.</span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                  </span>
                  <span>MS steel Handrail.</span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                  </span>
                  <span>Glass Balustrade.</span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                  </span>
                  <span>Planter Boxes.</span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                  </span>
                  <span>Play Area HDPE tensile shade.</span>
                </li>
              </ul>
            </div>
            <div className="project-gallery mt-5 mb-5">
              <div className="row">
                <div className="col-md-6">
                  <img src="/assets/prophoto/one.jpg" />
                </div>
                <div className="col-md-6">
                  <img src="/assets/prophoto/two.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
