import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeCompo = () => {
  return (
    <Marquee pauseOnHover={true} style={{ flex: 2, marginLeft: 80 }}>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          margin: 0,
          fontWeight: "bold",
        }}
      >
        <Link href="/hire-a-professional-reviewer" style={{ color: "#fff" }}>
          Hire a Professional Reviewer
        </Link>
      </p>{" "}
    </Marquee>
  );
};

export default MarqueeCompo;
