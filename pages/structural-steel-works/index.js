import Modal from "@/components/Modal";
import Head from "next/head";
import React, { useState } from "react";

const StructuralSteelWorks = () => {
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
        <title>Draftsman | Structural-Steel-Works</title>
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
      <section className="non-structral structral"></section>
      <section className="non-ul-data">
        <center>
          <h2>Structure Steel Works </h2>
          <h5>Concept Creating, Design, Drawing & Approval</h5>
        </center>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-6">
              <p align="justify">
                Structural steel drawing services involve creating detailed shop
                drawings and plans for the fabrication and erection of
                structural steel components in construction projects. These
                drawings are crucial for ensuring the accuracy and integrity of
                the steel structure. Here's an overview of what these services
                typically include:
              </p>
              <div className="tructureitemlidting">
                <div className="item">
                  <p className="headname">Structural Engineering Analysis:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Conducting a thorough analysis of the structural
                      requirements and specifications.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Determining the loads and forces that the structure will
                      need to withstand.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Using Design Software like Staad Pro, SAP 2000, Idea
                      Statica, Procon etc to get precise outcome to suite our
                      valuable clients specification and offer.
                    </span>
                  </div>
                </div>
                <div className="item">
                  <p className="headname">Conceptual Design:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Developing initial sketches and conceptual designs for the
                      structural steel components.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Considering factors such as architectural and functional
                      requirements.
                    </span>
                  </div>
                </div>
                <div className="item">
                  <p className="headname">Detailed Drawings:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Using computer-aided design (CAD), TEKLA, Advance Steel
                      Works (ASW) software to create 3D models of the structural
                      steel components for visualization and analysis.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Creating detailed shop drawings that provide precise
                      specifications for each steel component.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Including information on dimensions, materials, welding
                      details, and other specifications.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Collaborating with architects, civil engineers, and other
                      professionals to ensure proper integration of the
                      structural steel components into the overall project.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Ensuring that all drawings comply with relevant industry
                      codes and standards.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Making revisions to drawings as needed based on feedback,
                      changes in design, or site conditions.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Implementing quality control measures to ensure accuracy
                      and adherence to specifications.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Estimating the quantities of materials needed for
                      fabrication and construction.
                    </span>
                  </div>
                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Specifying the type, grade, and size of steel materials to
                      be used in the construction.
                    </span>
                  </div>
                </div>
                <div className="item">
                  <p className="headname">Site Survey Coordinates:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      We provide all the coordinates and information onsite
                      engineers to get site survey as per actual site condition
                      so that next step of engineering works can be done
                      accordingly which is to produce fabrication drawing for
                      factory.
                    </span>
                  </div>
                </div>
                <div className="item">
                  <p className="headname">Fabrication Drawings:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Generating drawings that guide the fabrication process,
                      including cut lists and assembly instructions.
                    </span>
                  </div>
                </div>
                <div className="item">
                  <p className="headname">Erection Plans:</p>

                  <div className="sub-item">
                    <span>-</span>
                    <span>
                      Developing plans and drawings for the installation and
                      assembly of the structural steel components on-site.
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
                      src="/assets/structural/Canopies Str.jpg"
                      alt=""
                      width="100%"
                      onClick={(evt) => imageModalHandler(evt)}
                    />
                    <div className="inneritem">Canopies Str</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/structural/Escalator Support.webp"
                      alt=""
                      width="100%"
                      onClick={(evt) => imageModalHandler(evt)}
                    />
                    <div className="inneritem">Escalator Support</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/structural/Mezzanine Str.png"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Mezzanine Str</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/structural/Modular Steel.png"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Modular Steel</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/structural/Oill Industries Str.jpg"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Oill Industries Str</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/assets/structural/Solar Steel Str.webp"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Modeling</div>
                  </div>
                  <div className="gallery-item">
                    {" "}
                    <img
                      src="/assets/structural/Truss Str.jpeg"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">PVC Reverse Dome</div>
                  </div>
                  <div className="gallery-item">
                    {" "}
                    <img
                      src="/assets/structural/Walkway Bridge.jpg"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">PVC Special Shade</div>
                  </div>
                  <div className="gallery-item">
                    {" "}
                    <img
                      src="/assets/structural/Warehouses.jpeg"
                      onClick={(evt) => imageModalHandler(evt)}
                      alt=""
                      width="100%"
                    />
                    <div className="inneritem">Warehouses</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <p align="justify">
                Here under some of types of Structural Steel works project lists
                which has been done by our experienced team over the years and
                at present as follows:-
              </p>
            </div>

            <ul className="structural-work">
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span>Warehouse turnkey structure.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span> Mezzanine floor structure.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span> Lift Enclosure structure works.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span> Main Stairs</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span>Escalator steel structure supports.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span> All kinds of Brackets and design analysis.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span> Walkway Bridges.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span> Specialized structure with Trusses.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span> Temporary Shade structure.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span> Corrugated or Sandwich panel structures.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span>UB/UC beam structural works.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span> Solar Car park steel structures.</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span>
                  Solar panels installation steel structure support works.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default StructuralSteelWorks;
