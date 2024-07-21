import Head from "next/head";
import React from "react";

const HireALandPlotFlat = () => {
  return (
    <>
      <Head>
        <title>Draftsman | Hire a Land/Plot/Flat Surveyor</title>
      </Head>
      <section className="p-0 m-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29934.54185841177!2d85.83419187375839!3d20.307810194668168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a226fb69323%3A0x53b5c34a5153f8f!2sMancheswar%20Industrial%20Estate%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1721010428632!5m2!1sen!2sin"
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className="mt-0 py-5 pb-0">
        <div className="container">
          <div className="row">
            <div class="col-xl-12 col-lg-12">
              <section style={{ backgroundColor: "white" }} className="p-0">
                <h2 style={{ fontSize: "xLarge", color: "#0094ff" }}>
                  {" "}
                  HIRE US TODAY{" "}
                </h2>
                <p>
                  we specialize in providing thorough and detailed physical
                  surveys for plots available for purchase. We go beyond
                  standard surveying services to offer comprehensive information
                  including distance from main roads, videos showcasing the
                  route from the main road to the plot, high-quality photos,
                  Google Pin map integration, locality insights, nearby
                  facilities, and a comprehensive PDF report. Our goal is to
                  empower you with all the necessary information to make a
                  well-informed decision about your land investment.
                </p>
              </section>

              <section className="how-it-works pt-3 pb-2">
                <div className="row">
                  <div className="col-md-7">
                    <h4 className="pb-2">Our Service Includes:</h4>
                    <div className="table-info table-responsive">
                      <table cellSpacing="1" cellPadding={1}>
                        <tbody>
                          {" "}
                          <tr>
                            <td>Videos Records</td>
                            <td>
                              Videos showcasing the journey from the main road
                              (Hight way) to the plot and sub way to plot.
                            </td>
                          </tr>
                          <tr>
                            <td>Live Video Call</td>
                            <td>
                              Our on-site surveyor will conduct live video call
                              to client to showcase plot surroundings as client
                              himself present on the plot for viewing.
                            </td>
                          </tr>
                          <tr>
                            <td>Measurement</td>
                            <td>
                              Accurate measurement of the plot and distance from
                              main roads by kilometers/meters.
                            </td>
                          </tr>
                          <tr>
                            <td>Photos</td>
                            <td>
                              High-resolution photos capturing from different
                              angle of the plot and surrounding environment.
                            </td>
                          </tr>
                          <tr>
                            <td>Locality</td>
                            <td>
                              Information about the neighborhood, including
                              nearby facilities such as Hospital, Schools, Parks
                              etc.
                            </td>
                          </tr>
                          <tr>
                            <td>Final Report</td>
                            <td>
                              A detailed PDF document summarizing all survey
                              data, visual documentation, Google Pin map link,
                              locality insights, and any additional findings to
                              sent to client upon final payment.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="services-works pt-2">
                      <h4 className="pb-2">Our Services</h4>
                      <ol>
                        <li>
                          <div>Physical Surveys</div>
                          <p>
                            Accurate measurement and mapping of the plot,
                            including boundary lines, topography, and distance
                            from main roads.
                          </p>
                        </li>
                        <li>
                          <div>Route Videos</div>
                          <p>
                            Videos showcasing the journey from the main road to
                            the plot, providing a clear perspective of
                            accessibility.
                          </p>
                        </li>
                        <li>
                          <div>Visual Documentation</div>
                          <p>
                            High-resolution photos capturing different aspects
                            of the plot and surrounding environment.
                          </p>
                        </li>
                        <li>
                          <div>Google Pin Map</div>
                          <p>
                            Interactive map with pins marking the exact location
                            of the plot and nearby points of interest.
                          </p>
                        </li>
                        <li>
                          <div>Locality Insights</div>
                          <p>
                            Information about the neighborhood, including nearby
                            facilities such as schools, hospitals, shopping
                            centers, and more.
                          </p>
                        </li>
                        <li>
                          <div>Comprehensive PDF Report</div>
                          <p>
                            A detailed PDF document summarizing all survey data,
                            visual documentation, Google Pin map link, locality
                            insights, and any additional findings.
                          </p>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <img
                      src="/assets/plot/mascot.png"
                      alt=""
                      className="image-works"
                    />
                  </div>
                </div>
              </section>
              <section className="work-contact pt-3">
                <h4 className="pb-2">Contact Us</h4>
                <p>
                  Ready to explore your potential plot with detailed information
                  at your fingertips? Contact [
                  <strong>
                    {" "}
                    <a href="https://wa.me/9040759551" target="_blank">
                      9040759551
                    </a>
                  </strong>
                  ] today to schedule your personalized plot survey. We are
                  committed to providing you with the insights you need to make
                  an informed decision.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HireALandPlotFlat;
