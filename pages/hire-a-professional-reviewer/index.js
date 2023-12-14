import Head from "next/head";
import React from "react";

const HireAProfessionalReviewer = () => {
  return (
    <>
      <Head>
        <title>Draftsman | Hire A Professonal Reviewer</title>
      </Head>
      <section className="profesional-reviewer"></section>
      <section>
        <div className="container">
          <div className="main-desc">
            <p>
              We also provide highly experienced engineers to review all the
              drawings, design calculation as per clients comments and output of
              shop drawings for approval so that our client can have complete
              freedom from any non approval issue from consultant/main
              contractors.
            </p>
            <p>
              We make sure to provide best possible incorporated shop drawings
              and design calculation based on provided IFC and Specifications
              for complete project.
            </p>
          </div>
          <div className="how-it-works">
            <strong>How It Works :</strong>
            <ul>
              <li>
                <span>
                  <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span>
                  {" "}
                  We get IFC, specification sheets, project details, offered
                  quotation details for proposed items etc.
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span>
                  We prepare rough sketch for each scope of works as per
                  proposed specs for tender.
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                </span>
                <span>
                  Upon confirmation from client, we proceed with Design
                  calculation and shop drawings with guidance of our
                  Professional reviewers.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HireAProfessionalReviewer;
