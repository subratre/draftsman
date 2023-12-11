import Link from "next/link";
import React from "react";

const TopHeader = () => {
  return (
    <section id="topbar" className="d-none d-lg-block">
      <div className="container d-flex">
        <div className="contact-info me-auto">
          <ul>
            <li>
              <i className="icofont-envelope"></i>
              <a href="mailto:info@himagotech.com">info@draftsman.com</a>
            </li>
            <li>
              <i className="icofont-phone"></i> (+971) 528663856{" "}
            </li>
          </ul>
        </div>
        <div className="cta">
          <Link href="/contact">Get Quote</Link>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
