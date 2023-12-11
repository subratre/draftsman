import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 footer-contact">
              <h3 style={{ color: "white" }}>Himago Technologies</h3>
              <p>
                Prahaladhapuram, Simhachalam Road,
                <br />
                Visakhapatnam, Andhra Pradesh (INDIA)
                <br />
                <br />
              </p>
              <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                <strong>Phone:</strong> (+91) 8185065555
                <br />
              </p>
              <p>
                <strong>Email:</strong> director@himagotech.com
              </p>
            </div>

            <div class="col-lg-4 col-md-4 footer-links">
              <h4 style={{ color: "white" }}>OUR SERVICES</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="Building-Information-Modeling.aspx">
                    Building Information Modeling (BIM)
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="Structural-Steel-Detailing.aspx">
                    Structural Steel Detailing
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="Structural-Steel-Estimating-Services.aspx">
                    Structural Steel Estimating Services
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="Rebar-Precast-Detaling.aspx">
                    Rebar &amp; Precast Detailing
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="Plant-Engineering-Design-Services.aspx">
                    Plant Engineering Design Services
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4 footer-links">
              <h4 style={{ color: "white" }}>OUR PROJECTS</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="Projects.aspx">Main Steel Structure</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="Projects.aspx">Architecture Steel Structure</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="Projects.aspx">Bridge &amp; Elevated Walk</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="Projects.aspx">Miscellaneous Steel Structure</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="Projects.aspx">Rebar Steel Structure</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container d-lg-flex py-4">
        <div class="mr-lg-auto text-center text-lg-left">
          <div class="copyright">
            © Copyright{" "}
            <strong>
              <span>Himago Technologies</span>
            </strong>
            . All Rights Reserved. <br /> Designed by{" "}
            <a href="http://www.srisaisolutions.in/">Sri Sai Solutions</a>
          </div>
        </div>
        <div class="social-links text-center text-lg-right pt-3 pt-lg-0">
          <a
            href="https://twitter.com/detailinghimago/status/1304441750144999425?s=21"
            class="twitter"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/himago.himago.90"
            class="facebook"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/p/CEgf5pcjtPQ/?igshid=1cpkf9dwq5xp8"
            class="instagram"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="mailto:director@himagotech.com" class="google-plus">
            <i class="bx bxl-internet-explorer"></i>
          </a>
          <a
            href="http://linkedin.com/in/himagotech"
            class="linkedin"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
