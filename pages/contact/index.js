import React from "react";

const Contact = () => {
  return (
    <section id="about1" style={{ backgroundColor: "white" }} className="p-0">
      <section className="contact-banner"></section>
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <section style={{ marginTop: "100px", backgroundColor: "white" }}>
              <h2 style={{ fontSize: "xLarge", color: "#0094ff" }}>
                {" "}
                CONTACT US
              </h2>
              <p>
                <b>Himago Technologies</b>
                <br />
                Prahaladhapuram, Simhachalam road,
                <br />
                Visakhapatnam-530027, Andhra Pradesh (INDIA).
                <br />
                <br />
              </p>
              <p>
                <b>INDIA :</b> (+91) 8185065555
                <br />
                <b>SINGAPORE :</b> (+65) 88491223
              </p>

              <br />
              <p>
                <b>Email:</b> director@himagotech.com
              </p>
              <br />
              <br />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
