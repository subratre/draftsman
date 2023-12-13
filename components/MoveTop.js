import React, { useEffect, useState } from "react";

const MoveTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <span
      className={`back-to-top ${visible ? "visible" : ""}`}
      style={{ display: "inline" }}
      onClick={scrollToTop}
    >
      <i class="icofont-simple-up"></i>
    </span>
  );
};

export default MoveTop;
