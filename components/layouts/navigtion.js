import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import MobilNav from "../MobilNav";

const Navigation = () => {
  const currentRoute = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isSHowDropDown, setIsShowDropDown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 37);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showMenuHandler = () => {
    setIsShow(!isShow);
  };

  const showInnerDropdown = () => {
    setIsShowDropDown(!isSHowDropDown);
  };

  useEffect(() => {
    setIsShow(false);
  }, [currentRoute]);

  console.log(currentRoute);
  return (
    <div
      id="header-sticky-wrapper"
      className={isScrolled ? "fixedmenu" : ""}
      style={{ height: "70px;" }}
    >
      <header id="header">
        <div className="container d-flex align-items-center">
          <div className="logo me-auto">
            <Link href="/" className="logologo">
              <img
                src="./newlogo.png"
                style={{ width: "100%", display: "block" }}
              />
            </Link>
          </div>

          <div className="humbergs" onClick={showMenuHandler}>
            {isShow ? <span>&times;</span> : <i className="fa fa-bars"></i>}
          </div>

          <MobilNav show={isShow}>
            <motion.div
              className="navmobile"
              initial={{ x: "100%" }}
              animate={{
                x: isShow ? 0 : "100%",
                width: isShow ? "100%" : "0%",
              }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                <li className={currentRoute === "/" ? "active" : ""}>
                  <Link href="/">Home</Link>
                </li>
                <li className={currentRoute === "/about" ? "active" : ""}>
                  <Link href="/about">About</Link>
                </li>
                <li className="drop-down">
                  <a href="#">Services</a>
                  <span onClick={showInnerDropdown}>
                    <i className={`fa fa-caret-down `}></i>
                  </span>

                  <ul className={`${!isSHowDropDown ? "childDrop" : ""}`}>
                    <li
                      className={
                        currentRoute === "/non-structural-steel-works"
                          ? "active"
                          : ""
                      }
                    >
                      <Link href="/non-structural-steel-works">
                        Non-Structural Steel Works
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute === "/structural-steel-works"
                          ? "active"
                          : ""
                      }
                    >
                      <Link href="/structural-steel-works">
                        Structural Steel Works
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute === "/tensile-fabric-structure"
                          ? "active"
                          : ""
                      }
                    >
                      <Link href="/tensile-fabric-structure">
                        Tensile Fabric Structure (HDPE & PVC)
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute ===
                        "/design-calculation-and-analysis-service"
                          ? "active"
                          : ""
                      }
                    >
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
                      <Link href="/hire-a-professional-reviewer">
                        Hire a Professional Reviewer
                      </Link>
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
            </motion.div>
          </MobilNav>

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
                  <li
                    className={
                      currentRoute === "/non-structural-steel-works"
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/non-structural-steel-works">
                      Non-Structural Steel Works
                    </Link>
                  </li>
                  <li
                    className={
                      currentRoute === "/structural-steel-works" ? "active" : ""
                    }
                  >
                    <Link href="/structural-steel-works">
                      Structural Steel Works
                    </Link>
                  </li>
                  <li
                    className={
                      currentRoute === "/tensile-fabric-structure"
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/tensile-fabric-structure">
                      Tensile Fabric Structure (HDPE & PVC)
                    </Link>
                  </li>
                  <li
                    className={
                      currentRoute ===
                      "/design-calculation-and-analysis-service"
                        ? "active"
                        : ""
                    }
                  >
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
                    <Link href="/hire-a-professional-reviewer">
                      Hire a Professional Reviewer
                    </Link>
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
