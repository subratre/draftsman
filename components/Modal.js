// components/Modal.js
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

const Modal = ({ children }) => {
  const modalRoot =
    typeof document !== "undefined"
      ? document.getElementById("modalmine")
      : null;
  const modalElement = useRef(
    typeof document !== "undefined" ? document.createElement("div") : null
  );

  return modalRoot && modalElement.current
    ? createPortal(children, modalRoot)
    : null;
};

export default Modal;
