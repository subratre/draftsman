import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const MobilNav = ({ children, show }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = document.getElementById("modalmine");
  }, []);

  return show ? ref.current && createPortal(children, ref.current) : "";
};

export default MobilNav;
