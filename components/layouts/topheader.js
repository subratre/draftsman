import Link from "next/link";
import React from "react";
import MarqueeCompo from "../MarqueeCompo";

const TopHeader = () => {
  return (
    <section id="topbar" className="d-none d-lg-block">
      <div className="container d-flex" style={{ gap: 10 }}>
        <div className="contact-info me-auto">
          <ul>
            <li>
              <i className="icofont-envelope"></i>
              <a href="mailto:info@himagotech.com">sales@draftsmans.com</a>
            </li>
            <li>
              <i className="icofont-phone"></i> (+971) 528663856{" "}
            </li>
          </ul>
        </div>
        <MarqueeCompo />
        <div className="cta">
          <Link href="/contact">Get Quote</Link>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
