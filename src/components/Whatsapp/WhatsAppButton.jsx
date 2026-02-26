import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp.css";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/966553869253"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}

export default WhatsAppButton;
