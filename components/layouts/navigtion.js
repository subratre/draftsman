import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
  const currentRoute = usePathname();

  console.log(currentRoute);
  return (
    <div
      id="header-sticky-wrapper"
      className="sticky-wrapper"
      style={{ height: "70px;" }}
    >
      <header id="header" style={{ width: "1351px" }}>
        <div className="container d-flex align-items-center">
          <div className="logo me-auto">
            <Link href="/" className="logologo">
              <h4>Draftsmans</h4>
            </Link>
          </div>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className={currentRoute === "/" ? "active" : ""}>
                <Link href="/">Home</Link>
              </li>
              <li className={currentRoute === "/about" ? "active" : ""}>
                <Link href="/about">About</Link>
              </li>
              <li className="drop-down">
                <a href="#">Services</a>
                <ul>
                  <li>
                    <a href="Building-Information-Modeling.aspx">
                      Building Information Modeling (BIM)
                    </a>
                  </li>
                  <li>
                    <a href="Structural-Steel-Detailing.aspx">
                      Structural Steel Detailing
                    </a>
                  </li>
                  <li>
                    <a href="Structural-Steel-Estimating-Services.aspx">
                      Structural Steel Estimating Services
                    </a>
                  </li>
                  <li>
                    <a href="Rebar-Precast-Detaling.aspx">
                      Rebar &amp; Precast Detailing
                    </a>
                  </li>
                  <li>
                    <a href="Plant-Engineering-Design-Services.aspx">
                      Plant Engineering Design Services
                    </a>
                  </li>
                </ul>
              </li>
              <li className={currentRoute === "/projects" ? "active" : ""}>
                <Link href="/projects">Our Projects</Link>
              </li>
              <li
                className={currentRoute === "/sample-drawing" ? "active" : ""}
              >
                <Link href="/sample-drawing">Sample Drawing</Link>
              </li>
              <li className={currentRoute === "/contact" ? "active" : ""}>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
