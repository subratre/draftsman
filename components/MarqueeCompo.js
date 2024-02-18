import Link from "next/link";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const MarqueeCompo = () => {
  const [color, setColor] = useState("black");
  const [isBlue, setIsBlue] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlue((prevIsBlue) => !prevIsBlue);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setColor(isBlue ? "blue" : "#fff");
  }, [isBlue]);
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
        <Link
          href="/hire-a-professional-reviewer"
          style={{
            color,
            transition: "color 1s",
            textDecoration: "underline !important",
          }}
        >
          Hire a Professional Reviewer{" "}
        </Link>
      </p>{" "}
    </Marquee>
  );
};

export default MarqueeCompo;
