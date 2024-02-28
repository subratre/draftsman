import Head from "next/head";
import React from "react";

const Contact = () => {
  const formSubmitHandler = async () => {
    const to = "subrat.nbc@gmail.com";
    const subject = "Test Email";
    const html = "<p>This is a test email.</p>";

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to, subject, html }),
      });

      if (response.ok) {
        // setStatus("Email sent successfully");
      } else {
        // setStatus("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // setStatus("Failed to send email");
    }
  };
  return (
    <>
      <Head>
        <title>Draftsman | Contact</title>
      </Head>
      <section id="about1" style={{ backgroundColor: "white" }} className="p-0">
        <section className="contact-banner"></section>
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12">
              <section
                style={{ marginTop: "50px", backgroundColor: "white" }}
                className="p-0"
              >
                <h3 style={{ fontSize: "xLarge", color: "#0094ff" }}>
                  {" "}
                  CONTACT US
                </h3>
                <p>
                  <b>Draftsmans</b>
                  <br />
                  No - 4859, Cuttack Puri Road, <br />
                  Mancheswar Industrial Estate,
                  <br /> Bhubaneswar - 751010, India <br />
                </p>
                <p>
                  <b>INDIA :</b> (+91) 9040759551
                </p>

                <p>
                  <b>Email:</b> sales@draftsmans.com
                </p>
              </section>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div class="form">
              <br />
              <strong>Enquiry</strong> <br />
              <br />
              <span
                id="ContentPlaceHolder1_lbl_Message"
                style={{ color: "Red", fontWeight: "bold" }}
              ></span>
              <div class="row mb-3">
                <div class="form-group col-md-4">
                  <input
                    name="ctl00$ContentPlaceHolder1$txt_Name"
                    type="text"
                    id="ContentPlaceHolder1_txt_Name"
                    class="form-control"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div class="validation"></div>
                </div>
                <div class="form-group col-md-4">
                  <input
                    name="ctl00$ContentPlaceHolder1$txt_PhoneNo"
                    type="text"
                    id="ContentPlaceHolder1_txt_PhoneNo"
                    class="form-control"
                    placeholder="Phone No."
                  />
                  <div class="validation"></div>
                </div>
                <div class="form-group col-md-4">
                  <input
                    name="ctl00$ContentPlaceHolder1$txt_Email"
                    type="text"
                    id="ContentPlaceHolder1_txt_Email"
                    class="form-control"
                    placeholder="Your Email ID"
                  />
                  <div class="validation"></div>
                </div>
              </div>
              <div class="form-group mb-3">
                <select className="form-control">
                  <option>Shop Drawings</option>
                  <option>Fabrication Drawing</option>
                  <option>3D Modeling</option>
                  <option>Design load calculation</option>
                  <option>Turnkey Project</option>
                  <option>Others</option>
                </select>
                <div class="validation"></div>
              </div>
              <div class="form-group mb-3">
                <textarea
                  name="ctl00$ContentPlaceHolder1$txt_Message"
                  rows="2"
                  cols="20"
                  id="ContentPlaceHolder1_txt_Message"
                  class="form-control"
                  placeholder="Enter Message"
                  style={{ height: "80px" }}
                ></textarea>
                <div class="validation"></div>
              </div>
              <div class="text-center">
                <input
                  type="button"
                  name="ctl00$ContentPlaceHolder1$btn_Submit"
                  value="Submit"
                  id="ContentPlaceHolder1_btn_Submit"
                  class="btn-success"
                  style={{ width: "150px" }}
                  onClick={formSubmitHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
