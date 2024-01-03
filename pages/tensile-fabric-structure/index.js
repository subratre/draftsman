import Head from "next/head";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import DynamicCarousel from "@/components/DyamicCarousel";

const TensilStructuralWorks = () => {
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
  return (
    <>
      <Head>
        <title>Draftsman | Tensile Structural Works</title>
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
            <img src="/assets/tensilfabric/Cantiliver Shade.jpg" />
          </div>
          <div className="item">
            <img src="/assets/tensilfabric/Curved Shade.jpg" />
          </div>
          <div className="item">
            <img src="/assets/tensilfabric/Car Parks PVC-HDPE.jpg" />
          </div>

          <div className="item">
            <img src="/assets/tensilfabric/MAIN PHOTO 02.jpg" />
          </div>

          <div className="item">
            <img src="/assets/tensilfabric/Modeling.jpg" />
          </div>
          <div className="item">
            <img src="/assets/tensilfabric/PVC Reverse Dome.jpg" />
          </div>
          <div className="item">
            <img src="/assets/tensilfabric/PVC Special Shade.jpg" />
          </div>
          <div className="item">
            <img src="/assets/tensilfabric/Single Dome.jpg" />
          </div>
          <div className="item">
            <img src="/assets/tensilfabric/Sitting Area.jpg" />
          </div>
          <div className="item">
            <img src="/assets/tensilfabric/Solar Car park.jpg" />
          </div>
        </DynamicCarousel>
      </section>
      <section className="mt-0 py-5 pb-0">
        <div className="container">
          <center>
            <h2>Tensile Structural Works</h2>
            <h5>Concept Creating, Design, Drawing & Approval</h5>
          </center>
          <div className="row mt-4">
            <div className="col-lg-6">
              <p align="justify">
                Tensile structure design and drawing services involve creating
                plans and specifications for structures that utilize tensile
                fabric or membranes. Tensile membrane structures are
                characterized by their use of tensioned elements, such as cables
                and membranes, to provide support and shape to the overall
                structure. These structures are commonly used for various
                applications, including stadiums, exhibition halls, canopies,
                and architectural features. Here's an overview of the services
                typically involved in tensile structure design and drawing:
              </p>
              <div className="tructureitemlidting">
                <div className="item">
                  <p className="headname">Site Analysis:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Conducting a thorough analysis of the site conditions,
                      including topography, wind loads, and environmental
                      factors.
                    </span>
                  </div>
                </div>
                <div className="item">
                  <p className="headname">Conceptual Design:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Developing initial sketches and conceptual designs for the
                      tensile structure, considering architectural and
                      functional requirements.
                    </span>
                  </div>
                </div>
                <div className="item">
                  <p className="headname">Structural Engineering Analysis:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Performing structural analysis to ensure the tensile
                      structure can withstand loads and forces such as wind,
                      snow, and live loads.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Using Design Software like Easy Stat, Staad Pro, SAP 2000,
                      Idea Statica, Procon etc to get precise outcome to suite
                      our valuable clients specification and offer.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Conducting analysis to determine the impact of wind and
                      environmental conditions on the tensile structure.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Creating detailed designs for the tensile membrane,
                      specifying shape, size, and material properties.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Developing designs for the cable and support structures,
                      including details for tensioning systems and connections.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Designing foundations that can support the tensile
                      structure securely using Procon Software.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Implementing quality control measures to ensure accuracy
                      and adherence to specifications.
                    </span>
                  </div>
                </div>
                <div className="item">
                  <p className="headname">Material Selection:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Recommending appropriate materials for the tensile
                      membrane, cables, and supporting structures, considering
                      factors like durability, flexibility, and resistance to
                      environmental conditions.
                    </span>
                  </div>
                </div>
                <div className="item">
                  <p className="headname">Fabrication Drawings:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Creating detailed shop drawings for the fabrication of
                      tensile membrane panels, cables, and other components.
                    </span>
                  </div>
                </div>
                <div className="item">
                  <p className="headname">3D Modeling:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Using computer-aided design (CAD) software to create 3D
                      models of the tensile structure for visualization and
                      analysis.
                    </span>
                  </div>
                </div>
                <div className="item">
                  <p className="headname">
                    Lighting and Acoustic Considerations:
                  </p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Incorporating lighting and acoustic design considerations,
                      especially for applications like event spaces.
                    </span>
                  </div>
                </div>
                <div className="item">
                  <p className="headname">Cost Estimation:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Providing estimates for the cost of materials,
                      fabrication, and construction.
                    </span>
                  </div>
                </div>
                <div className="item">
                  <p className="headname">Regulatory Compliance:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Ensuring that the design complies with relevant building
                      codes and standards.
                    </span>
                  </div>
                </div>
                <div className="item">
                  <p className="headname">Construction Documents:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Generating detailed construction documents and drawings
                      for use during the actual construction phase.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6" align="center">
              <div class="row">
                <div className="gallery">
                  <div className="gallery-item">
                    <img
                      src="/assets/tensilfabric/Cantiliver Shade.jpg"
                      alt=""
                      width="100%"
                      onClick={(evt) => imageModalHandler(evt)}
                    />
                    <div className="inneritem">Cantiliver Shade</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/tensilfabric/Car Parks PVC-HDPE.jpg"
                      alt=""
                      width="100%"
                      onClick={(evt) => imageModalHandler(evt)}
                    />
                    <div className="inneritem">Car Parks PVC-HDPE</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/tensilfabric/Curved Shade.jpg"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Curved Shade</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/tensilfabric/MAIN PHOTO 02.jpg"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">MAIN PHOTO 02</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/tensilfabric/MAIN PHOTO 03.jpg"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">MAIN PHOTO 03</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/tensilfabric/Modeling.jpg"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Modeling</div>
                  </div>
                  <div className="gallery-item">
                    {" "}
                    <img
                      src="/assets/tensilfabric/PVC Reverse Dome.jpg"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">PVC Reverse Dome</div>
                  </div>
                  <div className="gallery-item">
                    {" "}
                    <img
                      src="/assets/tensilfabric/PVC Special Shade.jpg"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">PVC Special Shade</div>
                  </div>
                  <div className="gallery-item">
                    {" "}
                    <img
                      src="/assets/tensilfabric/Single Dome.jpg"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Single Dome</div>
                  </div>
                  <div className="gallery-item">
                    {" "}
                    <img
                      src="/assets/tensilfabric/Sitting Area.jpg"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Sitting Area</div>
                  </div>
                  <div className="gallery-item">
                    {" "}
                    <img
                      src="/assets/tensilfabric/Solar Car park.jpg"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Solar Car park</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <p align="justify">
                Tensile structure design and drawing services are typically
                offered by architects, structural engineers, and specialized
                firms with expertise in tensioned membrane structures. These
                services are essential to ensure that the tensile structure is
                not only visually appealing but also structurally sound and able
                to meet performance requirements.
              </p>

              <p align="justify">
                Here under some of types of Structural Steel works project lists
                which has been done by our experienced team over the years and
                at present as follows:-
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="non-ul-data mt-0 p-0">
        {/* <center>
          <h2>Tensile Fabric Structure (HDPE & PVC) </h2>
        </center> */}
        <div className="container mt-2">
          <div className="row">
            <ul className="tensil-fabric">
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span>Majlis Shade installation (Dome, Sail type etcl).</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span>
                  {" "}
                  Car parks shades (Cantilever, Dome, Umbrella type, Sail type
                  etc)
                </span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span>Children play area shade for parks, schools etc.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span> Swimming pool shade works, Sail or dome type.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span>Temporary labor shading solution.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span> Truss type Long Span Shade.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span>
                  {" "}
                  Center Dome type Shade for Shopping mall, School Courtyard
                  etc.
                </span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span> Specialized structure with Trusses.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TensilStructuralWorks;
