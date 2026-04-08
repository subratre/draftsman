import React from "react";

const LogoLayout = () => {
  return (
    <div className="logo-layout">
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <div className="logo-gallery">
              <div className="logo-gallery-item">
                <img src="/assets/logohome/autocad_logo.png" />
              </div>
              <div className="logo-gallery-item">
                <img src="/assets/logohome/autodesk-advance-steel-1280x720.jpg" />
              </div>
              <div className="logo-gallery-item">
                <img src="/assets/logohome/idea statica logo.png" />
              </div>
              <div className="logo-gallery-item">
                <img src="/assets/logohome/procon.png" />
              </div>
              <div className="logo-gallery-item">
                <img src="/assets/logohome/revit logo.jpg" />
              </div>
              <div className="logo-gallery-item">
                <img src="/assets/logohome/sap etab.jpg" />
              </div>
              <div className="logo-gallery-item">
                <img src="/assets/logohome/TEKLA-Structures 1.jpg" />
              </div>
              <div className="logo-gallery-item">
                <img src="/assets/logohome/BIM1.png" />
              </div>
              <div className="logo-gallery-item">
                <img src="/assets/logohome/sketch-up.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="free_consult">
        <h4>FOR FREE CONSULTATION PLEASE CONTACT</h4>
        <a
          className="whatsapp-link"
          href="https://wa.me/919040759551"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="whatsapp-icon-shell">
            <span className="whatsapp-icon-circle">
              <i className="icofont-brand-whatsapp"></i>
            </span>
          </span>
          <span className="whatsapp-text-block">
            <span className="whatsapp-text-title">WhatsApp</span>
            <span className="whatsapp-text-subtitle">Click to Chat</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default LogoLayout;
