import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const currentRoute = usePathname();
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 footer-contact">
              <div className="mb-3">
                <Link href="/">
                  <img
                    src="./logo_footer.png"
                    alt=""
                    style={{ width: "60%" }}
                  />
                </Link>
              </div>

              <p>
                No - 4859, Cuttack Puri Road, <br />
                Mancheswar Industrial Estate,
                <br /> Bhubaneswar - 751010, India <br />
              </p>

              <p
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  marginTop: "10px",
                }}
              >
                <strong>India Contacts:</strong> (+91) 9040759551
              </p>
              <p
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  marginTop: "5px",
                }}
              >
                <strong>UAE(Dubai) Contacts:</strong> 00971 (0)529746653{" "}
                <i
                  className="fa fa-whatsapp"
                  aria-hidden="true"
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                ></i>
                <br />
              </p>
              <p>
                <strong>Email:</strong> sales@draftsmans.com
              </p>
            </div>

            <div class="col-lg-4 col-md-4 footer-links">
              <h4 style={{ color: "white" }}>OUR SERVICES</h4>
              <ul>
                <li
                  className={
                    currentRoute === "/non-structural-steel-works"
                      ? "active"
                      : ""
                  }
                >
                  <i class="bx bx-chevron-right"></i>
                  <Link href="/non-structural-steel-works">
                    Non-Structural Steel Works
                  </Link>
                </li>
                <li
                  className={
                    currentRoute === "/structural-steel-works" ? "active" : ""
                  }
                >
                  <i class="bx bx-chevron-right"></i>
                  <Link href="/structural-steel-works">
                    Structural Steel Works
                  </Link>
                </li>
                <li
                  className={
                    currentRoute === "/tensile-fabric-structure" ? "active" : ""
                  }
                >
                  <i class="bx bx-chevron-right"></i>
                  <Link href="/tensile-fabric-structure">
                    Tensile Fabric Structure (HDPE & PVC)
                  </Link>
                </li>
                <li
                  className={
                    currentRoute === "/design-calculation-and-analysis-service"
                      ? "active"
                      : ""
                  }
                >
                  <i class="bx bx-chevron-right"></i>
                  <Link href="/design-calculation-and-analysis-service">
                    Design Calculation & Analysis service
                  </Link>
                </li>
                <li
                  className={
                    currentRoute === "/hire-a-professional-reviewer"
                      ? "active"
                      : ""
                  }
                >
                  <i class="bx bx-chevron-right"></i>
                  <Link href="/hire-a-professional-reviewer">
                    Hire a Professional Reviewer
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4 footer-links">
              <h4 style={{ color: "white" }}>OUR PROJECTS</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link href="/">will be added soon</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div class="container d-lg-flex py-3 align-items-center ">
          <div class="me-lg-auto text-lg-left">
            <div class="copyright">
              © Copyright{" "}
              <strong>
                <span>draftsmans.com</span>
              </strong>
              . All Rights Reserved.
            </div>
          </div>
          <div class="social-links text-center text-lg-right pt-3 pt-lg-0">
            <a
              // href="https://twitter.com/detailinghimago/status/1304441750144999425?s=21"
              class="twitter"
              target="_blank"
            >
              <i class="bx bxl-twitter"></i>
            </a>
            <a
              // href="https://www.facebook.com/himago.himago.90"
              class="facebook"
              target="_blank"
            >
              <i class="bx bxl-facebook"></i>
            </a>
            <a
              // href="https://www.instagram.com/p/CEgf5pcjtPQ/?igshid=1cpkf9dwq5xp8"
              class="instagram"
              target="_blank"
            >
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="mailto:info@draftsman.com" class="google-plus">
              <i class="bx bxl-internet-explorer"></i>
            </a>
            <a
              // href="http://linkedin.com/in/himagotech"
              class="linkedin"
              target="_blank"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
