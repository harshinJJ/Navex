import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import "./contactWidget.css";

function ContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="contact-widget">
      <button className="widget-toggle" onClick={() => setOpen(!open)}>
        <FaPhoneAlt />
      </button>

      <div className={`contact-menu ${open ? "open" : ""}`}>
        <a
          href="https://wa.me/966553869253"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-item"
        >
          <FaWhatsapp className="wa" /> WhatsApp
        </a>

        <a href="mailto:info@navexglobal.com" className="menu-item">
          <FaEnvelope className="mail" /> Email
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-item"
        >
          <FaTwitter className="tw" /> Twitter
        </a>
      </div>
    </div>
  );
}

export default ContactWidget;
