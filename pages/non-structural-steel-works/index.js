import DynamicCarousel from "@/components/DyamicCarousel";
import Modal from "@/components/Modal";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const NonStructralSteelWorks = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [isShow, setIsShow] = useState(false);
  const imageModalHandler = (e) => {
    setSelectedImage(e.target.src);
    setIsShow(true);
  };

  const modalCloseHandler = () => {
    setIsShow(false);
    setSelectedImage("");
  };

  let modal = (
    <div className="imagemodal">
      <div className="imageinner">
        <img src={selectedImage} />
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Draftsman | Non-Structural-Steel-Works</title>
      </Head>
      {isShow && (
        <Modal>
          <div className="popupimage">
            <div className="closepopup" onClick={modalCloseHandler}>
              &times;
            </div>
            <div className="zoomInage">
              <img src={selectedImage} />
            </div>
          </div>
        </Modal>
      )}
      <section className="dynamic-carousel p-0">
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
      <section className="non-ul-data">
        <center>
          <h2>Non-Structure Steel Works</h2>
          <h5>Concept Creating, Design, Drawing & Approval</h5>
        </center>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              {" "}
              <p align="justify">
                We provide engineering Drawing services for non-structural &
                Architectural metal segments for projects involving Airports,
                Universities, Private Villas, Schools, Govt. Institutions,
                Construction building etc.
              </p>
              <p align="justify">
                Creating Sketches, Proposal Drawings, Design Calculation, Shop
                drawings until get approved from concern Consultant /
                Municipality / Main Contractors by continuous coordination and
                red line markup comments incorporation to the to Shop drawings
                for submission.
              </p>
              <p align="justify">
                Our Experienced Draftsmans team having prior field experience
                for the Non Structural & Architectural metal projects which
                enable us to achieve target time frame scheduled as per
                commitment to our valuable client.
              </p>
              <div className="listitem">
                <div className="grop-items">
                  <span>-</span>
                  <span align="justify">
                    Using computer-aided design (CAD), TEKLA, Advance Steel
                    Works (ASW), Revit software to create 3D models of the
                    structural steel components for visualization and analysis.
                  </span>
                </div>
                <div className="grop-items">
                  <span>-</span>
                  <span align="justify">
                    Creating detailed shop drawings that provide precise
                    specifications for each steel component.
                  </span>
                </div>
                <div className="grop-items">
                  <span>-</span>
                  <span align="justify">
                    Including information on dimensions, materials, welding
                    details, and other specifications.
                  </span>
                </div>
                <div className="grop-items">
                  <span>-</span>
                  <span align="justify">
                    Collaborating with architects, civil engineers, and other
                    professionals to ensure proper integration of the structural
                    steel components into the overall project.
                  </span>
                </div>
                <div className="grop-items">
                  <span>-</span>
                  <span align="justify">
                    Ensuring that all drawings comply with relevant industry
                    codes and standards.
                  </span>
                </div>
                <div className="grop-items">
                  <span>-</span>
                  <span align="justify">
                    Making revisions to drawings as needed based on feedback,
                    changes in design, or site conditions.
                  </span>
                </div>
                <div className="grop-items">
                  <span>-</span>
                  <span align="justify">
                    Implementing quality control measures to ensure accuracy and
                    adherence to specifications.
                  </span>
                </div>
                <div className="grop-items">
                  <span>-</span>
                  <span>
                    Estimating the quantities of materials needed for
                    fabrication and construction.
                  </span>
                </div>
                <div className="grop-items">
                  <span>-</span>
                  <span align="justify">
                    Specifying the type, grade, and size of steel materials to
                    be used in the construction.
                  </span>
                </div>
              </div>
              <div className="somework">
                <p>
                  Here under some of standard Non Structural & Architectural
                  metal works lists which we have expertise for approval as
                  follows:-
                </p>
                <ul>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span>- Steel / Aluminum Pergola works.</span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span> Mashrabia Shade / Pergola installation.</span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span>
                      {" "}
                      Spiral / Tornado Style Steel stair for Villas, Hotels etc.
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span> Floating Type Steel Stair.</span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span>Steel Platforms.</span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span> Cat ladders.</span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span> Main Stairs.</span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span>
                      {" "}
                      Stainless steel Guardrail / Handrail for stairs, void area
                      etc.
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span> Glass balustrade for Stair, Void, Balcony etc.</span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span>
                      {" "}
                      Ship Ladder / Maintenance ladder for building, schools
                      etc.
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span>
                      {" "}
                      Walkway Shade / Pergola for school, Govt building etc.
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span> Stainless cladding works and supports.</span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span>Decking support and installation.</span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span> Grating platforms.</span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span>
                      {" "}
                      Lift Architrave stainless steel cladding works.
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </span>
                    <span>
                      {" "}
                      Steel handrail / Guard rail for Hardscape works.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6" align="center">
              <div class="row">
                <div className="gallery">
                  <div className="gallery-item">
                    <img
                      src="/assets/non-structural/glass balustrade 03.webp"
                      alt=""
                      width="100%"
                      onClick={(evt) => imageModalHandler(evt)}
                    />
                    <div className="inneritem">Glass Balustrade</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/non-structural/Glass balustrade 01.webp"
                      alt=""
                      width="100%"
                      onClick={(evt) => imageModalHandler(evt)}
                    />
                    <div className="inneritem">Glass Balustrade</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/non-structural/Grating 01.webp"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Grating</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/non-structural/handrail 02.webp"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Handrail</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/non-structural/pegola 02.webp"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Pergola</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/non-structural/pergola 01.webp"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Pergola</div>
                  </div>
                  <div className="gallery-item">
                    {" "}
                    <img
                      src="/assets/non-structural/spiral stair.webp"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Spiral Stair</div>
                  </div>
                  <div className="gallery-item">
                    {" "}
                    <img
                      src="/assets/non-structural/spiral stair 01.webp"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Spiral Stair</div>
                  </div>
                  <div className="gallery-item">
                    {" "}
                    <img
                      src="/assets/non-structural/staircase 01.webp"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Staircase</div>
                  </div>
                  <div className="gallery-item">
                    {" "}
                    <img
                      src="/assets/non-structural/staircase 02.webp"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Staircase</div>
                  </div>
                  <div className="gallery-item">
                    {" "}
                    <img
                      src="/assets/non-structural/staircase 03.webp"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Cantilever Staircase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NonStructralSteelWorks;
