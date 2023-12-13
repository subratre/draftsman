import React from "react";

const Contact = () => {
  return (
    <section
      id="about1"
      style={{ backgroundColor: "white" }}
      className="p-0 mb-3"
    >
      <section className="contact-banner"></section>
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <section
              style={{ marginTop: "100px", backgroundColor: "white" }}
              className="p-0"
            >
              <h2 style={{ fontSize: "xLarge", color: "#0094ff" }}>
                {" "}
                CONTACT US
              </h2>
              <p>
                <b>Draftsman</b>
                <br />
                Address,
                <br />
                India <br />
                <br />
              </p>
              <p>
                <b>INDIA :</b> (+91) 12345678
              </p>

              <br />
              <p>
                <b>Email:</b> info@draftsman.com
              </p>
              <br />
              <br />
            </section>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div class="form">
            <br />
            Send Email Message to us...
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
              <input
                name="ctl00$ContentPlaceHolder1$txt_Subject"
                type="text"
                id="ContentPlaceHolder1_txt_Subject"
                class="form-control"
                placeholder="Enter Subject"
              />
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
                type="submit"
                name="ctl00$ContentPlaceHolder1$btn_Submit"
                value="Submit"
                id="ContentPlaceHolder1_btn_Submit"
                class="btn-success"
                style={{ width: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
